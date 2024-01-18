import { Pool } from 'pg';
import * as Database from 'app/Database';
import { CaregiverFamiliareDAOInterface } from './CaregiverFamiliareDAOInterface';
import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';

/**
 * Data Access Object (DAO) for managing Caregiver Familiare entities.
 */
export class CaregiverFamiliareDAO implements CaregiverFamiliareDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

  /**
   * Retrieves all Caregiver Familiare entities from the database.
   * @returns A promise that resolves to an array of Caregiver Familiare entities.
   */
  public getAll(): Promise<CaregiverFamiliare[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM caregiver_familiare', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as CaregiverFamiliare[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves a Caregiver Familiare entity from the database based on the provided id.
   * @param codice - The id or email of the Caregiver Familiare.
   * @returns A promise that resolves to the retrieved Caregiver Familiare entity.
   */
  public get(codice: string | number): Promise<CaregiverFamiliare> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        let key: string;

        if (typeof codice === 'string') key = 'email';
        else key = 'codice_identificativo';

        const query = `SELECT * FROM caregiver_familiare WHERE ${key} = $1`;

        client?.query(query, [codice], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else if (!res.rows[0]) {
            resolve(res.rows[0]);
          } else {
            client.release();
            const data = res.rows[0];
            const caregiver_familiare = new CaregiverFamiliare(
              data.nome,
              data.cognome,
              data.indirizzo,
              data.numero_civico,
              data.data_di_nascita,
              data.numero_telefono,
              data.citta,
              data.email,
              data.passwd,
              data.codice_identificativo
            );
            resolve(caregiver_familiare);
          }
        });
      });
    });
  }

  /**
   * Saves a Caregiver Familiare entity to the database.
   * @param caregiver_familiare - The Caregiver Familiare entity to be saved.
   * @returns A promise that resolves to the codice_identificativo of the saved entity.
   */
  public save(caregiver_familiare: CaregiverFamiliare): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO caregiver_familiare (nome, cognome, ' +
          'indirizzo, citta, numero_civico, data_di_nascita, ' +
          'numero_telefono, email, passwd) ' +
          'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) ' +
          'RETURNING codice_identificativo';

        client?.query(
          query,
          [
            caregiver_familiare.nome,
            caregiver_familiare.cognome,
            caregiver_familiare.indirizzo,
            caregiver_familiare.citta,
            caregiver_familiare.numCivico,
            caregiver_familiare.dataDiNascita,
            caregiver_familiare.numTelefono,
            caregiver_familiare.email,
            caregiver_familiare.passwd,
          ],
          (err, res) => {
            if (err) {
              console.log(err.stack);
              reject(err);
            } else {
              client.release();
              const result = res.rows[0];
              resolve(result.codice_identificativo);
            }
          }
        );
      })
    );
  }

  /**
   * Updates a Caregiver Familiare entity in the database.
   * @param caregiver_familiare - The updated Caregiver Familiare entity.
   * @returns A promise that resolves when the update is successful.
   */
  public update(caregiver_familiare: CaregiverFamiliare): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE caregiver_familiare SET (codice_identificativo, nome, ' +
          'cognome, indirizzo, citta, numero_civico, data_di_nascita, ' +
          'numero_telefono, email, passwd) = ' +
          '($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) ' +
          'WHERE codice_identificativo = $11';

        client?.query(
          query,
          [
            caregiver_familiare.codiceIdentificativo,
            caregiver_familiare.nome,
            caregiver_familiare.cognome,
            caregiver_familiare.indirizzo,
            caregiver_familiare.citta,
            caregiver_familiare.numCivico,
            caregiver_familiare.dataDiNascita,
            caregiver_familiare.numTelefono,
            caregiver_familiare.email,
            caregiver_familiare.passwd,
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
