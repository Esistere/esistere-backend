import { Pool } from 'pg';
import { PazienteDAOInterface } from './PazienteDAOInterface';
import { Database } from 'app/Database';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

/**
 * Represents a data access object for the Paziente entity.
 */
export class PazienteDAO implements PazienteDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.instance;
  }

  /**
   * Retrieves all the Paziente entities from the database.
   * @returns A promise that resolves to an array of Paziente objects.
   */
  public getAll(): Promise<Paziente[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM paziente', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Paziente[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves a Paziente entity from the database based on the provided codice_fiscale.
   * @param codice_fiscale - The codice fiscale of the Paziente.
   * @returns A promise that resolves to a Paziente object.
   */
  public get(codice_fiscale: string): Promise<Paziente> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM paziente WHERE codice_fiscale = $1';

        client?.query(query, [codice_fiscale], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const paziente = new Paziente(
              data.codice_fiscale,
              data.nome,
              data.cognome,
              data.data_di_nascita,
              data.med,
              data.cg_fam
            );
            resolve(paziente);
          }
        });
      });
    });
  }

  /**
   * Retrieves all the Paziente entities associated with the provided medico.
   * @param medico - The ID of the medico.
   * @returns A promise that resolves to an array of Paziente objects.
   */
  public getPazienteByMed(medico: number): Promise<Paziente[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }
        const query = 'SELECT * FROM paziente WHERE med = $1';

        client?.query(query, [medico], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Paziente[]);
          }
        });
      });
    });
  }

  /**
   * Saves a new Paziente entity to the database.
   * @param paziente - The Paziente object to be saved.
   * @returns A promise that resolves when the operation is complete.
   */
  public save(paziente: Paziente): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO paziente (codice_fiscale, nome, cognome, ' +
          'data_di_nascita, med, cg_fam) VALUES ($1, $2, $3, $4, $5, $6)';

        client?.query(
          query,
          [
            paziente.codiceFiscale,
            paziente.nome,
            paziente.cognome,
            paziente.dataDiNascita,
            paziente.medico,
            paziente.caregiverFamiliare,
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
   * Updates an existing Paziente entity in the database.
   * @param paziente - The Paziente object to be updated.
   * @returns A promise that resolves when the operation is complete.
   */
  public update(paziente: Paziente): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE Paziente SET (codice_fiscale, nome, cognome, ' +
          'data_di_nascita, med, cg_fam) = ($1, $2, $3, $4, $5, $6) ' +
          'WHERE codice_fiscale = $7';

        client?.query(
          query,
          [
            paziente.codiceFiscale,
            paziente.nome,
            paziente.cognome,
            paziente.dataDiNascita,
            paziente.medico,
            paziente.caregiverFamiliare,
            paziente.codiceFiscale,
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
}
