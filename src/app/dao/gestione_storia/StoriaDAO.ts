import { Pool } from 'pg';
import * as Database from 'app/Database';
import { StoriaDAOInterface } from './StoriaDAOInterface';
import { Storia } from 'app/entity/gestione_storia/Storia';
import { Media } from 'app/entity/gestione_storia/Media';

/**
 * Represents a data access object for managing Storia entities.
 */
export class StoriaDAO implements StoriaDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

  /**
   * Retrieves all Storia entities from the database.
   * @returns A promise that resolves to an array of Storia entities.
   */
  public getAll(): Promise<Storia[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM storia', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Storia[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves a Storia entity by its ID from the database.
   * @param id - The ID of the Storia entity.
   * @returns A promise that resolves to the Storia entity.
   */
  public get(id: number): Promise<Storia> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM storia WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const storia = new Storia(data.cgFam, data.testo, data.id);
            resolve(storia);
          }
        });
      });
    });
  }

  /**
   * Saves a Storia entity to the database.
   * @param storia - The Storia entity to be saved.
   * @returns A promise that resolves the id of the saved Storia entity.
   */
  public save(storia: Storia): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO storia (cg_fam, testo) VALUES ($1, $2) RETURNING id';

        client?.query(query, [storia.cgFam, storia.testo], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
            return;
          } else {
            client.release();
            const result = res.rows[0];
            resolve(result.id);
          }
        });
      })
    );
  }

  /**
   * Updates a Storia entity in the database.
   * @param storia - The updated Storia entity.
   * @returns A promise that resolves when the update operation is complete.
   */
  public update(storia: Storia): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE storia SET (id, cg_fam, testo) = ($1, $2, $3)  WHERE id = $4';

        client?.query(
          query,
          [storia.id, storia.cgFam, storia.testo, storia.id],
          (err) => {
            if (err) {
              console.log(err.stack);
              reject(err);
              return;
            } else {
              client.release();
              resolve();
            }
          }
        );
      })
    );
  }

  /**
   * Retrieves all Storia entities associated with a caregiver familiare from the database.
   * @param caregiverFamiliare - The ID of the caregiver familiare.
   * @returns A promise that resolves to an array of Storia entities.
   */
  public getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<Storia[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM storia WHERE cg_fam = $1';

        client?.query(query, [caregiverFamiliare], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Storia[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves all Media entities from the database.
   * @returns A promise that resolves to an array of Media entities.
   */
  public getAllMedia(): Promise<Media[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM media', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Media[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves a Media entity by its ID from the database.
   * @param id - The ID of the Media entity.
   * @returns A promise that resolves to the Media entity.
   */
  public getMedia(id: number): Promise<Media> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM media WHERE id = $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const media = new Media(
              data.id,
              data.storia,
              data.allegato,
              data.descrizione,
              data.tipo
            );
            resolve(media);
          }
        });
      });
    });
  }

  /**
   * Saves a Media entity to the database.
   * @param media - The Media entity to be saved.
   * @returns A promise that resolves when the save operation is complete.
   */
  public saveMedia(media: Media): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO media (storia, allegato, descrizione, tipo) ' +
          'VALUES ($1, $2, $3, $4)';

        client?.query(
          query,
          [media.storia, media.allegato, media.descrizione, media.tipo],
          (err) => {
            if (err) {
              console.log(err.stack);
              reject(err);
              return;
            } else {
              client.release();
              resolve();
            }
          }
        );
      })
    );
  }

  /**
   * Updates a Media entity in the database.
   * @param media - The updated Media entity.
   * @returns A promise that resolves when the update operation is complete.
   */
  public updateMedia(media: Media): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE media SET (id, storia, allegato, descrizione, tipo)' +
          '= ($1, $2, $3, $4, $5)  WHERE id = $6';

        client?.query(
          query,
          [
            media.id,
            media.storia,
            media.allegato,
            media.descrizione,
            media.tipo,
            media.id,
          ],
          (err) => {
            if (err) {
              console.log(err.stack);
              reject(err);
              return;
            } else {
              client.release();
              resolve();
            }
          }
        );
      })
    );
  }

  /**
   * Retrieves all Media entities associated with a Storia from the database.
   * @param storia - The ID of the Storia entity.
   * @returns A promise that resolves to an array of Media entities.
   */
  public getMediaByStoria(storia: number): Promise<Media[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM media WHERE storia = $1';

        client?.query(query, [storia], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Media[]);
          }
        });
      });
    });
  }
}
