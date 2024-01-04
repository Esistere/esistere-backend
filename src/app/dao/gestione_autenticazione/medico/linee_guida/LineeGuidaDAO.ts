import { Pool } from 'pg';
import { Database } from 'app/Database';
import { LineeGuidaDAOInterface } from './LineeGuidaDAOInterface';
import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';

export class LineeGuidaDAO implements LineeGuidaDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.instance;
  }

  public getAll(): Promise<LineaGuida[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM linea_guida_quiz', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as LineaGuida[]);
          }
        });
      });
    });
  }

  public get(id: number): Promise<LineaGuida> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM linea_guida_quiz WHERE id = $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const linea_guida_quiz = res.rows[0] as LineaGuida;
            resolve(linea_guida_quiz);
          }
        });
      });
    });
  }

  public save(linea_guida_quiz: LineaGuida): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO linea_guida_quiz (med,linea_guida)' + ' VALUES ($1, $2)';

        client?.query(
          query,
          [
            linea_guida_quiz.id,
            linea_guida_quiz.medico,
            linea_guida_quiz.lineeGuida,
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
  public update(linea_guida_quiz: LineaGuida): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE linea_guida_quiz SET (id,med,linea_guida) = ' +
          '($1, $2, $3) WHERE id = $4';

        client?.query(
          query,
          [
            linea_guida_quiz.id,
            linea_guida_quiz.medico,
            linea_guida_quiz.lineeGuida,
            linea_guida_quiz.id,
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
