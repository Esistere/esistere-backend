import { PazienteService } from 'app/services/gestione_autenticazione/paziente/PazienteService';
import { PazienteServiceInterface } from 'app/services/gestione_autenticazione/paziente/PazienteServiceInterface';
import { CaregiverFamiliareService } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareService';
import { CaregiverFamiliareServiceInterface } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const pazienteService: PazienteServiceInterface = new PazienteService();
const caregiverFamiliareService: CaregiverFamiliareServiceInterface =
  new CaregiverFamiliareService();

router.get('/visualizza_pazienti', async (req: Request, res: Response) => {
  try {
    const pazienti = await pazienteService.getAll();
    res.json(pazienti);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get(
  '/visualizza_pazienti_med/:medId',
  async (req: Request, res: Response) => {
    try {
      const codice_identificativo: number = +req.params.medId;
      const pazienti = await pazienteService.getPaziente(codice_identificativo);
      res.json(pazienti);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

router.post('/dati_paziente', async (req: Request, res: Response) => {
  try {
    const codice_fiscale: string = req.body.codice_fiscale;

    const paziente = await pazienteService.get(codice_fiscale);

    res.json(paziente);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/visualizza_caregiver', async (req: Request, res: Response) => {
  try {
    const id: number = req.body.codice_identificativo;
    const caregiverFamiliare = await caregiverFamiliareService.get(id);
    res.json(caregiverFamiliare);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
