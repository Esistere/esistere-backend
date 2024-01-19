import { Pool } from 'pg';
import { Database } from 'app/Database';
import { LineeGuidaDAOInterface } from './LineeGuidaDAOInterface';
import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';

/**
 * Represents a data access object for managing LineeGuida entities.
 */
export class LineeGuidaDAO implements LineeGuidaDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.instance;
  }

  /**
   * Retrieves all LineaGuida entities from the database.
   * @returns A promise that resolves to an array of LineaGuida entities.
   */
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

  /**
   * Retrieves a LineaGuida entity by its ID from the database.
   * @param id - The ID of the LineaGuida entity.
   * @returns A promise that resolves to the LineaGuida entity.
   */
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
            const data = res.rows[0];
            const linea_guida_quiz = new LineaGuida(
              data.linea_guida,
              data.med,
              data.id
            );
            resolve(linea_guida_quiz);
          }
        });
      });
    });
  }

  /**
   * Retrieves a LineaGuida entity by corresponding Medico from the database.
   * @param id - The ID of the associated Medico.
   * @returns A promise that resolves to the LineaGuida entity.
   */
  public getByMed(medico: number): Promise<LineaGuida> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM linea_guida_quiz WHERE med = $1';

        client?.query(query, [medico], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const linea_guida_quiz = new LineaGuida(
              data.linea_guida,
              data.med,
              data.id
            );
            resolve(linea_guida_quiz);
          }
        });
      });
    });
  }

  /**
   * Saves a LineaGuida entity to the database.
   * @param linea_guida_quiz - The LineaGuida entity to be saved.
   * @returns A promise that resolves when the entity is successfully saved.
   */
  public save(linea_guida_quiz: LineaGuida): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO linea_guida_quiz (med, linea_guida)' +
          ' VALUES ($1, $2)';

        client?.query(
          query,
          [linea_guida_quiz.medico, linea_guida_quiz.lineeGuida],
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
   * Updates a LineaGuida entity in the database.
   * @param linea_guida_quiz - The LineaGuida entity to be updated.
   * @returns A promise that resolves when the entity is successfully updated.
   */
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
