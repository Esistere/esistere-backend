import { Pool } from 'pg';
import * as Database from 'app/Database';
import { QuizAllenamentoDAOInterface } from './QuizAllenamentoDAOInterface';
import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';
import { DomandaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/DomandaQuizAllenamento';
import { RispostaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/RispostaQuizAllenamento';

/**
 * Represents a data access object for QuizAllenamentoGiornaliero.
 */
export class QuizAllenamentoDAO implements QuizAllenamentoDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }
  /**
   * Retrieves all QuizAllenamentoGiornaliero records from the database.
   * @returns A promise that resolves to an array of QuizAllenamentoGiornaliero objects.
   */
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

  /**
   * Retrieves a QuizAllenamentoGiornaliero record from the database by its ID.
   * @param id - The ID of the QuizAllenamentoGiornaliero record.
   * @returns A promise that resolves to a QuizAllenamentoGiornaliero object.
   */
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

  /**
   * Saves a QuizAllenamentoGiornaliero record to the database.
   * @param quizAllenamento - The QuizAllenamentoGiornaliero object to be saved.
   * @returns A promise that resolves to the ID of the saved record.
   */
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

  /**
   * Updates a QuizAllenamentoGiornaliero record in the database.
   * @param quizAllenamento - The updated QuizAllenamentoGiornaliero object.
   * @returns A promise that resolves to the ID of the updated record.
   */
  update(quizAllenamento: QuizAllenamentoGiornaliero): Promise<number> {
    return new Promise<number>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE quiz_allenamento_giornaliero SET' +
          '(id, cg_fam, numero_domande, punteggio_totale)' +
          ' VALUES ($1, $2, $3, $4) WHERE id = $5';

        client?.query(
          query,
          [
            quizAllenamento.id,
            quizAllenamento.caregiverFamiliare,
            quizAllenamento.numDomande,
            quizAllenamento.punteggioTot,
            quizAllenamento.id,
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
   * Retrieves all QuizAllenamentoGiornaliero records associated with a caregiver familiare from the database.
   * @param caregiverFamiliare - The ID of the caregiver familiare.
   * @returns A promise that resolves to an array of QuizAllenamentoGiornaliero objects.
   */
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

  /**
   * Retrieves all DomandaQuizAllenamento records from the database.
   * @returns A promise that resolves to an array of DomandaQuizAllenamento objects.
   */
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

  /**
   * Retrieves a DomandaQuizAllenamento record from the database by its ID.
   * @param id - The ID of the DomandaQuizAllenamento record.
   * @returns A promise that resolves to a DomandaQuizAllenamento object.
   */
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

  /**
   * Saves a DomandaQuizAllenamento record to the database.
   * @param domanda - The DomandaQuizAllenamento object to be saved.
   * @returns A promise that resolves to the ID of the saved record.
   */
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

  /**
   * Retrieves all RispostaQuizAllenamento records from the database.
   * @returns A promise that resolves to an array of RispostaQuizAllenamento objects.
   */
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

  /**
   * Retrieves a RispostaQuizAllenamento record from the database by its ID.
   * @param id - The ID of the RispostaQuizAllenamento record.
   * @returns A promise that resolves to a RispostaQuizAllenamento object.
   */
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
              data.risposta,
              data.domanda_ag,
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

  /**
   * Saves a RispostaQuizAllenamento record to the database.
   * @param rispostaQuizAllenamento - The RispostaQuizAllenamento object to be saved.
   * @returns A promise that resolves to void.
   */
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

  /**
   * Retrieves all RispostaQuizAllenamento records associated with a DomandaQuizAllenamento from the database.
   * @param id - The ID of the DomandaQuizAllenamento.
   * @returns A promise that resolves to an array of RispostaQuizAllenamento objects.
   */
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


  public updateDomanda(domanda: DomandaQuizAllenamento): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE domanda_allenamento_giornaliero SET ' +
          '(id, quiz_ag, domanda, corretta) = ($1, $2, $3, $4) WHERE id = $5';

        client?.query(
          query,
          [
            domanda.id,
            domanda.quizAllenamento,
            domanda.domanda,
            domanda.corretta,
            domanda.id,
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
   * Updates a RispostaQuizAllenamento record in the database.
   * @param risposta - The updated RispostaQuizAllenamento object.
   * @returns A promise that resolves to void.
   */
  public updateRisposta(risposta: RispostaQuizAllenamento): Promise<void> {
    return new Promise<void>((resolve, reject) =>
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query =
          'UPDATE risposta_allenamento_giornaliero SET ' +
          '(id, domanda_ag, risposta, corretta, ' +
          'selezionata) = ($1, $2, $3, $4, $5) WHERE id = $6';

        client?.query(
          query,
          [
            risposta.id,
            risposta.domanda,
            risposta.risposta,
            risposta.corretta,
            risposta.selezionata,
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
