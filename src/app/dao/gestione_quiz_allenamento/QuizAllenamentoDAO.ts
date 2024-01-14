import { Pool } from 'pg';
import * as Database from 'app/Database';
import { QuizAllenamentoDAOInterface } from './QuizAllenamentoDAOInterface';
import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';
import { DomandaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/DomandaQuizAllenamento';
import { RispostaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/RispostaQuizAllenamento';

export class QuizAllenamentoDAO implements QuizAllenamentoDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

  public getAll(): Promise<QuizAllenamentoGiornaliero[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query(
          'SELECT * FROM quiz_allenamento_giornaliero',
          (err, res) => {
            if (err) {
              console.log(err.stack);
              reject(err);
            } else {
              client.release();
              resolve(res.rows as QuizAllenamentoGiornaliero[]);
            }
          }
        );
      });
    });
  }

  public get(id: number): Promise<QuizAllenamentoGiornaliero> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM quiz_allenamento_giornaliero WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const quizAllenamento = new QuizAllenamentoGiornaliero(
              data.cg_fam,
              data.numero_domande,
              data.punteggio_totale,
              data.id
            );
            resolve(quizAllenamento);
          }
        });
      });
    });
  }

  public save(quizAllenamento: QuizAllenamentoGiornaliero): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO quiz_allenamento_giornaliero ' +
          '(cg_fam, numero_domande, punteggio_totale)' +
          ' VALUES ($1, $2, $3) RETURNING id';

        client?.query(
          query,
          [
            quizAllenamento.caregiverFamiliare,
            quizAllenamento.numDomande,
            quizAllenamento.punteggioTot,
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

  public getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<QuizAllenamentoGiornaliero[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'SELECT * FROM quiz_allenamento_giornaliero WHERE cg_fam= $1';

        client?.query(query, [caregiverFamiliare], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as QuizAllenamentoGiornaliero[]);
          }
        });
      });
    });
  }

  public getAllDomande(): Promise<DomandaQuizAllenamento[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM domanda_allenamento_giornaliero';

        client?.query(query, (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as DomandaQuizAllenamento[]);
          }
        });
      });
    });
  }

  public getDomanda(id: number): Promise<DomandaQuizAllenamento> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'SELECT * FROM domanda_allenamento_giornaliero WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const domandaAllenamento = new DomandaQuizAllenamento(
              data.domanda,
              data.quiz_ag,
              data.corretta,
              data.id
            );
            resolve(domandaAllenamento);
          }
        });
      });
    });
  }

  public saveDomanda(domanda: DomandaQuizAllenamento): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO domanda_allenamento_giornaliero ' +
          '(quiz_ag, domanda, corretta) VALUES ($1, $2, $3) RETURNING id';

        client?.query(
          query,
          [domanda.quizAllenamento, domanda.domanda, domanda.corretta],
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

  public getByQuizAllenamento(id: number): Promise<DomandaQuizAllenamento[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'SELECT * FROM domanda_allenamento_giornaliero WHERE quiz_ag= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as DomandaQuizAllenamento[]);
          }
        });
      });
    });
  }

  public getAllRisposta(): Promise<RispostaQuizAllenamento[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM risposta_allenamento_giornaliero';

        client?.query(query, (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as RispostaQuizAllenamento[]);
          }
        });
      });
    });
  }

  public getRisposta(id: number): Promise<RispostaQuizAllenamento> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'SELECT * FROM risposta_allenamento_giornaliero WHERE id= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const data = res.rows[0];
            const rispostaAllenamento = new RispostaQuizAllenamento(
              data.domanda_ag,
              data.risposta,
              data.corretta,
              data.selezionata,
              data.id
            );
            resolve(rispostaAllenamento);
          }
        });
      });
    });
  }

  public saveRisposta(
    rispostaQuizAllenamento: RispostaQuizAllenamento
  ): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'INSERT INTO risposta_allenamento_giornaliero ' +
          '(domanda_ag, risposta, corretta, ' +
          'selezionata) VALUES ($1, $2, $3, $4)';

        client?.query(
          query,
          [
            rispostaQuizAllenamento.domanda,
            rispostaQuizAllenamento.risposta,
            rispostaQuizAllenamento.corretta,
            rispostaQuizAllenamento.selezionata,
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

  public getByDomandaAllenamento(
    id: number
  ): Promise<RispostaQuizAllenamento[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'SELECT * FROM risposta_allenamento_giornaliero WHERE domanda_ag= $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as RispostaQuizAllenamento[]);
          }
        });
      });
    });
  }
}
