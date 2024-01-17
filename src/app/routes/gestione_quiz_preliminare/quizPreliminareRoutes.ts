import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';
import { QuizPreliminareServiceInterface } from 'app/services/gestione_quiz_preliminare/QuizPreliminareServiceInterface';
import { QuizPreliminareService } from 'app/services/gestione_quiz_preliminare/QuizPreliminareService';
import express, { Request, Response } from 'express';
import {
  ResponseObjectQP,
  RispostaPreliminare,
} from 'app/adapter/gestione_quiz_preliminare/quizPreliminareAdapter';

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
      rispostaPreliminareJSON.paziente,
      rispostaPreliminareJSON.domanda
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

router.post('/salva_quiz_preliminare', async (req: Request, res: Response) => {
  try {
    const quizPreliminareJSON = req.body;
    const domandeRisposte = new Map<
      DomandaQuizPreliminare,
      RispostaQuizPreliminare
    >();

    const quizPreliminare = new QuizPreliminare(
      quizPreliminareJSON.quizPreliminare.numero_domande,
      quizPreliminareJSON.quizPreliminare.sage,
      quizPreliminareJSON.quizPreliminare.med,
      quizPreliminareJSON.quizPreliminare.paziente
    );

    for (const domandaKey of Object.keys(quizPreliminareJSON.domandeRisposte)) {
      const domandaJSON = quizPreliminareJSON.domandeRisposte[domandaKey];
      const domanda = new DomandaQuizPreliminare(
        domandaJSON.domanda,
        domandaJSON.quiz_preliminare
      );
      const risposta = new RispostaQuizPreliminare(
        domandaJSON.rispostaPaziente.risposta,
        domandaJSON.rispostaPaziente.paziente,
        domandaJSON.rispostaPaziente.domanda
      );
      domandeRisposte.set(domanda, risposta);
    }

    quizPreliminareService.saveQuizPreliminare(
      quizPreliminare,
      domandeRisposte
    );

    res.json({ message: 'Quiz correctly saved' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get(
  '/visualizza_quiz_preliminare',
  async (req: Request, res: Response) => {
    try {
      const idQuiz = Number(req.query.id);

      const quizPreliminare = await quizPreliminareService.get(idQuiz);

      const domandeRisposte = await quizPreliminareService.getDomandeRisposte(
        Number(quizPreliminare.id),
        quizPreliminare.paziente
      );

      const quizPreliminareJSON = {
        id: quizPreliminare.id,
        punteggio_tot: quizPreliminare.punteggioTot,
        numero_domande: quizPreliminare.numDomande,
        sage: quizPreliminare.sage,
        medico: quizPreliminare.medico,
        paziente: quizPreliminare.paziente,
      };

      const responseObject: ResponseObjectQP = {
        domandeRisposte: domandeRisposte,
        quizPreliminare: quizPreliminareJSON,
      };

      res.json(responseObject);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

router.post(
  '/aggiungi_risposte_preliminare',
  async (req: Request, res: Response) => {
    try {
      const risposteJSON = req.body;
      risposteJSON.forEach(async (data: RispostaPreliminare) => {
        const risposta = new RispostaQuizPreliminare(
          data.risposta,
          data.paziente,
          data.domanda_preliminare,
          data.id
        );
        await quizPreliminareService.updateRisposta(risposta);
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
