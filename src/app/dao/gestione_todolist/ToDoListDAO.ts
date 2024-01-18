import { Pool } from 'pg';
import * as Database from 'app/Database';
import { ToDoListDAOInterface } from './ToDoListDAOInterface';
import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';

/**
 * Represents a data access object for ToDoList entities.
 */
export class ToDoListDAO implements ToDoListDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

  /**
   * Retrieves all ToDoList entities from the database.
   * @returns A promise that resolves to an array of ToDoList entities.
   */
  public getAll(): Promise<ToDoList[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM to_do_list', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as ToDoList[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves a ToDoList entity by its ID from the database.
   * @param id - The ID of the ToDoList entity.
   * @returns A promise that resolves to the ToDoList entity.
   */
  public get(id: number): Promise<ToDoList> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM to_do_list WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const toDoList = new ToDoList(
              data.num_attivita,
              data.completata,
              data.med,
              data.paziente,
              data.id
            );
            resolve(toDoList);
          }
        });
      });
    });
  }

  /**
   * Retrieves all ToDoList entities associated with a specific medico from the database.
   * @param medico - The ID of the medico.
   * @returns A promise that resolves to an array of ToDoList entities.
   */
  public getByMed(medico: number): Promise<ToDoList[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM to_do_list WHERE med= $1';

        client?.query(query, [medico], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as ToDoList[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves all ToDoList entities associated with a specific paziente from the database.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to an array of ToDoList entities.
   */
  public getByPaziente(paziente: string): Promise<ToDoList[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM to_do_list WHERE paziente= $1';

        client?.query(query, [paziente], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as ToDoList[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves all ToDoList entities associated with a specific medico and paziente from the database.
   * @param medico - The ID of the medico.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to an array of ToDoList entities.
   */
  public getByMedAndPaz(medico: number, paziente: string): Promise<ToDoList[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }
        const query = 'SELECT * FROM to_do_list WHERE med= $1 AND paziente= $2';

        client?.query(query, [medico, paziente], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as ToDoList[]);
          }
        });
      });
    });
  }

  /**
   * Updates a ToDoList entity in the database.
   * @param toDoList - The updated ToDoList entity.
   * @returns A promise that resolves when the update is complete.
   */
  public update(toDoList: ToDoList): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE to_do_list SET (id, num_attivita, med, ' +
          'completata, paziente) = ($1, $2, $3, $4, $5)  WHERE id = $6';

        client?.query(
          query,
          [
            toDoList.id,
            toDoList.numAttivita,
            toDoList.med,
            toDoList.completata,
            toDoList.paziente,
            toDoList.id,
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
   * Saves a new ToDoList entity to the database.
   * @param toDoList - The ToDoList entity to be saved.
   * @returns A promise that resolves to the ID of the saved ToDoList entity.
   */
  public save(toDoList: ToDoList): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO to_do_list (num_attivita, med, ' +
          ' completata, paziente) VALUES ($1, $2, $3, $4) RETURNING id';

        client?.query(
          query,
          [
            toDoList.numAttivita,
            toDoList.med,
            toDoList.completata,
            toDoList.paziente,
          ],
          (err, res) => {
            if (err) {
              console.log(err.stack);
              reject(err);
              return;
            } else {
              client.release();
              resolve(res.rows[0].id);
            }
          }
        );
      })
    );
  }

  /**
   * Retrieves all Attivita entities associated with a specific ToDoList from the database.
   * @param toDoList - The ID of the ToDoList.
   * @returns A promise that resolves to an array of Attivita entities.
   */
  public getAllAttivitaByToDoList(toDoList: number): Promise<Attivita[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM attivita WHERE to_do_list= $1';
        client?.query(query, [toDoList], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Attivita[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves an Attivita entity by its ID from the database.
   * @param id - The ID of the Attivita entity.
   * @returns A promise that resolves to the Attivita entity.
   */
  public getAttivita(id: number): Promise<Attivita> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM attivita WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const attivita = new Attivita(
              data.to_do_list,
              data.testo,
              data.completata,
              data.commento,
              data.valutazione,
              data.id
            );
            resolve(attivita);
          }
        });
      });
    });
  }

  /**
   * Updates an Attivita entity in the database.
   * @param attivita - The updated Attivita entity.
   * @returns A promise that resolves when the update is complete.
   */
  public updateAttivita(attivita: Attivita): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE attivita SET (id, to_do_list, testo, completata, ' +
          'commento, valutazione) = ($1, $2, $3, $4, $5, $6)  WHERE id = $7';

        client?.query(
          query,
          [
            attivita.id,
            attivita.toDoList,
            attivita.testo,
            attivita.completata,
            attivita.commento,
            attivita.valutazione,
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
   * Saves a new Attivita entity to the database.
   * @param attivita - The Attivita entity to be saved.
   * @returns A promise that resolves to the ID of the saved Attivita entity.
   */
  public saveAttivita(attivita: Attivita): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO attivita (to_do_list, testo, completata,' +
          ' commento, valutazione) VALUES ($1, $2, $3, $4, $5) RETURNING id';

        client?.query(
          query,
          [
            attivita.toDoList,
            attivita.testo,
            attivita.completata,
            attivita.commento,
            attivita.valutazione,
          ],
          (err, res) => {
            if (err) {
              console.log(err.stack);
              reject(err);
              return;
            } else {
              client.release();
              resolve(res.rows[0].id);
            }
          }
        );
      })
    );
  }
}
