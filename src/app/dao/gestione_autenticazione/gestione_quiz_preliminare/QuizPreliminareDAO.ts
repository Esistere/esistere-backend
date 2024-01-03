import { Pool } from 'pg';
import * as Database from 'app/Database';
import { QuizPreliminareDAOInterface } from './QuizPreliminareDAOInterface';
import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';

export class QuizPreliminareDAO implements QuizPreliminareDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

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

  public getByMed(medico: number): Promise<QuizPreliminare[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM quiz_preliminare WHERE med= ?1';

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
          'SELECT * FROM domanda_quiz_preliminare WHERE quiz_preliminare = ?1';

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

  getAllRisposta(): Promise<RispostaQuizPreliminare[]> {
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

  getRispostaByPaziente(
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
          'SELECT * FROM risposta_quiz_preliminare WHERE paziente= $1 AND domanda= $2';

        client?.query(query, [paziente, id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const rispostaQuizPreliminare = res
              .rows[0] as RispostaQuizPreliminare;
            resolve(rispostaQuizPreliminare);
          }
        });
      });
    });
  }

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
            const domandaQuizPreliminare = res
              .rows[0] as DomandaQuizPreliminare;
            resolve(domandaQuizPreliminare);
          }
        });
      });
    });
  }

  getRisposta(id: number): Promise<RispostaQuizPreliminare> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM risposta_quiz_preliminare WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const rispostaQuizPreliminare = res
              .rows[0] as RispostaQuizPreliminare;
            resolve(rispostaQuizPreliminare);
          }
        });
      });
    });
  }

  public get(id: number): Promise<QuizPreliminare> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM quiz_preliminare WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const quizPreliminare = res.rows[0] as QuizPreliminare;
            resolve(quizPreliminare);
          }
        });
      });
    });
  }

  public save(quizPreliminare: QuizPreliminare): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO quiz_preliminare (id, numero_domande, sage, ' +
          'punteggio_totale , med, paziente) VALUES ($1, $2, $3, $4, $5, $6)';

        client?.query(
          query,
          [
            quizPreliminare.id,
            quizPreliminare.numDomande,
            quizPreliminare.sage,
            quizPreliminare.punteggioTot,
            quizPreliminare.medico,
            quizPreliminare.paziente,
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

  public saveDomanda(domanda: DomandaQuizPreliminare): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO domanda_quiz_preliminare' +
          '(id, domanda, quiz_preliminare) VALUES ($1, $2, $3)';

        client?.query(
          query,
          [domanda.id, domanda.domanda, domanda.quizPreliminare],
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

  saveRisposta(risposta: RispostaQuizPreliminare): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO risposta_quiz_preliminare' +
          '(id, domanda, paziente, risposta) VALUES ($1, $2, $3, $4)';

        client?.query(
          query,
          [
            risposta.id,
            risposta.risposta,
            risposta.domandaPreliminare,
            risposta.paziente,
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

  public update(quizPreliminare: QuizPreliminare): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE medico SET (id, numero_domande, sage, punteggio_totale,' +
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
}
