/**
 * Represents a set of questions and answers for a preliminary quiz.
 */
export interface DomandeRisposte {
  idDomanda: number | undefined;
  quiz_preliminare: number | undefined;
  domanda: string;
  rispostaPaziente: {
    idRisposta: number | undefined;
    domanda_preliminare: number | undefined;
    risposta: string;
    paziente: string;
  };
}

/**
 * Represents the response object for quiz preliminare.
 */
export interface ResponseObjectQP {
  domandeRisposte: { [key: string]: DomandeRisposte };
  quizPreliminare: {
    id: number | undefined;
    punteggio_tot: number | undefined;
    numero_domande: number;
    sage: boolean;
    medico: number;
    paziente: string;
  };
}

/**
 * Represents a preliminary answer.
 */
export interface RispostaPreliminare {
  idRisposta: number | undefined;
  domanda_preliminare: number | undefined;
  risposta: string;
  paziente: string;
}
