import { MedicoService } from 'app/services/gestione_autenticazione/medico/MedicoService';
import { MedicoServiceInterface } from 'app/services/gestione_autenticazione/medico/MedicoServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const medicoService: MedicoServiceInterface = new MedicoService();

router.get('/visualizza_medici', async (req: Request, res: Response) => {
  try {
    const medici = await medicoService.getAll();
    res.json(medici);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/visualizza_medico', async (req: Request, res: Response) => {
  try {
    const idMedico = Number(req.query.id);
    const medico = await medicoService.get(idMedico);
    res.json(medico);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/visualizza_pazienti_med', async (req: Request, res: Response) => {
  try {
    const id = Number(req.query.id);
    const pazienti = await medicoService.getPazientiByMed(id);
    res.json(pazienti);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/visualizza_paziente_med', async (req: Request, res: Response) => {
  try {
    const cf = String(req.query.cf);
    const paziente = await medicoService.getPazienteByMed(cf);
    res.json(paziente);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
