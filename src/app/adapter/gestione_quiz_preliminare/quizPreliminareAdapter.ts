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

export interface RispostaPreliminare {
  id: number | undefined;
  domanda_preliminare: number | undefined;
  risposta: string;
  paziente: string;
}