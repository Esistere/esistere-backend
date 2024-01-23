/**
 * Represents the interface for the QuizPreliminareService.
 */
import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';
import { DomandeRisposte } from 'app/adapter/gestione_quiz_preliminare/quizPreliminareAdapter';

export interface QuizPreliminareServiceInterface {
  /**
   * Retrieves all QuizPreliminare objects.
   * @returns A promise that resolves to an array of QuizPreliminare objects.
   */
  getAll(): Promise<QuizPreliminare[]>;

  /**
   * Retrieves all QuizPreliminare objects associated with a specific medico.
   * @param medico - The ID of the medico.
   * @returns A promise that resolves to an array of QuizPreliminare objects.
   */
  getByMed(medico: number): Promise<QuizPreliminare[]>;

  /**
   * Retrieves all DomandaQuizPreliminare objects.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare objects.
   */
  getAllDomande(): Promise<DomandaQuizPreliminare[]>;

  /**
   * Retrieves all DomandaQuizPreliminare objects associated with a specific QuizPreliminare.
   * @param quizPreliminare - The ID of the QuizPreliminare.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare objects.
   */
  getDomandeByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]>;

  /**
   * Retrieves a specific DomandaQuizPreliminare object.
   * @param id - The ID of the DomandaQuizPreliminare.
   * @returns A promise that resolves to the DomandaQuizPreliminare object.
   */
  getDomanda(id: number): Promise<DomandaQuizPreliminare>;

  /**
   * Retrieves a specific QuizPreliminare object.
   * @param id - The ID of the QuizPreliminare.
   * @returns A promise that resolves to the QuizPreliminare object.
   */
  get(id: number): Promise<QuizPreliminare>;

  /**
   * Saves a QuizPreliminare object.
   * @param quizPreliminare - The QuizPreliminare object to be saved.
   * @returns A promise that resolves to the ID of the saved QuizPreliminare.
   */
  save(quizPreliminare: QuizPreliminare): Promise<number>;

  /**
   * Saves a DomandaQuizPreliminare object.
   * @param domanda - The DomandaQuizPreliminare object to be saved.
   * @returns A promise that resolves to the ID of the saved DomandaQuizPreliminare.
   */
  saveDomanda(domanda: DomandaQuizPreliminare): Promise<number>;

  /**
   * Updates a QuizPreliminare object.
   * @param quizPreliminare - The QuizPreliminare object to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  update(quizPreliminare: QuizPreliminare): Promise<void>;

  /**
   * Updates a DomandaQuizPreliminare object.
   * @param domanda - The DomandaQuizPreliminare object to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  updateDomanda(domanda: DomandaQuizPreliminare): Promise<void>;

  /**
   * Retrieves all DomandaQuizPreliminare objects associated with a specific QuizPreliminare.
   * @param quizPreliminare - The ID of the QuizPreliminare.
   * @returns A promise that resolves to an array of DomandaQuizPreliminare objects.
   */
  getByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]>;

  /**
   * Retrieves a specific RispostaQuizPreliminare object associated with a specific paziente and QuizPreliminare.
   * @param paziente - The ID of the paziente.
   * @param id - The ID of the QuizPreliminare.
   * @returns A promise that resolves to the RispostaQuizPreliminare object.
   */
  getRispostaByPaziente(
    paziente: string,
    id: number
  ): Promise<RispostaQuizPreliminare>;

  /**
   * Retrieves a specific RispostaQuizPreliminare object.
   * @param id - The ID of the RispostaQuizPreliminare.
   * @returns A promise that resolves to the RispostaQuizPreliminare object.
   */
  getRisposta(id: number): Promise<RispostaQuizPreliminare>;

  /**
   * Saves a RispostaQuizPreliminare object.
   * @param risposta - The RispostaQuizPreliminare object to be saved.
   * @returns A promise that resolves when the save is complete.
   */
  saveRisposta(risposta: RispostaQuizPreliminare): Promise<void>;

  /**
   * Updates a RispostaQuizPreliminare object.
   * @param risposta - The RispostaQuizPreliminare object to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  updateRisposta(risposta: RispostaQuizPreliminare): Promise<void>;

  /**
   * Retrieves all QuizPreliminare objects associated with a specific paziente.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to an array of QuizPreliminare objects.
   */
  getByPaziente(paziente: string): Promise<QuizPreliminare>;

  /**
   * Saves a QuizPreliminare object along with its associated DomandaQuizPreliminare and RispostaQuizPreliminare objects.
   * @param quizPreliminare - The QuizPreliminare object to be saved.
   * @param domandeRisposte - A map of DomandaQuizPreliminare and RispostaQuizPreliminare objects.
   * @returns A promise that resolves when the save is complete.
   */
  saveQuizPreliminare(
    quizPreliminare: QuizPreliminare,
    domandeRisposte: Map<DomandaQuizPreliminare, RispostaQuizPreliminare>
  ): Promise<void>;

  /**
   * Retrieves all DomandaQuizPreliminare and RispostaQuizPreliminare objects associated with a specific QuizPreliminare and paziente.
   * @param quizPreliminare - The ID of the QuizPreliminare.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to an object containing DomandeRisposte.
   */
  getDomandeRisposte(
    quizPreliminare: number,
    paziente: string
  ): Promise<{ [key: string]: DomandeRisposte }>;
}
