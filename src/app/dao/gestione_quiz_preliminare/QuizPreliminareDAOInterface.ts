import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';

export interface QuizPreliminareDAOInterface {
  getAll(): Promise<QuizPreliminare[]>;
  get(id: number): Promise<QuizPreliminare>;
  save(quizPreliminare: QuizPreliminare): Promise<void>;
  update(quizPreliminare: QuizPreliminare): Promise<void>;
  getByMed(medico: number): Promise<QuizPreliminare[]>;
  getAllDomande(): Promise<DomandaQuizPreliminare[]>;
  getDomandeByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]>;
  getDomanda(id: number): Promise<DomandaQuizPreliminare>;
  saveDomanda(domanda: DomandaQuizPreliminare): Promise<void>;
  updateDomanda(domanda: DomandaQuizPreliminare): Promise<void>;
  getByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]>;
  getRisposta(id: number): Promise<RispostaQuizPreliminare>;
  saveRisposta(risposta: RispostaQuizPreliminare): Promise<void>;
  updateRisposta(risposta: RispostaQuizPreliminare): Promise<void>;
  getRispostaByPaziente(
    paziente: string,
    id: number
  ): Promise<RispostaQuizPreliminare>;
}
