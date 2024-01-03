import { Pool } from 'pg';
import * as Database from 'app/Database';
import { CaregiverFamiliareDAOInterface } from './CaregiverFamiliareDAOInterface';
import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';

export class CaregiverFamiliareDAO implements CaregiverFamiliareDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

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
          } else {
            client.release();
            const caregiver_familiare = res.rows[0] as CaregiverFamiliare;
            resolve(caregiver_familiare);
          }
        });
      });
    });
  }

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
              const codice_identificativo = res.rows[0] as number;
              resolve(codice_identificativo);
            }
          }
        );
      })
    );
  }

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
