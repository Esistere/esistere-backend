import { Pool } from 'pg';
import { PazienteDAOInterface } from './PazienteDAOInterface';
import { Database } from 'app/Database';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export class PazienteDAO implements PazienteDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.instance;
  }

  public get getAll(): Promise<Paziente[]> {
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
}
