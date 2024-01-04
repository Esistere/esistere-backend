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

  getAll(): Promise<QuizPreliminare[]> {
    return this.quizPreliminareDAO.getAll();
  }

  getByMed(medico: number): Promise<QuizPreliminare[]> {
    return this.quizPreliminareDAO.getByMed(medico);
  }

  getAllDomande(): Promise<DomandaQuizPreliminare[]> {
    return this.quizPreliminareDAO.getAllDomande();
  }

  getDomandeByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]> {
    return this.quizPreliminareDAO.getDomandeByQuizPreliminare(quizPreliminare);
  }

  getDomanda(id: number): Promise<DomandaQuizPreliminare> {
    return this.quizPreliminareDAO.getDomanda(id);
  }

  get(id: number): Promise<QuizPreliminare> {
    return this.quizPreliminareDAO.get(id);
  }

  save(quizPreliminare: QuizPreliminare): Promise<void> {
    return this.save(quizPreliminare);
  }

  saveDomanda(domanda: DomandaQuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.saveDomanda(domanda);
  }
  update(quizPreliminare: QuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.update(quizPreliminare);
  }

  updateDomanda(domanda: DomandaQuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.updateDomanda(domanda);
  }

  getByQuizPreliminare(
    quizPreliminare: number
  ): Promise<DomandaQuizPreliminare[]> {
    return this.quizPreliminareDAO.getByQuizPreliminare(quizPreliminare);
  }

  getRispostaByPaziente(
    paziente: string,
    id: number
  ): Promise<RispostaQuizPreliminare> {
    return this.quizPreliminareDAO.getRispostaByPaziente(paziente, id);
  }

  getRisposta(id: number): Promise<RispostaQuizPreliminare> {
    return this.quizPreliminareDAO.getRisposta(id);
  }

  saveRisposta(risposta: RispostaQuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.saveRisposta(risposta);
  }
  updateRisposta(risposta: RispostaQuizPreliminare): Promise<void> {
    return this.quizPreliminareDAO.updateRisposta(risposta);
  }
}
