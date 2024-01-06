import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';
import { DomandaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/DomandaQuizAllenamento';
import { RispostaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/RispostaQuizAllenamento';

export interface QuizAllenamentoDAOInterface {
  getAll(): Promise<QuizAllenamentoGiornaliero[]>;
  get(id: number): Promise<QuizAllenamentoGiornaliero>;
  save(quizAllenamento: QuizAllenamentoGiornaliero): Promise<void>;
  getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<QuizAllenamentoGiornaliero[]>;
  getAllDomande(): Promise<DomandaQuizAllenamento[]>;
  getDomanda(id: number): Promise<DomandaQuizAllenamento>;
  saveDomanda(domanda: DomandaQuizAllenamento): Promise<void>;
  getByQuizAllenamento(id: number): Promise<DomandaQuizAllenamento[]>;
  getAllRisposta(): Promise<RispostaQuizAllenamento[]>;
  getRisposta(id: number): Promise<RispostaQuizAllenamento>;
  saveRisposta(rispostaQuizAllenamento: RispostaQuizAllenamento): Promise<void>;
  getByDomandaAllenamento(id: number): Promise<RispostaQuizAllenamento[]>;
}
