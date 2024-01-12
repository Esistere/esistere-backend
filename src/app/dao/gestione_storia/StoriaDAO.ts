import { Pool } from 'pg';
import * as Database from 'app/Database';
import { StoriaDAOInterface } from './StoriaDAOInterface';
import { Storia } from 'app/entity/gestione_storia/Storia';
import { Media } from 'app/entity/gestione_storia/Media';

export class StoriaDAO implements StoriaDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

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

  public save(storia: Storia): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'INSERT INTO storia (cg_fam, testo) VALUES ($1, $2)';

        client?.query(query, [storia.cgFam, storia.testo], (err) => {
          if (err) {
            console.log(err.stack);
            reject(err);
            return;
          } else {
            client.release();
            resolve();
          }
        });
      })
    );
  }

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
