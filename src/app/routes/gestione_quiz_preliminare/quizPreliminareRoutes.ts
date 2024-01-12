import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';
import { QuizPreliminareServiceInterface } from 'app/services/gestione_quiz_preliminare/QuizPreliminareServiceInterface';
import { QuizPreliminareService } from 'app/services/gestione_quiz_preliminare/QuizPreliminareService';
import express, { Request, Response } from 'express';

const router = express.Router();
const quizPreliminareService: QuizPreliminareServiceInterface =
  new QuizPreliminareService();

router.get('/quiz_preliminari', async (req: Request, res: Response) => {
  try {
    const id = Number(req.query.id);
    const domandaByMed = await quizPreliminareService.getByMed(id);
    res.json(domandaByMed);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/salva_quiz', async (req: Request, res: Response) => {
  try {
    const quizPreliminareJSON = req.body;
    const quizPreliminare = new QuizPreliminare(
      quizPreliminareJSON.numero_domande,
      quizPreliminareJSON.sage,
      quizPreliminareJSON.punteggio_totale,
      quizPreliminareJSON.med,
      quizPreliminareJSON.paziente
    );
    quizPreliminareService.save(quizPreliminare);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post(
  '/salva_domanda_preliminare',
  async (req: Request, res: Response) => {
    try {
      console.log('Dati ', req.body);

      const domandaPreliminareJSON = req.body;
      const domandaPreliminare = new DomandaQuizPreliminare(
        domandaPreliminareJSON.domanda,
        domandaPreliminareJSON.quiz_preliminare
      );
      quizPreliminareService.saveDomanda(domandaPreliminare);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

router.post('/salva_risposta', async (req: Request, res: Response) => {
  try {
    const rispostaPreliminareJSON = req.body;
    const rispostaPreliminare = new RispostaQuizPreliminare(
      rispostaPreliminareJSON.risposta,
      rispostaPreliminareJSON.domanda,
      rispostaPreliminareJSON.paziente
    );
    quizPreliminareService.saveRisposta(rispostaPreliminare);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/domande_quiz', async (req: Request, res: Response) => {
  try {
    const idQuiz = Number(req.query.id_quiz);
    const domande = await quizPreliminareService.getDomandeByQuizPreliminare(
      idQuiz
    );
    res.json(domande);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
