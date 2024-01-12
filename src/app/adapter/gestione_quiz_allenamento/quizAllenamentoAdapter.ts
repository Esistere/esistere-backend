import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';

export interface DomandeRisposte {
  quiz_ag: number | undefined;
  domanda: string;
  corretta: boolean | undefined;
  risposte: {
    domanda_ag: number | undefined;
    risposta: string;
    corretta: boolean | undefined;
    selezionata: boolean | undefined;
  }[];
}

export interface ResponseObject {
  domandeRisposte: { [key: string]: DomandeRisposte };
  quizAllenamento: QuizAllenamentoGiornaliero;
}
