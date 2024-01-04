import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { QuizPreliminareService } from 'app/services/gestione_quiz_preliminare/QuizPreliminareService';
import { QuizPreliminareServiceInterface } from 'app/services/gestione_quiz_preliminare/QuizPreliminareServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const quizPreliminareService: QuizPreliminareServiceInterface =
  new QuizPreliminareService();

router.post('/salva_quiz', async (req: Request, res: Response) => {
  try {
    console.log('Dati ', req.body);

    const quizPreliminareJSON = req.body;
    const quizPreliminare = new QuizPreliminare(
      quizPreliminareJSON.numDomande,
      quizPreliminareJSON.sage,
      quizPreliminareJSON.punteggioTot,
      quizPreliminareJSON.medico,
      quizPreliminareJSON.paziente
    );
    quizPreliminareService.save(quizPreliminare);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
