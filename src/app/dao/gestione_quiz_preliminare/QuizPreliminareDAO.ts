import { Pool } from 'pg';
import * as Database from 'app/Database';
import { QuizPreliminareDAOInterface } from './QuizPreliminareDAOInterface';
import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';

/**
 * Represents a data access object for Quiz Preliminare.
 */
export class QuizPreliminareDAO implements QuizPreliminareDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

  /**
   * Retrieves all Quiz Preliminare records from the database.
   * @returns A promise that resolves to an array of QuizPreliminare objects.
   */
  public getAll(): Promise<QuizPreliminare[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM quiz_preliminare', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as QuizPreliminare[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves a Quiz Preliminare record by its ID from the database.
   * @param id - The ID of the Quiz Preliminare.
   * @returns A promise that resolves to a QuizPreliminare object.
   */
  public get(id: number): Promise<QuizPreliminare> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM quiz_preliminare WHERE id = $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const quizPreliminare = new QuizPreliminare(
              data.numero_domande,
              data.sage,
              data.med,
              data.paziente,
              data.punteggio_totale,
              data.id
            );
            resolve(quizPreliminare);
          }
        });
      });
    });
  }

  /**
   * Saves a Quiz Preliminare record to the database.
   * @param quizPreliminare - The QuizPreliminare object to be saved.
   * @returns A promise that resolves to the ID of the saved Quiz Preliminare.
   */
  public save(quizPreliminare: QuizPreliminare): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO quiz_preliminare (numero_domande, sage, ' +
          'punteggio_totale , med, paziente) VALUES ($1, $2, $3, $4, $5) ' +
          'RETURNING id';

        console.log(quizPreliminare);
        client?.query(
          query,
          [
            quizPreliminare.numDomande,
            quizPreliminare.sage,
            quizPreliminare.punteggioTot,
            quizPreliminare.medico,
            quizPreliminare.paziente,
          ],
          (err, res) => {
            if (err) {
              console.log(err.stack);
              reject(err);
              return;
            } else {
              client.release();
              const result = res.rows[0];
              resolve(result.id);
            }
          }
        );
      })
    );
  }
  /**
   * Updates a Quiz Preliminare record in the database.
   * @param quizPreliminare - The QuizPreliminare object to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  public update(quizPreliminare: QuizPreliminare): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE quiz_preliminare SET (id, numero_domande, ' +
          'sage, punteggio_totale,' +
          ' med, paziente) = ($1, $2, $3, $4, $5, $6)  WHERE id = $7';

        client?.query(
          query,
          [
            quizPreliminare.id,
            quizPreliminare.numDomande,
            quizPreliminare.sage,
            quizPreliminare.punteggioTot,
            quizPreliminare.medico,
            quizPreliminare.paziente,
            quizPreliminare.id,
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
   * Retrieves all Quiz Preliminare records associated with a specific medico from the database.
   * @param medico - The ID of the medico.
   * @returns A promise that resolves to an array of QuizPreliminare objects.
   */
  public getByMed(medico: number): Promise<QuizPreliminare[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM quiz_preliminare WHERE med= $1';

        client?.query(query, [medico], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as QuizPreliminare[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves all Quiz Preliminare records associated with a specific paziente from the database.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to an array of QuizPreliminare objects.
   */
  public getByPaziente(paziente: string): Promise<QuizPreliminare> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM quiz_preliminare WHERE paziente= $1';

        client?.query(query, [paziente], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const quizPreliminare = new QuizPreliminare(
              data.numero_domande,
              data.sage,
              data.med,
              data.paziente,
              data.punteggio_totale,
              data.id
            );
            resolve(quizPreliminare);
          }
        });
      });
    });
  }

  /**
   * Retrieves all DomandaQuizPreliminare records from the database.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare objects.
   */
  public getAllDomande(): Promise<DomandaQuizPreliminare[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM domanda_quiz_preliminare', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as DomandaQuizPreliminare[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves all DomandaQuizPreliminare records associated with a specific Quiz Preliminare from the database.
   * @param quizPreliminare - The ID of the Quiz Preliminare.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare objects.
   */
  public getDomandeByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'SELECT * FROM domanda_quiz_preliminare WHERE quiz_preliminare = $1';

        client?.query(query, [quizPreliminare], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as DomandaQuizPreliminare[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves a DomandaQuizPreliminare record by its ID from the database.
   * @param id - The ID of the DomandaQuizPreliminare.
   * @returns A promise that resolves to a DomandaQuizPreliminare object.
   */
  public getDomanda(id: number): Promise<DomandaQuizPreliminare> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM domanda_quiz_preliminare WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const domandaQuizPreliminare = new DomandaQuizPreliminare(
              data.id,
              data.domanda,
              data.quiz_preliminare
            );
            resolve(domandaQuizPreliminare);
          }
        });
      });
    });
  }

  /**
   * Saves a DomandaQuizPreliminare record to the database.
   * @param domanda - The DomandaQuizPreliminare object to be saved.
   * @returns A promise that resolves to the ID of the saved DomandaQuizPreliminare.
   */
  public saveDomanda(domanda: DomandaQuizPreliminare): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO domanda_quiz_preliminare' +
          '(domanda, quiz_preliminare) VALUES ($1, $2) RETURNING id';
        console.log(domanda);
        client?.query(
          query,
          [domanda.domanda, domanda.quizPreliminare],
          (err, res) => {
            if (err) {
              console.log(err.stack);
              reject(err);
              return;
            } else {
              client.release();
              const result = res.rows[0];
              resolve(result.id);
            }
          }
        );
      })
    );
  }

  /**
   * Updates a DomandaQuizPreliminare record in the database.
   * @param domanda - The DomandaQuizPreliminare object to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  public updateDomanda(domanda: DomandaQuizPreliminare): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE domanda_quiz_prelminare SET (id, domanda, ' +
          'quiz_preliminare) = ($1, $2, $3)  WHERE id = $4';

        client?.query(
          query,
          [domanda.id, domanda.domanda, domanda.quizPreliminare, domanda.id],
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

  public getByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'SELECT * FROM domanda_quiz_preliminare WHERE quiz_preliminare = $1';

        client?.query(query, [quizPreliminare], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as DomandaQuizPreliminare[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves all RispostaQuizPreliminare records from the database.
   * @returns A promise that resolves to an array of RispostaQuizPreliminare objects.
   */
  public getAllRisposta(): Promise<RispostaQuizPreliminare[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM risposta_quiz_preliminare', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as RispostaQuizPreliminare[]);
          }
        });
      });
    });
  }

  /**
   * Retrieves a RispostaQuizPreliminare record by its ID from the database.
   * @param id - The ID of the RispostaQuizPreliminare.
   * @returns A promise that resolves to a RispostaQuizPreliminare object.
   */
  public getRisposta(id: number): Promise<RispostaQuizPreliminare> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM risposta_quiz_preliminare WHERE id = $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const rispostaQuizPreliminare = new RispostaQuizPreliminare(
              data.risposta,
              data.paziente,
              data.domanda_preliminare
            );
            resolve(rispostaQuizPreliminare);
          }
        });
      });
    });
  }

  /**
   * Retrieves a RispostaQuizPreliminare record by its Domanda and Paziente from the database.
   * @param domanda - The ID of the DomandaQuizPreliminare.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to a RispostaQuizPreliminare object.
   */
  public getByDomandaAndPaziente(
    domanda: number,
    paziente: string
  ): Promise<RispostaQuizPreliminare> {
    return new Promise<RispostaQuizPreliminare>((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }
        const query =
          'SELECT * FROM risposta_quiz_preliminare WHERE ' +
          'domanda = $1 AND paziente = $2';

        client?.query(query, [domanda, paziente], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const rispostaQuizPreliminare = new RispostaQuizPreliminare(
              data.risposta,
              data.paziente,
              data.domanda
            );
            resolve(rispostaQuizPreliminare);
          }
        });
      });
    });
  }

  public saveRisposta(risposta: RispostaQuizPreliminare): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO risposta_quiz_preliminare' +
          '(domanda, paziente, risposta) VALUES ($1, $2, $3)';
        console.log(risposta);
        client?.query(
          query,
          [risposta.domandaPreliminare, risposta.paziente, risposta.risposta],
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

  public updateRisposta(risposta: RispostaQuizPreliminare): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE risposta_quiz_prelminare SET (id, domanda, ' +
          'paziente, risposta) = ($1, $2, $3, $4)  WHERE id = $5';

        client?.query(
          query,
          [
            risposta.id,
            risposta.risposta,
            risposta.domandaPreliminare,
            risposta.paziente,
            risposta.id,
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

  public getRispostaByPaziente(
    paziente: string,
    id: number
  ): Promise<RispostaQuizPreliminare> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'SELECT * FROM risposta_quiz_preliminare' +
          'WHERE paziente = $1 AND domanda = $2';

        client?.query(query, [paziente, id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const rispostaQuizPreliminare = new RispostaQuizPreliminare(
              data.risposta,
              data.domanda_preliminare,
              data.paziente
            );
            resolve(rispostaQuizPreliminare);
          }
        });
      });
    });
  }
}
