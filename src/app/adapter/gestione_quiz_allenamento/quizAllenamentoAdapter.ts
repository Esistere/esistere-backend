/**
 * Represents a set of questions and answers for a quiz.
 */
export interface DomandeRisposte {
  idDomanda: number | undefined;
  quiz_ag: number | undefined;
  domanda: string;
  corretta: boolean | undefined;
  risposte: {
    idRisposta: number | undefined;
    domanda_ag: number | undefined;
    risposta: string;
    corretta: boolean | undefined;
    selezionata: boolean | undefined;
  }[];
}

/**
 * Represents the response object for quiz allenamento.
 */
export interface ResponseObjectQA {
  domandeRisposte: { [key: string]: DomandeRisposte };
  quizAllenamento: {
    cg_fam: number | undefined;
    numero_domande: number | undefined;
    punteggio_totale: number | undefined;
    id: number | undefined;
  };
}

/**
 * Represents a single answer in a training quiz.
 */
export interface RispostaAllenamento {
  id: number | undefined;
  domanda_ag: number | undefined;
  risposta: string;
  corretta: boolean | undefined;
  selezionata: boolean | undefined;
}
