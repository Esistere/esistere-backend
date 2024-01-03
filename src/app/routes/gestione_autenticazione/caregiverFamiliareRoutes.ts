import { CaregiverFamiliareService } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareService';
import { CaregiverFamiliareServiceInterface } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const caregiverFamiliareService: CaregiverFamiliareServiceInterface =
  new CaregiverFamiliareService();

router.get(
  '/visualizza_caregiver_familiari',
  async (req: Request, res: Response) => {
    try {
      const caregiverFamiliari = await caregiverFamiliareService.getAll();
      res.json(caregiverFamiliari);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
