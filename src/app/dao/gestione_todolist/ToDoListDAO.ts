import { Pool } from 'pg';
import * as Database from 'app/Database';
import { ToDoListDAOInterface } from './ToDoListDAOInterface';
import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';

export class ToDoListDAO implements ToDoListDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

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
