import { DomandaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/DomandaQuizAllenamento';
import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';
import { RispostaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/RispostaQuizAllenamento';

/**
 * Represents the interface for a QuizAllenamento Data Access Object (DAO).
 */
export interface QuizAllenamentoDAOInterface {
  /**
   * Retrieves all QuizAllenamentoGiornaliero objects.
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
   * @returns A promise that resolves to the ID of the updated QuizAllenamentoGiornaliero object.
   */
  update(quizAllenamento: QuizAllenamentoGiornaliero): Promise<number>;

  /**
   * Retrieves all QuizAllenamentoGiornaliero objects associated with a caregiver familiare.
   * @param caregiverFamiliare - The ID of the caregiver familiare.
   * @returns A promise that resolves to an array of QuizAllenamentoGiornaliero objects.
   */
  getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<QuizAllenamentoGiornaliero[]>;

  /**
   * Retrieves all DomandaQuizAllenamento objects.
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
   * Retrieves all DomandaQuizAllenamento objects associated with a QuizAllenamentoGiornaliero.
   * @param id - The ID of the QuizAllenamentoGiornaliero.
   * @returns A promise that resolves to an array of DomandaQuizAllenamento objects.
   */
  getByQuizAllenamento(id: number): Promise<DomandaQuizAllenamento[]>;

  /**
   * Retrieves all RispostaQuizAllenamento objects.
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
   * @returns A promise that resolves to void.
   */
  saveRisposta(rispostaQuizAllenamento: RispostaQuizAllenamento): Promise<void>;

  /**
   * Retrieves all RispostaQuizAllenamento objects associated with a DomandaQuizAllenamento.
   * @param id - The ID of the DomandaQuizAllenamento.
   * @returns A promise that resolves to an array of RispostaQuizAllenamento objects.
   */
  getByDomandaAllenamento(id: number): Promise<RispostaQuizAllenamento[]>;

  updateDomanda(domanda: DomandaQuizAllenamento): Promise<void>;

  /**
   * Updates a RispostaQuizAllenamento object.
   * @param risposta - The RispostaQuizAllenamento object to be updated.
   * @returns A promise that resolves to void.
   */
  updateRisposta(risposta: RispostaQuizAllenamento): Promise<void>;
}
