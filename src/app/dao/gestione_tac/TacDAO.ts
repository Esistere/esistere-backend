import { Pool } from 'pg';
import * as Database from 'app/Database';
import { Tac } from 'app/entity/gestione_tac/Tac';
import { TacDAOInterface } from './TacDAOInterface';

export class TacDAO implements TacDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

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

  public get(id: number): Promise<Tac> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM tac WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const tac = new Tac(
              data.stadio,
              data.allegato,
              data.medico,
              data.paziente,
              data.id
            );
            resolve(tac);
          }
        });
      });
    });
  }

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
