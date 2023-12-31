import { PazienteService } from 'app/services/gestione_autenticazione/paziente/PazienteService';
import { PazienteServiceInterface } from 'app/services/gestione_autenticazione/paziente/PazienteServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const pazienteService: PazienteServiceInterface = new PazienteService();

router.get('/visualizza_pazienti', async (req: Request, res: Response) => {
  try {
    const pazienti = await pazienteService.getAll();
    res.json(pazienti);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/visualizza_paziente', async (req: Request, res: Response) => {
  try {
    const id: string = req.body.id;

    const paziente = await pazienteService.get(id);
    res.json(paziente);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/visualizza_caregiver', async (req: Request, res: Response) => {
  try {
    const id: number = req.body.id;
    const caregiverFamiliare = await pazienteService.getCgFamByPaziente(id);
    res.json(caregiverFamiliare);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
