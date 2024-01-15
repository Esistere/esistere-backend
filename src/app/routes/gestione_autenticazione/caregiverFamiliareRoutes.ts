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

router.get(
  '/visualizza_caregiver_familiare',
  async (req: Request, res: Response) => {
    try {
      const idCaregiverFamiliare = Number(req.query.id);
      const caregiverFamiliareDAO = await caregiverFamiliareService.get(
        idCaregiverFamiliare
      );

      const caregiverFamiliare = {
        codice_identificativo: caregiverFamiliareDAO.codiceIdentificativo,
        nome: caregiverFamiliareDAO.nome,
        cognome: caregiverFamiliareDAO.cognome,
        indirizzo: caregiverFamiliareDAO.indirizzo,
        citta: caregiverFamiliareDAO.citta,
        numero_civico: caregiverFamiliareDAO.numCivico,
        data_di_nascita: caregiverFamiliareDAO.dataDiNascita,
        numero_di_telefono: caregiverFamiliareDAO.numTelefono,
        email: caregiverFamiliareDAO.email,
        passwd: caregiverFamiliareDAO.passwd
      };
      
      res.json(caregiverFamiliare);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
