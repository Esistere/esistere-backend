import { DomandaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/DomandaQuizAllenamento';
import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';
import { RispostaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/RispostaQuizAllenamento';
import {
  DomandeRisposte,
  QuizAllenamentoService,
} from 'app/services/gestione_quiz_allenamento/QuizAllenamentoService';
import { QuizAllenamentoServiceInterface } from 'app/services/gestione_quiz_allenamento/QuizAllenamentoServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const quizAllenamentoService: QuizAllenamentoServiceInterface =
  new QuizAllenamentoService();

interface ResponseObject {
  domandeRisposte: { [key: string]: DomandeRisposte };
  quizAllenamento: QuizAllenamentoGiornaliero;
}

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

router.post(
  '/salva_domanda_allenamento',
  async (req: Request, res: Response) => {
    try {
      const domandaAllenamentoJSON = req.body;
      const domandaAllenamento = new DomandaQuizAllenamento(
        domandaAllenamentoJSON.quiz_ag,
        domandaAllenamentoJSON.domanda,
        domandaAllenamentoJSON.corretta
      );
      quizAllenamentoService.saveDomanda(domandaAllenamento);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

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

router.post(
  '/salva_risposta_allenamento',
  async (req: Request, res: Response) => {
    try {
      const rispostaAllenamentoJSON = req.body;
      const rispostaAllenamento = new RispostaQuizAllenamento(
        rispostaAllenamentoJSON.domanda_ag,
        rispostaAllenamentoJSON.risposta,
        rispostaAllenamentoJSON.corretta,
        rispostaAllenamentoJSON.selezionata
      );
      quizAllenamentoService.saveRisposta(rispostaAllenamento);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const risposte = domandaJSON.risposte.map((rispostaJSON: any) => {
        return new RispostaQuizAllenamento(rispostaJSON.risposta);
      });
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

router.get(
  '/visualizza_quiz_allenamento',
  async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const idQuizAg = data.id;

      const quizAllenamentoGiornaliero = await quizAllenamentoService.get(
        idQuizAg
      );

      const domandeRisposte = await quizAllenamentoService.getDomandeRisposte(
        Number(quizAllenamentoGiornaliero.id)
      );

      const responseObject: ResponseObject = {
        domandeRisposte: domandeRisposte,
        quizAllenamento: quizAllenamentoGiornaliero,
      };

      res.json(responseObject);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
