import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';

export interface QuizPreliminareServiceInterface {
  getAll(): Promise<QuizPreliminare[]>;
  getByMed(medico: number): Promise<QuizPreliminare[]>;
  getAllDomande(): Promise<DomandaQuizPreliminare[]>;
  getDomandeByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]>;
  getDomanda(id: number): Promise<DomandaQuizPreliminare>;
  get(id: number): Promise<QuizPreliminare>;
  save(quizPreliminare: QuizPreliminare): Promise<void>;
  saveDomanda(domanda: DomandaQuizPreliminare): Promise<void>;
  update(quizPreliminare: QuizPreliminare): Promise<void>;
  updateDomanda(domanda: DomandaQuizPreliminare): Promise<void>;
  getByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]>;
  getRispostaByPaziente(
    paziente: string,
    id: number
  ): Promise<RispostaQuizPreliminare>;
  getRisposta(id: number): Promise<RispostaQuizPreliminare>;
  saveRisposta(risposta: RispostaQuizPreliminare): Promise<void>;
  updateRisposta(risposta: RispostaQuizPreliminare): Promise<void>;
}
