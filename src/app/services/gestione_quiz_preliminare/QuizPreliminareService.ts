import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';
import { QuizPreliminareServiceInterface } from './QuizPreliminareServiceInterface';
import { QuizPreliminareDAOInterface } from 'app/dao/gestione_quiz_preliminare/QuizPreliminareDAOInterface';
import { QuizPreliminareDAO } from 'app/dao/gestione_quiz_preliminare/QuizPreliminareDAO';

export class QuizPreliminareService implements QuizPreliminareServiceInterface {
  private quizPreliminareDAO: QuizPreliminareDAOInterface;

  constructor() {
    this.quizPreliminareDAO = new QuizPreliminareDAO();
  }

  public getAll(): Promise<QuizPreliminare[]> {
    return this.quizPreliminareDAO.getAll();
  }

  public getByMed(medico: number): Promise<QuizPreliminare[]> {
    return this.quizPreliminareDAO.getByMed(medico);
  }

  public getAllDomande(): Promise<DomandaQuizPreliminare[]> {
    return this.quizPreliminareDAO.getAllDomande();
  }

  public getDomandeByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]> {
    return this.quizPreliminareDAO.getDomandeByQuizPreliminare(quizPreliminare);
  }

  public getDomanda(id: number): Promise<DomandaQuizPreliminare> {
    return this.quizPreliminareDAO.getDomanda(id);
  }

  public get(id: number): Promise<QuizPreliminare> {
    return this.quizPreliminareDAO.get(id);
  }

  public save(quizPreliminare: QuizPreliminare): Promise<void> {
    return this.save(quizPreliminare);
  }

  public saveDomanda(domanda: DomandaQuizPreliminare): Promise<number> {
    return this.quizPreliminareDAO.saveDomanda(domanda);
  }

  public update(quizPreliminare: QuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.update(quizPreliminare);
  }

  public updateDomanda(domanda: DomandaQuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.updateDomanda(domanda);
  }

  public getByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]> {
    return this.quizPreliminareDAO.getByQuizPreliminare(quizPreliminare);
  }

  public getRispostaByPaziente(
    paziente: string,
    id: number
  ): Promise<RispostaQuizPreliminare> {
    return this.quizPreliminareDAO.getRispostaByPaziente(paziente, id);
  }

  public getRisposta(id: number): Promise<RispostaQuizPreliminare> {
    return this.quizPreliminareDAO.getRisposta(id);
  }

  public saveRisposta(risposta: RispostaQuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.saveRisposta(risposta);
  }

  public updateRisposta(risposta: RispostaQuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.updateRisposta(risposta);
  }

  public async saveQuizPreliminare(
    quizPreliminare: QuizPreliminare,
    domandeRisposte: Map<DomandaQuizPreliminare, RispostaQuizPreliminare>
  ): Promise<void> {
    const idQuiz = await this.quizPreliminareDAO.save(quizPreliminare);
    domandeRisposte.forEach(async (value, key) => {
      key.quizPreliminare = idQuiz;
      const idDomanda = await this.quizPreliminareDAO.saveDomanda(key);
      value.domandaPreliminare = idDomanda;
      await this.quizPreliminareDAO.saveRisposta(value);
    });
  }
}
