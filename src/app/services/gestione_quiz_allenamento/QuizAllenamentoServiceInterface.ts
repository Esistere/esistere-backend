/**
 * Represents the interface for the QuizAllenamentoService.
 */
import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';
import { DomandaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/DomandaQuizAllenamento';
import { RispostaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/RispostaQuizAllenamento';
import { DomandeRisposte } from 'app/adapter/gestione_quiz_allenamento/quizAllenamentoAdapter';

export interface QuizAllenamentoServiceInterface {
  /**
   * Retrieves all the QuizAllenamentoGiornaliero objects.
   * @returns A promise that resolves to an array of QuizAllenamentoGiornaliero objects.
   */
  getAll(): Promise<QuizAllenamentoGiornaliero[]>;

  /**
   * Retrieves a QuizAllenamentoGiornaliero object by its ID.
   * @param id - The ID of the QuizAllenamentoGiornaliero object.
   * @returns A promise that resolves to the QuizAllenamentoGiornaliero object.
   */
  get(id: number): Promise<QuizAllenamentoGiornaliero>;

  /**
   * Saves a QuizAllenamentoGiornaliero object.
   * @param quizAllenamento - The QuizAllenamentoGiornaliero object to be saved.
   * @returns A promise that resolves to the ID of the saved QuizAllenamentoGiornaliero object.
   */
  save(quizAllenamento: QuizAllenamentoGiornaliero): Promise<number>;

  /**
   * Updates a QuizAllenamentoGiornaliero object.
   * @param quizAllenamento - The QuizAllenamentoGiornaliero object to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  update(quizAllenamento: QuizAllenamentoGiornaliero): Promise<void>;

  /**
   * Retrieves all the QuizAllenamentoGiornaliero objects associated with a caregiver familiare.
   * @param caregiverFamiliare - The ID of the caregiver familiare.
   * @returns A promise that resolves to an array of QuizAllenamentoGiornaliero objects.
   */
  getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<QuizAllenamentoGiornaliero[]>;

  /**
   * Retrieves all the DomandaQuizAllenamento objects.
   * @returns A promise that resolves to an array of DomandaQuizAllenamento objects.
   */
  getAllDomande(): Promise<DomandaQuizAllenamento[]>;

  /**
   * Retrieves a DomandaQuizAllenamento object by its ID.
   * @param id - The ID of the DomandaQuizAllenamento object.
   * @returns A promise that resolves to the DomandaQuizAllenamento object.
   */
  getDomanda(id: number): Promise<DomandaQuizAllenamento>;

  /**
   * Saves a DomandaQuizAllenamento object.
   * @param domanda - The DomandaQuizAllenamento object to be saved.
   * @returns A promise that resolves to the ID of the saved DomandaQuizAllenamento object.
   */
  saveDomanda(domanda: DomandaQuizAllenamento): Promise<number>;

  /**
   * Retrieves all the DomandaQuizAllenamento objects associated with a QuizAllenamentoGiornaliero.
   * @param id - The ID of the QuizAllenamentoGiornaliero.
   * @returns A promise that resolves to an array of DomandaQuizAllenamento objects.
   */
  getByQuizAllenamento(id: number): Promise<DomandaQuizAllenamento[]>;

  /**
   * Retrieves all the RispostaQuizAllenamento objects.
   * @returns A promise that resolves to an array of RispostaQuizAllenamento objects.
   */
  getAllRisposta(): Promise<RispostaQuizAllenamento[]>;

  /**
   * Retrieves a RispostaQuizAllenamento object by its ID.
   * @param id - The ID of the RispostaQuizAllenamento object.
   * @returns A promise that resolves to the RispostaQuizAllenamento object.
   */
  getRisposta(id: number): Promise<RispostaQuizAllenamento>;

  /**
   * Saves a RispostaQuizAllenamento object.
   * @param rispostaQuizAllenamento - The RispostaQuizAllenamento object to be saved.
   * @returns A promise that resolves when the save is complete.
   */
  saveRisposta(rispostaQuizAllenamento: RispostaQuizAllenamento): Promise<void>;

  /**
   * Retrieves all the RispostaQuizAllenamento objects associated with a DomandaQuizAllenamento.
   * @param id - The ID of the DomandaQuizAllenamento.
   * @returns A promise that resolves to an array of RispostaQuizAllenamento objects.
   */
  getByDomandaAllenamento(id: number): Promise<RispostaQuizAllenamento[]>;

  /**
   * Updates a RispostaQuizAllenamento object.
   * @param risposta - The RispostaQuizAllenamento object to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  updateRisposta(risposta: RispostaQuizAllenamento): Promise<void>;

  /**
   * Updates a DomandaQuizAllenamento object.
   * @param domanda - The DomandaQuizAllenamento object to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  updateDomanda(domanda: DomandaQuizAllenamento): Promise<void>;

  /**
   * Creates a QuizAllenamentoGiornaliero object with associated DomandaQuizAllenamento and RispostaQuizAllenamento objects.
   * @param quizAllenamento - The QuizAllenamentoGiornaliero object to be created.
   * @param domandeRisposte - A map of DomandaQuizAllenamento and RispostaQuizAllenamento arrays.
   * @returns A promise that resolves when the creation is complete.
   */
  createQuizAllenamento(
    quizAllenamento: QuizAllenamentoGiornaliero,
    domandeRisposte: Map<DomandaQuizAllenamento, RispostaQuizAllenamento[]>
  ): Promise<void>;

  /**
   * Retrieves the DomandeRisposte object associated with a QuizAllenamentoGiornaliero.
   * @param quizAllenamento - The ID of the QuizAllenamentoGiornaliero.
   * @returns A promise that resolves to an object containing the DomandeRisposte.
   */
  getDomandeRisposte(
    quizAllenamento: number
  ): Promise<{ [key: string]: DomandeRisposte }>;
}
