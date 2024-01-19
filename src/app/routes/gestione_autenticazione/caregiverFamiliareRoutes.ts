import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';
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
        passwd: caregiverFamiliareDAO.passwd,
      };

      res.json(caregiverFamiliare);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

router.post(
  '/modifica_caregiver_familiare',
  async (req: Request, res: Response) => {
    try {
      const data = req.body;

      const caregiverFamiliare = new CaregiverFamiliare(
        data.nome,
        data.cognome,
        data.indirizzo,
        data.numero_civico,
        data.data_di_nascita,
        data.numero_di_telefono,
        data.citta,
        data.email,
        data.passwd,
        data.codice_identificativo
      );

      caregiverFamiliareService.update(caregiverFamiliare);
      res.json({ message: 'Caregiver Familiare modificato' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
