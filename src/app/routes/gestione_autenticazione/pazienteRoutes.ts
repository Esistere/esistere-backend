/**
 * This file contains the routes for managing patients.
 */

import { PazienteService } from 'app/services/gestione_autenticazione/paziente/PazienteService';
import { PazienteServiceInterface } from 'app/services/gestione_autenticazione/paziente/PazienteServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const pazienteService: PazienteServiceInterface = new PazienteService();

/**
 * GET /visualizza_pazienti
 * Retrieves all patients.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The list of patients in JSON format.
 */
router.get('/visualizza_pazienti', async (req: Request, res: Response) => {
  try {
    const pazienti = await pazienteService.getAll();
    res.json(pazienti);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * POST /visualizza_paziente
 * Retrieves a specific patient by ID.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The patient information in JSON format.
 */
router.post('/visualizza_paziente', async (req: Request, res: Response) => {
  try {
    const id: string = req.body.id;

    const pazienteDAO = await pazienteService.get(id);
    const paziente = {
      codice_fiscale: pazienteDAO.codiceFiscale,
      nome: pazienteDAO.nome,
      cognome: pazienteDAO.cognome,
      data_di_nascita: pazienteDAO.dataDiNascita,
      med: pazienteDAO.medico,
      cg_fam: pazienteDAO.caregiverFamiliare,
    };

    res.json(paziente);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * GET /visualizza_codice_fiscale
 * Retrieves the fiscal code of a patient.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The fiscal code of the patient in JSON format.
 */
router.get(
  '/visualizza_codice_fiscale',
  async (req: Request, res: Response) => {
    try {
      const id: number = req.body.id;
      const paziente = await pazienteService.getCgFamByPaziente(id);
      res.json(paziente.codiceIdentificativo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * GET /visualizza_caregiver
 * Retrieves the caregiver of a patient.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The caregiver of the patient in JSON format.
 */
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
