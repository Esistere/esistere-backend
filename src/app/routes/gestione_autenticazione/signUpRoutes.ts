/**
 * This file contains the routes for signing up users in the authentication management module.
 */

import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';
import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';
import { CaregiverFamiliareService } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareService';
import { CaregiverFamiliareServiceInterface } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareServiceInterface';
import { MedicoService } from 'app/services/gestione_autenticazione/medico/MedicoService';
import { MedicoServiceInterface } from 'app/services/gestione_autenticazione/medico/MedicoServiceInterface';
import { PazienteService } from 'app/services/gestione_autenticazione/paziente/PazienteService';
import { PazienteServiceInterface } from 'app/services/gestione_autenticazione/paziente/PazienteServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const pazienteService: PazienteServiceInterface = new PazienteService();
const caregiverFamiliareService: CaregiverFamiliareServiceInterface =
  new CaregiverFamiliareService();
const medicoService: MedicoServiceInterface = new MedicoService();

/**
 * Route for saving a new paziente (patient) in the system.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/salva_paziente', async (req: Request, res: Response) => {
  try {
    const pazienteJSON = req.body;
    const paziente = new Paziente(
      pazienteJSON.codice_fiscale,
      pazienteJSON.nome,
      pazienteJSON.cognome,
      pazienteJSON.data_di_nascita,
      pazienteJSON.med,
      pazienteJSON.cg_fam
    );

    try {
      const existingPaziente = await pazienteService.get(
        paziente.codiceFiscale
      );
      if (existingPaziente) {
        res
          .status(400)
          .json({ success: false, message: 'Codice fiscale already in use' });
      }
    } catch (error) {
      if (error === 'Paziente not found') {
        pazienteService.save(paziente);
        res.json({
          success: true,
          message: 'Paziente signup completed',
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Route for saving a new medico in the system.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/salva_medico', async (req: Request, res: Response) => {
  try {
    console.log('Dati ', req.body);

    const medicoJSON = req.body;
    const medico = new Medico(
      medicoJSON.nome,
      medicoJSON.cognome,
      medicoJSON.indirizzo_studio,
      medicoJSON.numero_civico,
      medicoJSON.numero_telefono_studio,
      medicoJSON.citta,
      medicoJSON.email,
      medicoJSON.passwd
    );

    if (
      !(
        (await medicoService.get(medico.email)) ||
        (await caregiverFamiliareService.get(medico.email))
      )
    ) {
      medicoService.save(medico);
      res.json({
        success: true,
        message: 'Signup completed',
      });
    } else {
      res.status(400).json({ success: false, message: 'Email already in use' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Route for saving a new caregiver familiare in the system.
 * @param req - The request object.
 * @param res - The response object.
 */
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
        caregiverFamiliareJSON.numero_civico,
        caregiverFamiliareJSON.data_di_nascita,
        caregiverFamiliareJSON.numero_di_telefono,
        caregiverFamiliareJSON.citta,
        caregiverFamiliareJSON.email,
        caregiverFamiliareJSON.passwd
      );

      if (
        !(
          (await medicoService.get(caregiverFamiliare.email)) ||
          (await caregiverFamiliareService.get(caregiverFamiliare.email))
        )
      ) {
        const id = await caregiverFamiliareService.save(caregiverFamiliare);
        res.json({
          success: true,
          message: 'Signup completed',
          id: id,
        });
      } else {
        res
          .status(400)
          .json({ success: false, message: 'Email already in use' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
