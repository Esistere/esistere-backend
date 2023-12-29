import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';
import { PazienteService } from 'app/services/gestione_autenticazione/PazienteService';
import { PazienteServiceInterface } from 'app/services/gestione_autenticazione/PazienteServiceInterface';
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

router.post('/salva_dati', async (req: Request, res: Response) => {
  try {
    const paziente = req.body as Paziente;

    console.log('Dati ricevuti' + paziente);

    pazienteService.createPaziente(paziente);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
