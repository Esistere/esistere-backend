/**
 * Represents a service for managing quiz training.
 */
import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';
import { DomandaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/DomandaQuizAllenamento';
import { RispostaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/RispostaQuizAllenamento';
import { QuizAllenamentoServiceInterface } from './QuizAllenamentoServiceInterface';
import { QuizAllenamentoDAOInterface } from 'app/dao/gestione_quiz_allenamento/QuizAllenamentoDAOInterface';
import { QuizAllenamentoDAO } from 'app/dao/gestione_quiz_allenamento/QuizAllenamentoDAO';
import { DomandeRisposte } from 'app/adapter/gestione_quiz_allenamento/quizAllenamentoAdapter';

/**
 * Represents a service for managing quiz training.
 */
export class QuizAllenamentoService implements QuizAllenamentoServiceInterface {
  private quizAllenamentoDAO: QuizAllenamentoDAOInterface;

  constructor() {
    this.quizAllenamentoDAO = new QuizAllenamentoDAO();
  }

  /**
   * Retrieves all quiz training.
   * @returns A promise that resolves to an array of QuizAllenamentoGiornaliero.
   */
  public getAll(): Promise<QuizAllenamentoGiornaliero[]> {
    return this.quizAllenamentoDAO.getAll();
  }

  /**
   * Retrieves a quiz training by its ID.
   * @param id - The ID of the quiz training.
   * @returns A promise that resolves to a QuizAllenamentoGiornaliero.
   */
  public get(id: number): Promise<QuizAllenamentoGiornaliero> {
    return this.quizAllenamentoDAO.get(id);
  }

  /**
   * Saves a quiz training.
   * @param quizAllenamento - The quiz training to be saved.
   * @returns A promise that resolves to the ID of the saved quiz training.
   */
  public save(quizAllenamento: QuizAllenamentoGiornaliero): Promise<number> {
    return this.quizAllenamentoDAO.save(quizAllenamento);
  }

  /**
   * Updates a quiz training.
   * @param quizAllenamento - The quiz training to be updated.
   * @returns A promise that resolves to void.
   */
  public update(quizAllenamento: QuizAllenamentoGiornaliero): Promise<void> {
    return this.quizAllenamentoDAO.update(quizAllenamento);
  }

  /**
   * Retrieves all quiz training by caregiver familiare.
   * @param caregiverFamiliare - The caregiver familiare ID.
   * @returns A promise that resolves to an array of QuizAllenamentoGiornaliero.
   */
  public getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<QuizAllenamentoGiornaliero[]> {
    return this.quizAllenamentoDAO.getByCaregiverFamiliare(caregiverFamiliare);
  }

  /**
   * Retrieves all domande quiz allenamento.
   * @returns A promise that resolves to an array of DomandaQuizAllenamento.
   */
  public getAllDomande(): Promise<DomandaQuizAllenamento[]> {
    return this.quizAllenamentoDAO.getAllDomande();
  }

  /**
   * Retrieves a domanda quiz allenamento by its ID.
   * @param id - The ID of the domanda quiz allenamento.
   * @returns A promise that resolves to a DomandaQuizAllenamento.
   */
  public getDomanda(id: number): Promise<DomandaQuizAllenamento> {
    return this.quizAllenamentoDAO.getDomanda(id);
  }

  /**
   * Saves a domanda quiz allenamento.
   * @param domanda - The domanda quiz allenamento to be saved.
   * @returns A promise that resolves to the ID of the saved domanda quiz allenamento.
   */
  public saveDomanda(domanda: DomandaQuizAllenamento): Promise<number> {
    return this.quizAllenamentoDAO.saveDomanda(domanda);
  }

  /**
   * Retrieves all domande quiz allenamento by quiz allenamento ID.
   * @param id - The ID of the quiz allenamento.
   * @returns A promise that resolves to an array of DomandaQuizAllenamento.
   */
  public getByQuizAllenamento(id: number): Promise<DomandaQuizAllenamento[]> {
    return this.quizAllenamentoDAO.getByQuizAllenamento(id);
  }

  /**
   * Retrieves all risposta quiz allenamento.
   * @returns A promise that resolves to an array of RispostaQuizAllenamento.
   */
  public getAllRisposta(): Promise<RispostaQuizAllenamento[]> {
    return this.quizAllenamentoDAO.getAllRisposta();
  }

  /**
   * Retrieves a risposta quiz allenamento by its ID.
   * @param id - The ID of the risposta quiz allenamento.
   * @returns A promise that resolves to a RispostaQuizAllenamento.
   */
  public getRisposta(id: number): Promise<RispostaQuizAllenamento> {
    return this.quizAllenamentoDAO.getRisposta(id);
  }

  /**
   * Saves a risposta quiz allenamento.
   * @param rispostaQuizAllenamento - The risposta quiz allenamento to be saved.
   * @returns A promise that resolves to void.
   */
  public saveRisposta(
    rispostaQuizAllenamento: RispostaQuizAllenamento
  ): Promise<void> {
    return this.quizAllenamentoDAO.saveRisposta(rispostaQuizAllenamento);
  }

  /**
   * Retrieves all risposta quiz allenamento by domanda allenamento ID.
   * @param id - The ID of the domanda allenamento.
   * @returns A promise that resolves to an array of RispostaQuizAllenamento.
   */
  public getByDomandaAllenamento(
    id: number
  ): Promise<RispostaQuizAllenamento[]> {
    return this.quizAllenamentoDAO.getByDomandaAllenamento(id);
  }

  /**
   * Updates a risposta quiz allenamento.
   * @param risposta - The risposta quiz allenamento to be updated.
   * @returns A promise that resolves to void.
   */
  public updateRisposta(risposta: RispostaQuizAllenamento): Promise<void> {
    return this.quizAllenamentoDAO.updateRisposta(risposta);
  }

  /**
   * Updates a domanda quiz allenamento.
   * @param domanda - The domanda quiz allenamento to be updated.
   * @returns A promise that resolves to void.
   */
  public updateDomanda(domanda: DomandaQuizAllenamento): Promise<void> {
    return this.quizAllenamentoDAO.updateDomanda(domanda);
  }

  /**
   * Creates a quiz allenamento with associated domande and risposte.
   * @param quizAllenamento - The quiz allenamento to be created.
   * @param domandeRisposte - The map of domande and risposte.
   * @returns A promise that resolves to void.
   */
  public async createQuizAllenamento(
    quizAllenamento: QuizAllenamentoGiornaliero,
    domandeRisposte: Map<DomandaQuizAllenamento, RispostaQuizAllenamento[]>
  ): Promise<void> {
    const idQuiz = await this.quizAllenamentoDAO.save(quizAllenamento);

    for (const [key, value] of domandeRisposte) {
      key.quizAllenamento = idQuiz;
      const idDomanda = await this.quizAllenamentoDAO.saveDomanda(key);

      for (const v of value) {
        v.domanda = idDomanda;
        await this.quizAllenamentoDAO.saveRisposta(v);
      }
    }
  }

  /**
   * Retrieves the domande and risposte for a quiz allenamento.
   * @param quizAllenamento - The ID of the quiz allenamento.
   * @returns A promise that resolves to an object containing the domande and risposte.
   */
  public async getDomandeRisposte(
    quizAllenamento: number
  ): Promise<{ [key: string]: DomandeRisposte }> {
    const domande = await this.quizAllenamentoDAO.getByQuizAllenamento(
      quizAllenamento
    );

    const responseObject: { [key: string]: DomandeRisposte } = {};

    await Promise.all(
      domande.map(async (d) => {
        const risposte = await this.quizAllenamentoDAO.getByDomandaAllenamento(
          Number(d.id)
        );
        responseObject[d.domanda] = {
          idDomanda: d.id,
          quiz_ag: quizAllenamento,
          domanda: d.domanda,
          corretta: d.corretta,
          risposte: risposte.map((r) => ({
            id: r.id,
            domanda_ag: d.id,
            risposta: r.risposta,
            corretta: r.corretta,
            selezionata: r.selezionata,
          })),
        };
      })
    );
    

    return responseObject;
  }
}

