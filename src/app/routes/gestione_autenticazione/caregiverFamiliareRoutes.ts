import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';
import { CaregiverFamiliareService } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareService';
import { CaregiverFamiliareServiceInterface } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const caregiverFamiliareService: CaregiverFamiliareServiceInterface =
  new CaregiverFamiliareService();

router.get(
  '/visualizza_caregiver_familiare',
  async (req: Request, res: Response) => {
    try {
      const caregiverFamiliari = await caregiverFamiliareService.getAll();
      res.json(caregiverFamiliari);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

router.post(
  '/salva_caregiver_familiare',
  async (req: Request, res: Response) => {
    try {
      console.log('Dati ', req.body);

      const caregiverFamiliareJSON = req.body;
      const caregiverFamiliare = new CaregiverFamiliare(
        caregiverFamiliareJSON.nome,
        caregiverFamiliareJSON.cognome,
        caregiverFamiliareJSON.indirizzo,
        caregiverFamiliareJSON.citta,
        caregiverFamiliareJSON.numero_civico,
        caregiverFamiliareJSON.data_di_nascita,
        caregiverFamiliareJSON.numero_telefono,
        caregiverFamiliareJSON.email,
        caregiverFamiliareJSON.passwd
      );

      caregiverFamiliareService.save(caregiverFamiliare);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
