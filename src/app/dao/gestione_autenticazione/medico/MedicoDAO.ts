import { Pool } from 'pg';
import * as Database from 'app/Database';
import { MedicoDAOInterface } from './MedicoDAOInterface';
import { Medico } from 'app/entity/gestione_autenticazione/Medico';

export class MedicoDAO implements MedicoDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

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
          } else {
            client.release();
            const medico = res.rows[0] as Medico;
            resolve(medico);
          }
        });
      });
    });
  }

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
          'email, passwd) SELECT $1, $2, $3, $4, $5, $6, $7, $8 ' +
          'WHERE NOT EXISTS (' +
          'SELECT email FROM caregiver_familiare WHERE email = $7 ) ';

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
