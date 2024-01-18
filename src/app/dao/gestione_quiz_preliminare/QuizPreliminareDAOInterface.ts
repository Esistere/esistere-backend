import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';

/**
 * Represents the interface for a QuizPreliminare Data Access Object (DAO).
 */
export interface QuizPreliminareDAOInterface {
  /**
   * Retrieves all QuizPreliminare entities.
   * @returns A promise that resolves to an array of QuizPreliminare.
   */
  getAll(): Promise<QuizPreliminare[]>;

  /**
   * Retrieves a QuizPreliminare entity by its ID.
   * @param id - The ID of the QuizPreliminare entity.
   * @returns A promise that resolves to the QuizPreliminare entity.
   */
  get(id: number): Promise<QuizPreliminare>;

  /**
   * Saves a QuizPreliminare entity.
   * @param quizPreliminare - The QuizPreliminare entity to be saved.
   * @returns A promise that resolves to the ID of the saved QuizPreliminare entity.
   */
  save(quizPreliminare: QuizPreliminare): Promise<number>;

  /**
   * Updates a QuizPreliminare entity.
   * @param quizPreliminare - The QuizPreliminare entity to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  update(quizPreliminare: QuizPreliminare): Promise<void>;

  /**
   * Retrieves all QuizPreliminare entities associated with a specific medico.
   * @param medico - The ID of the medico.
   * @returns A promise that resolves to an array of QuizPreliminare.
   */
  getByMed(medico: number): Promise<QuizPreliminare[]>;

  /**
   * Retrieves all QuizPreliminare entities associated with a specific paziente.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to an array of QuizPreliminare.
   */
  getByPaziente(paziente: string): Promise<QuizPreliminare[]>;

  /**
   * Retrieves all DomandaQuizPreliminare entities.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare.
   */
  getAllDomande(): Promise<DomandaQuizPreliminare[]>;

  /**
   * Retrieves all DomandaQuizPreliminare entities associated with a specific QuizPreliminare.
   * @param quizPreliminare - The ID of the QuizPreliminare.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare.
   */
  getDomandeByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]>;

  /**
   * Retrieves a DomandaQuizPreliminare entity by its ID.
   * @param id - The ID of the DomandaQuizPreliminare entity.
   * @returns A promise that resolves to the DomandaQuizPreliminare entity.
   */
  getDomanda(id: number): Promise<DomandaQuizPreliminare>;

  /**
   * Saves a DomandaQuizPreliminare entity.
   * @param domanda - The DomandaQuizPreliminare entity to be saved.
   * @returns A promise that resolves to the ID of the saved DomandaQuizPreliminare entity.
   */
  saveDomanda(domanda: DomandaQuizPreliminare): Promise<number>;

  /**
   * Updates a DomandaQuizPreliminare entity.
   * @param domanda - The DomandaQuizPreliminare entity to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  updateDomanda(domanda: DomandaQuizPreliminare): Promise<void>;

  /**
   * Retrieves all DomandaQuizPreliminare entities associated with a specific QuizPreliminare.
   * @param quizPreliminare - The ID of the QuizPreliminare.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare.
   */
  getByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]>;

  /**
   * Retrieves a RispostaQuizPreliminare entity by its ID.
   * @param id - The ID of the RispostaQuizPreliminare entity.
   * @returns A promise that resolves to the RispostaQuizPreliminare entity.
   */
  getRisposta(id: number): Promise<RispostaQuizPreliminare>;

  /**
   * Retrieves a RispostaQuizPreliminare entity associated with a specific DomandaQuizPreliminare and paziente.
   * @param domanda - The ID of the DomandaQuizPreliminare.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to the RispostaQuizPreliminare entity.
   */
  getByDomandaAndPaziente(
    domanda: number,
    paziente: string
  ): Promise<RispostaQuizPreliminare>;

  /**
   * Saves a RispostaQuizPreliminare entity.
   * @param risposta - The RispostaQuizPreliminare entity to be saved.
   * @returns A promise that resolves when the save is complete.
   */
  saveRisposta(risposta: RispostaQuizPreliminare): Promise<void>;

  /**
   * Updates a RispostaQuizPreliminare entity.
   * @param risposta - The RispostaQuizPreliminare entity to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  updateRisposta(risposta: RispostaQuizPreliminare): Promise<void>;

  /**
   * Retrieves a RispostaQuizPreliminare entity associated with a specific paziente and ID.
   * @param paziente - The ID of the paziente.
   * @param id - The ID of the RispostaQuizPreliminare entity.
   * @returns A promise that resolves to the RispostaQuizPreliminare entity.
   */
  getRispostaByPaziente(
    paziente: string,
    id: number
  ): Promise<RispostaQuizPreliminare>;
}
