import { Filastrocca } from 'app/entity/gestione_filastrocca/Filastrocca';
import { FilastroccaDAOInterface } from './FilastroccaDAOInterface';
import { Pool } from 'pg';
import * as Database from 'app/Database';

export class FilastroccaDAO implements FilastroccaDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }
  get(id: number): Promise<Filastrocca> {
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

  save(filastrocca: Filastrocca): Promise<void> {
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

  update(filastrocca: Filastrocca): Promise<void> {
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
  getByCaregiverFamiliare(caregiverFamiliare: number): Promise<Filastrocca[]> {
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
