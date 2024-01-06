import { Pool } from 'pg';
import { PazienteDAOInterface } from './PazienteDAOInterface';
import { Database } from 'app/Database';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export class PazienteDAO implements PazienteDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.instance;
  }

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
            const paziente = res.rows[0] as Paziente;
            resolve(paziente);
          }
        });
      });
    });
  }

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
