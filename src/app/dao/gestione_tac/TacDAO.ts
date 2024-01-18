import { Pool } from 'pg';
import * as Database from 'app/Database';
import { Tac } from 'app/entity/gestione_tac/Tac';
import { TacDAOInterface } from './TacDAOInterface';

/**
 * Represents a Data Access Object (DAO) for Tac entities.
 */
export class TacDAO implements TacDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

  /**
   * Retrieves all Tac entities from the database.
   * @returns A promise that resolves to an array of Tac entities.
   */
  public getAll(): Promise<Tac[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM tac', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Tac[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves a Tac entity by its ID from the database.
   * @param id - The ID of the Tac entity.
   * @returns A promise that resolves to the Tac entity.
   */
  public get(id: number): Promise<Tac> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM tac WHERE id = $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const tac = new Tac(
              data.stadio,
              data.med,
              data.paziente,
              data.allegato,
              data.id
            );
            resolve(tac);
          }
        });
      });
    });
  }

  /**
   * Retrieves all Tac entities associated with a specific medico from the database.
   * @param medico - The ID of the medico.
   * @returns A promise that resolves to an array of Tac entities.
   */
  public getByMed(medico: number): Promise<Tac[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM tac WHERE med= $1';

        client?.query(query, [medico], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Tac[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves all Tac entities associated with a specific paziente from the database.
   * @param paz - The ID of the paziente.
   * @returns A promise that resolves to an array of Tac entities.
   */
  public getByPaziente(paz: string): Promise<Tac[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM tac WHERE paziente= $1';

        client?.query(query, [paz], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Tac[]);
          }
        });
      });
    });
  }

  /**
   * Saves a Tac entity to the database.
   * @param tac - The Tac entity to be saved.
   * @returns A promise that resolves when the save operation is complete.
   */
  public save(tac: Tac): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO tac ' +
          '(paziente, med, allegato, stadio) VALUES ($1, $2, $3, $4)';

        client?.query(
          query,
          [tac.paziente, tac.medico, tac.allegato, tac.stadio],
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
   * Updates a Tac entity in the database.
   * @param tac - The Tac entity to be updated.
   * @returns A promise that resolves when the update operation is complete.
   */
  public update(tac: Tac): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE tac SET (id, paziente, med, allegato, stadio)' +
          '= ($1, $2, $3, $4, $5)  WHERE id = $6';

        client?.query(
          query,
          [tac.id, tac.paziente, tac.medico, tac.allegato, tac.stadio, tac.id],
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
}
