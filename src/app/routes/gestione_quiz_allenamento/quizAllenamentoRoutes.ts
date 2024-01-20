/**
 * This file contains the routes related to the management of quiz allenamento.
 */
import { DomandaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/DomandaQuizAllenamento';
import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';
import { RispostaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/RispostaQuizAllenamento';
import { QuizAllenamentoService } from 'app/services/gestione_quiz_allenamento/QuizAllenamentoService';
import { QuizAllenamentoServiceInterface } from 'app/services/gestione_quiz_allenamento/QuizAllenamentoServiceInterface';
import {
  ResponseObjectQA,
  RispostaAllenamento,
} from 'app/adapter/gestione_quiz_allenamento/quizAllenamentoAdapter';
import express, { Request, Response } from 'express';

const router = express.Router();
const quizAllenamentoService: QuizAllenamentoServiceInterface =
  new QuizAllenamentoService();

/**
 * Get quiz allenamento giornaliero by ID.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The quiz allenamento giornaliero.
 */
router.get(
  '/quiz_allenamento_giornaliero',
  async (req: Request, res: Response) => {
    try {
      const idQuizAllenamento = Number(req.query.id);
      const quizAllenamento = await quizAllenamentoService.get(
        idQuizAllenamento
      );
      res.json(quizAllenamento);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * Get quiz allenamento by caregiver familiare.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The quiz allenamento.
 */
router.get('/quiz_allenamento_cgfam', async (req: Request, res: Response) => {
  try {
    const idCgFam = Number(req.query.idCgFam);
    const quizAllenamento =
      await quizAllenamentoService.getByCaregiverFamiliare(idCgFam);
    res.json(quizAllenamento);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Get domanda allenamento giornaliero by ID.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The domanda allenamento giornaliero.
 */
router.get(
  '/domanda_allenamento_giornaliero',
  async (req: Request, res: Response) => {
    try {
      const idDomanda = Number(req.query.id);
      const domanda = await quizAllenamentoService.getDomanda(idDomanda);
      res.json(domanda);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * Get domanda allenamento by quiz allenamento.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The domanda allenamento.
 */
router.get(
  '/domanda_allenamento_quiz_ag',
  async (req: Request, res: Response) => {
    try {
      const idQuizAg = Number(req.query.idQuizAg);
      const domanda = await quizAllenamentoService.getByQuizAllenamento(
        idQuizAg
      );
      res.json(domanda);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * Save domanda allenamento.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post(
  '/salva_domanda_allenamento',
  async (req: Request, res: Response) => {
    try {
      const domandaAllenamentoJSON = req.body;
      const domandaAllenamento = new DomandaQuizAllenamento(
        domandaAllenamentoJSON.domanda,
        domandaAllenamentoJSON.quiz_ag,
        domandaAllenamentoJSON.corretta
      );
      quizAllenamentoService.saveDomanda(domandaAllenamento);
      res.json({ message: 'Question correctly saved' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * Get risposta allenamento giornaliero by ID.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The risposta allenamento giornaliero.
 */
router.get(
  '/risposta_allenamento_giornaliero',
  async (req: Request, res: Response) => {
    try {
      const idRisposta = Number(req.query.idRisposta);
      const risposta = await quizAllenamentoService.getRisposta(idRisposta);
      res.json(risposta);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * Get risposta allenamento by domanda allenamento.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The risposta allenamento.
 */
router.get(
  '/risposta_allenamento_domanda_ag',
  async (req: Request, res: Response) => {
    try {
      const idDomanda = Number(req.query.idDomanda);
      const risposte = await quizAllenamentoService.getByDomandaAllenamento(
        idDomanda
      );
      res.json(risposte);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * Save risposta allenamento.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post(
  '/salva_risposta_allenamento',
  async (req: Request, res: Response) => {
    try {
      const rispostaAllenamentoJSON = req.body;
      const rispostaAllenamento = new RispostaQuizAllenamento(
        rispostaAllenamentoJSON.risposta,
        rispostaAllenamentoJSON.domanda_ag,
        rispostaAllenamentoJSON.corretta,
        rispostaAllenamentoJSON.selezionata
      );
      quizAllenamentoService.saveRisposta(rispostaAllenamento);
      res.json({ message: 'Answer correctly saved' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * Save quiz allenamento.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/salva_quiz_allenamento', async (req: Request, res: Response) => {
  try {
    const quizAllenamentoJSON = req.body;
    const domandeRisposte = new Map<
      DomandaQuizAllenamento,
      RispostaQuizAllenamento[]
    >();

    for (const domandaKey of Object.keys(quizAllenamentoJSON.domandeRisposte)) {
      const domandaJSON = quizAllenamentoJSON.domandeRisposte[domandaKey];
      const domanda = new DomandaQuizAllenamento(domandaJSON.domanda);
      const risposte = domandaJSON.risposte.map(
        (rispostaJSON: RispostaAllenamento) => {
          return new RispostaQuizAllenamento(
            rispostaJSON.risposta,
            undefined,
            rispostaJSON.corretta,
            undefined
          );
        }
      );
      domandeRisposte.set(domanda, risposte);
    }

    const quizAllenamento = quizAllenamentoJSON.quizAllenamento;

    const quizAllenamentoGiornaliero = new QuizAllenamentoGiornaliero(
      quizAllenamento.cg_fam,
      quizAllenamento.numero_domande
    );

    quizAllenamentoService.createQuizAllenamento(
      quizAllenamentoGiornaliero,
      domandeRisposte
    );

    res.json({ message: 'Quiz correctly saved' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * View quiz allenamento.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The quiz allenamento.
 */
router.get(
  '/visualizza_quiz_allenamento',
  async (req: Request, res: Response) => {
    try {
      const idQuizAg = Number(req.query.id);

      const quizAllenamentoGiornaliero = await quizAllenamentoService.get(
        idQuizAg
      );

      const domandeRisposte = await quizAllenamentoService.getDomandeRisposte(
        Number(quizAllenamentoGiornaliero.id)
      );

      const quizAllenamentoJSON = {
        cg_fam: quizAllenamentoGiornaliero.caregiverFamiliare,
        numero_domande: quizAllenamentoGiornaliero.numDomande,
        punteggio_totale: quizAllenamentoGiornaliero.punteggioTot,
        id: quizAllenamentoGiornaliero.id,
      };

      const responseObject: ResponseObjectQA = {
        domandeRisposte: domandeRisposte,
        quizAllenamento: quizAllenamentoJSON,
      };

      res.json(responseObject);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * Add answers to quiz.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/aggiungi_risposte', async (req: Request, res: Response) => {
  try {
    const risposteJSON = req.body;
    risposteJSON.forEach(async (data: RispostaAllenamento) => {
      const risposta = new RispostaQuizAllenamento(
        data.risposta,
        data.domanda_ag,
        data.corretta,
        data.selezionata,
        data.idRisposta
      );
      await quizAllenamentoService.updateRisposta(risposta);
    });
    res.status(200).json({ message: 'Answers correctly saved' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Update domanda.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/aggiorna_domanda', async (req: Request, res: Response) => {
  try {
    const domandeJSON = req.body;

    const domanda = new DomandaQuizAllenamento(
      domandeJSON.domanda,
      domandeJSON.quiz_ag,
      domandeJSON.corretta,
      domandeJSON.id
    );
    await quizAllenamentoService.updateDomanda(domanda);
    res.json({ message: 'Questions correctly updated' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Update quiz.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/aggiorna_quiz', async (req: Request, res: Response) => {
  try {
    const quizAllenamentoJSON = req.body;

    const quizAllenamento = new QuizAllenamentoGiornaliero(
      quizAllenamentoJSON.cg_fam,
      quizAllenamentoJSON.numero_domande,
      quizAllenamentoJSON.punteggio_totale,
      quizAllenamentoJSON.id
    );
    await quizAllenamentoService.update(quizAllenamento);
    res.json({ message: 'Quiz correctly updated' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
