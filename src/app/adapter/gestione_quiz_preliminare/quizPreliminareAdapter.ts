/**
 * Represents a set of questions and answers for a preliminary quiz.
 */
export interface DomandeRisposte {
  id_domanda: number | undefined;
  quiz_preliminare: number | undefined;
  domanda: string;
  risposta: {
    id: number | undefined;
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
  id: number | undefined;
  domanda_preliminare: number | undefined;
  risposta: string;
  paziente: string;
}