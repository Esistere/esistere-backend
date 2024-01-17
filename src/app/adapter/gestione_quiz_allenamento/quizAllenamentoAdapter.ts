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

export interface ResponseObjectQA {
  domandeRisposte: { [key: string]: DomandeRisposte };
  quizAllenamento: {
    caregiver_familiare: number | undefined;
    numero_domande: number | undefined;
    punteggio_totale: number | undefined;
    id: number | undefined;
  };
}

export interface Risposta {
  id: number | undefined;
  domanda_ag: number | undefined;
  risposta: string;
  corretta: boolean | undefined;
  selezionata: boolean | undefined;
}
