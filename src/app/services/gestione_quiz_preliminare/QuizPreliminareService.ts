/**
 * Represents a service for managing preliminary quizzes.
 */
import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';
import { QuizPreliminareServiceInterface } from './QuizPreliminareServiceInterface';
import { QuizPreliminareDAOInterface } from 'app/dao/gestione_quiz_preliminare/QuizPreliminareDAOInterface';
import { QuizPreliminareDAO } from 'app/dao/gestione_quiz_preliminare/QuizPreliminareDAO';
import { DomandeRisposte } from 'app/adapter/gestione_quiz_preliminare/quizPreliminareAdapter';

export class QuizPreliminareService implements QuizPreliminareServiceInterface {
  private quizPreliminareDAO: QuizPreliminareDAOInterface;

  constructor() {
    this.quizPreliminareDAO = new QuizPreliminareDAO();
  }

  /**
   * Retrieves all preliminary quizzes.
   * @returns A promise that resolves to an array of QuizPreliminare objects.
   */
  public getAll(): Promise<QuizPreliminare[]> {
    return this.quizPreliminareDAO.getAll();
  }

  /**
   * Retrieves preliminary quizzes by medico.
   * @param medico - The medico identifier.
   * @returns A promise that resolves to an array of QuizPreliminare objects.
   */
  public getByMed(medico: number): Promise<QuizPreliminare[]> {
    return this.quizPreliminareDAO.getByMed(medico);
  }

  /**
   * Retrieves all preliminary quiz questions.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare objects.
   */
  public getAllDomande(): Promise<DomandaQuizPreliminare[]> {
    return this.quizPreliminareDAO.getAllDomande();
  }

  /**
   * Retrieves quiz questions by QuizPreliminare.
   * @param quizPreliminare - The QuizPreliminare identifier.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare objects.
   */
  public getDomandeByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]> {
    return this.quizPreliminareDAO.getDomandeByQuizPreliminare(quizPreliminare);
  }

  /**
   * Retrieves a quiz question by id.
   * @param id - The question identifier.
   * @returns A promise that resolves to a DomandaQuizPreliminare object.
   */
  public getDomanda(id: number): Promise<DomandaQuizPreliminare> {
    return this.quizPreliminareDAO.getDomanda(id);
  }

  /**
   * Retrieves a preliminary quiz by id.
   * @param id - The quiz identifier.
   * @returns A promise that resolves to a QuizPreliminare object.
   */
  public get(id: number): Promise<QuizPreliminare> {
    return this.quizPreliminareDAO.get(id);
  }

  /**
   * Saves a preliminary quiz.
   * @param quizPreliminare - The QuizPreliminare object to save.
   * @returns A promise that resolves to the saved quiz identifier.
   */
  public save(quizPreliminare: QuizPreliminare): Promise<number> {
    return this.quizPreliminareDAO.save(quizPreliminare);
  }

  /**
   * Saves a quiz question.
   * @param domanda - The DomandaQuizPreliminare object to save.
   * @returns A promise that resolves to the saved question identifier.
   */
  public saveDomanda(domanda: DomandaQuizPreliminare): Promise<number> {
    return this.quizPreliminareDAO.saveDomanda(domanda);
  }

  /**
   * Updates a preliminary quiz.
   * @param quizPreliminare - The QuizPreliminare object to update.
   * @returns A promise that resolves when the update is complete.
   */
  public update(quizPreliminare: QuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.update(quizPreliminare);
  }

  /**
   * Updates a quiz question.
   * @param domanda - The DomandaQuizPreliminare object to update.
   * @returns A promise that resolves when the update is complete.
   */
  public updateDomanda(domanda: DomandaQuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.updateDomanda(domanda);
  }

  /**
   * Retrieves quiz questions by QuizPreliminare.
   * @param quizPreliminare - The QuizPreliminare identifier.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare objects.
   */
  public getByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]> {
    return this.quizPreliminareDAO.getByQuizPreliminare(quizPreliminare);
  }

  /**
   * Retrieves a quiz response by paziente and id.
   * @param paziente - The paziente identifier.
   * @param id - The response identifier.
   * @returns A promise that resolves to a RispostaQuizPreliminare object.
   */
  public getRispostaByPaziente(
    paziente: string,
    id: number
  ): Promise<RispostaQuizPreliminare> {
    return this.quizPreliminareDAO.getRispostaByPaziente(paziente, id);
  }

  /**
   * Retrieves a quiz response by id.
   * @param id - The response identifier.
   * @returns A promise that resolves to a RispostaQuizPreliminare object.
   */
  public getRisposta(id: number): Promise<RispostaQuizPreliminare> {
    return this.quizPreliminareDAO.getRisposta(id);
  }

  /**
   * Saves a quiz response.
   * @param risposta - The RispostaQuizPreliminare object to save.
   * @returns A promise that resolves when the save is complete.
   */
  public saveRisposta(risposta: RispostaQuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.saveRisposta(risposta);
  }

  /**
   * Updates a quiz response.
   * @param risposta - The RispostaQuizPreliminare object to update.
   * @returns A promise that resolves when the update is complete.
   */
  public updateRisposta(risposta: RispostaQuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.updateRisposta(risposta);
  }

  /**
   * Retrieves a preliminary quiz by paziente.
   * @param paziente - The paziente identifier.
   * @returns A promise that resolves to a QuizPreliminare object.
   */
  public getByPaziente(paziente: string): Promise<QuizPreliminare> {
    return this.quizPreliminareDAO.getByPaziente(paziente);
  }

  /**
   * Saves a preliminary quiz along with its questions and responses.
   * @param quizPreliminare - The QuizPreliminare object to save.
   * @param domandeRisposte - A map of DomandaQuizPreliminare and RispostaQuizPreliminare objects.
   * @returns A promise that resolves when the save is complete.
   */
  public async saveQuizPreliminare(
    quizPreliminare: QuizPreliminare,
    domandeRisposte: Map<DomandaQuizPreliminare, RispostaQuizPreliminare>
  ): Promise<void> {
    const idQuiz = await this.quizPreliminareDAO.save(quizPreliminare);

    console.log(idQuiz);
    for (const [key, value] of domandeRisposte.entries()) {
      key.quizPreliminare = idQuiz;
      const idDomanda = await this.quizPreliminareDAO.saveDomanda(key);
      value.domandaPreliminare = idDomanda;
      await this.quizPreliminareDAO.saveRisposta(value);
    }
  }

  /**
   * Retrieves questions and responses for a preliminary quiz and paziente.
   * @param quizAllenamento - The quiz identifier.
   * @param paziente - The paziente identifier.
   * @returns A promise that resolves to an object containing questions and responses.
   */
  public async getDomandeRisposte(
    quizAllenamento: number,
    paziente: string
  ): Promise<{ [key: string]: DomandeRisposte }> {
    const domande = await this.quizPreliminareDAO.getByQuizPreliminare(
      quizAllenamento
    );

    const responseObject: { [key: string]: DomandeRisposte } = {};

    await Promise.all(
      domande.map(async (d) => {
        const risposta = await this.quizPreliminareDAO.getByDomandaAndPaziente(
          Number(d.id),
          paziente
        );
        responseObject[d.domanda] = {
          idDomanda: d.id,
          quiz_preliminare: d.quizPreliminare,
          domanda: d.domanda,
          rispostaPaziente: {
            idRisposta: risposta.id,
            domanda_preliminare: risposta.domandaPreliminare,
            risposta: risposta.risposta,
            paziente: risposta.paziente,
          },
        };
      })
    );

    return responseObject;
  }
}
