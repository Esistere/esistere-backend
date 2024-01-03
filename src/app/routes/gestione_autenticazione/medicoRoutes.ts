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

export default router;
