/**
 * Represents a data access object for the Medico entity.
 */
import { Pool } from 'pg';
import * as Database from 'app/Database';
import { MedicoDAOInterface } from './MedicoDAOInterface';
import { Medico } from 'app/entity/gestione_autenticazione/Medico';

export class MedicoDAO implements MedicoDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

  /**
   * Retrieves all the Medico entities from the database.
   * @returns A promise that resolves to an array of Medico entities.
   */
  public getAll(): Promise<Medico[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM medico', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Medico[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves a specific Medico entity from the database based on the provided codice.
   * @param codice - The id or email of the Medico entity.
   * @returns A promise that resolves to the Medico entity.
   */
  public get(codice: string | number): Promise<Medico> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        let key: string;

        if (typeof codice === 'string') key = 'email';
        else key = 'codice_identificativo';

        const query = `SELECT * FROM medico WHERE ${key} = $1`;

        client?.query(query, [codice], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else if (!res.rows[0]) {
            resolve(res.rows[0]);
          } else {
            client.release();
            const data = res.rows[0];
            const medico = new Medico(
              data.nome,
              data.cognome,
              data.indirizzo_studio,
              data.numero_civico,
              data.numero_telefono_studio,
              data.citta,
              data.email,
              data.passwd,
              data.codice_identificativo
            );
            resolve(medico);
          }
        });
      });
    });
  }

  /**
   * Saves a new Medico entity to the database.
   * @param medico - The Medico entity to be saved.
   * @returns A promise that resolves when the Medico entity is successfully saved.
   */
  public save(medico: Medico): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO medico (nome, cognome, ' +
          'indirizzo_studio, citta, numero_civico, numero_telefono_studio, ' +
          'email, passwd) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

        client?.query(
          query,
          [
            medico.nome,
            medico.cognome,
            medico.indirizzoStudio,
            medico.citta,
            medico.numCivico,
            medico.numTelefonoStudio,
            medico.email,
            medico.passwd,
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
   * Updates an existing Medico entity in the database.
   * @param medico - The updated Medico entity.
   * @returns A promise that resolves when the Medico entity is successfully updated.
   */
  public update(medico: Medico): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE medico SET (codice_identificativo, nome, ' +
          'cognome, indirizzo_studio, citta, numero_civico, ' +
          'numero_telefono_studio, email, passwd) = ($1, $2, $3, $4, $5, $6, ' +
          '$7, $8, $9) WHERE codice_identificativo = $10';

        client?.query(
          query,
          [
            medico.codiceIdentificativo,
            medico.nome,
            medico.cognome,
            medico.indirizzoStudio,
            medico.citta,
            medico.numCivico,
            medico.numTelefonoStudio,
            medico.email,
            medico.passwd,
            medico.codiceIdentificativo,
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
