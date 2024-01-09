import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';
import { DomandaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/DomandaQuizAllenamento';
import { RispostaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/RispostaQuizAllenamento';
import { QuizAllenamentoServiceInterface } from './QuizAllenamentoServiceInterface';
import { QuizAllenamentoDAOInterface } from 'app/dao/gestione_quiz_allenamento/QuizAllenamentoDAOInterface';
import { QuizAllenamentoDAO } from 'app/dao/gestione_quiz_allenamento/QuizAllenamentoDAO';

export class QuizAllenamentoService implements QuizAllenamentoServiceInterface {
  private quizAllenamentoDAO: QuizAllenamentoDAOInterface;

  constructor() {
    this.quizAllenamentoDAO = new QuizAllenamentoDAO();
  }

  public getAll(): Promise<QuizAllenamentoGiornaliero[]> {
    return this.quizAllenamentoDAO.getAll();
  }

  public get(id: number): Promise<QuizAllenamentoGiornaliero> {
    return this.quizAllenamentoDAO.get(id);
  }

  public save(quizAllenamento: QuizAllenamentoGiornaliero): Promise<number> {
    return this.quizAllenamentoDAO.save(quizAllenamento);
  }

  public getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<QuizAllenamentoGiornaliero[]> {
    return this.quizAllenamentoDAO.getByCaregiverFamiliare(caregiverFamiliare);
  }

  public getAllDomande(): Promise<DomandaQuizAllenamento[]> {
    return this.quizAllenamentoDAO.getAllDomande();
  }

  public getDomanda(id: number): Promise<DomandaQuizAllenamento> {
    return this.quizAllenamentoDAO.getDomanda(id);
  }

  public saveDomanda(domanda: DomandaQuizAllenamento): Promise<number> {
    return this.quizAllenamentoDAO.saveDomanda(domanda);
  }

  public getByQuizAllenamento(id: number): Promise<DomandaQuizAllenamento[]> {
    return this.quizAllenamentoDAO.getByQuizAllenamento(id);
  }

  public getAllRisposta(): Promise<RispostaQuizAllenamento[]> {
    return this.quizAllenamentoDAO.getAllRisposta();
  }

  public getRisposta(id: number): Promise<RispostaQuizAllenamento> {
    return this.quizAllenamentoDAO.getRisposta(id);
  }

  public saveRisposta(
    rispostaQuizAllenamento: RispostaQuizAllenamento
  ): Promise<void> {
    return this.quizAllenamentoDAO.saveRisposta(rispostaQuizAllenamento);
  }

  public getByDomandaAllenamento(
    id: number
  ): Promise<RispostaQuizAllenamento[]> {
    return this.quizAllenamentoDAO.getByDomandaAllenamento(id);
  }

  public async createQuizAllenamento(
    quizAllenamento: QuizAllenamentoGiornaliero,
    risposteDomanda: Map<DomandaQuizAllenamento, RispostaQuizAllenamento[]>
  ): Promise<void> {
    const idQuiz = await this.quizAllenamentoDAO.save(quizAllenamento);
    risposteDomanda.forEach(async (value, key) => {
      key.quizAllenamento = idQuiz;
      const idDomanda = await this.quizAllenamentoDAO.saveDomanda(key);
      value.forEach(async (v) => {
        v.domanda = idDomanda;
        this.quizAllenamentoDAO.saveRisposta(v);
      });
    });
  }

  public async getDomandeRisposte(
    quizAllenamento: number
  ): Promise<Map<DomandaQuizAllenamento, RispostaQuizAllenamento[]>> {
    const domande = await this.quizAllenamentoDAO.getByQuizAllenamento(
      quizAllenamento
    );
    const domandeRisposte: Map<
      DomandaQuizAllenamento,
      RispostaQuizAllenamento[]
    > = new Map<DomandaQuizAllenamento, RispostaQuizAllenamento[]>();
    domande.forEach(async (d) => {
      const risposte: RispostaQuizAllenamento[] =
        await this.quizAllenamentoDAO.getByDomandaAllenamento(Number(d.id));
      domandeRisposte.set(d, risposte);
    });

    return domandeRisposte;
  }

  
}
