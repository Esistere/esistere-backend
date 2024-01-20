import { Filastrocca } from 'app/entity/gestione_filastrocca/Filastrocca';
import { FilastroccaDAOInterface } from './FilastroccaDAOInterface';
import { Pool } from 'pg';
import * as Database from 'app/Database';

/**
 * Represents a data access object for managing Filastrocca entities.
 */

export class FilastroccaDAO implements FilastroccaDAOInterface {
  private pool: Pool;

  /**
   * Constructs a new instance of FilastroccaDAO.
   */
  constructor() {
    this.pool = Database.Database.instance;
  }

  /**
   * Retrieves a Filastrocca entity by its ID.
   * @param id - The ID of the Filastrocca entity.
   * @returns A promise that resolves with the retrieved Filastrocca entity.
   */
  public get(id: number): Promise<Filastrocca> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM filastrocca WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const filastrocca = new Filastrocca(
              data.titolo,
              data.testo,
              data.autore,
              data.cg_fam,
              data.id
            );
            resolve(filastrocca);
          }
        });
      });
    });
  }

  /**
   * Saves a Filastrocca entity.
   * @param filastrocca - The Filastrocca entity to be saved.
   * @returns A promise that resolves when the Filastrocca entity is successfully saved.
   */
  public save(filastrocca: Filastrocca): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO filastrocca (titolo, testo, ' +
          'autore, cg_fam) VALUES ($1, $2, $3, $4)';

        client?.query(
          query,
          [
            filastrocca.titolo,
            filastrocca.testo,
            filastrocca.autore,
            filastrocca.caregiverFamiliare,
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
   * Updates a Filastrocca entity.
   * @param filastrocca - The Filastrocca entity to be updated.
   * @returns A promise that resolves when the Filastrocca entity is successfully updated.
   */
  public update(filastrocca: Filastrocca): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE filastrocca SET (id, titolo, testo, autore, ' +
          'cg_fam) = ($1, $2, $3, $4, $5)  WHERE id = $6';

        client?.query(
          query,
          [
            filastrocca.id,
            filastrocca.titolo,
            filastrocca.testo,
            filastrocca.autore,
            filastrocca.caregiverFamiliare,
            filastrocca.id,
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
   * Retrieves Filastrocca entities by caregiver familiare.
   * @param caregiverFamiliare - The ID of the caregiver familiare.
   * @returns A promise that resolves with an array of Filastrocca entities.
   */
  public getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<Filastrocca[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM filastrocca WHERE cg_fam= $1';

        client?.query(query, [caregiverFamiliare], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Filastrocca[]);
          }
        });
      });
    });
  }
}
