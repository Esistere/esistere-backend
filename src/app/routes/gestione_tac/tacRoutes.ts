import express, { Request, Response } from 'express';
import { Tac } from 'app/entity/gestione_tac/Tac';
import { TacServiceInterface } from 'app/services/gestione_tac/TacServiceInterface';
import { TacService } from 'app/services/gestione_tac/TacService';

const router = express.Router();
const tacService: TacServiceInterface = new TacService();

router.get('/tac', async (req: Request, res: Response) => {
  try {
    const idTac = Number(req.query.id);
    const tac = await tacService.get(idTac);
    res.json(tac);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/tac_paziente', async (req: Request, res: Response) => {
  try {
    const codice_fiscale = req.body.codice_fiscale;
    const tac = await tacService.getByPaziente(codice_fiscale);
    res.json(tac);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/update_tac', async (req: Request, res: Response) => {
  try {
    const tacJSON = req.body;
    const tac = new Tac(
      tacJSON.stadio,
      tacJSON.allegato,
      tacJSON.medico,
      tacJSON.paziente,
      tacJSON.id
    );
    await tacService.update(tac);
    res.json({ message: 'Tac aggiornata correttamente' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/save_tac', async (req: Request, res: Response) => {
  try {
    const tacJSON = req.body;
    const tac = new Tac(
      tacJSON.stadio,
      tacJSON.allegato,
      tacJSON.medico,
      tacJSON.paziente,
    );
    await tacService.save(tac);
    res.json({ message: 'Tac salvata correttamente' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});