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

    if (!(await pazienteService.get(paziente.codiceFiscale))) {
      pazienteService.save(paziente);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

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
        caregiverFamiliareJSON.numero_telefono,
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
        const codice_identificativo = await caregiverFamiliareService.save(
          caregiverFamiliare
        );
        res.json({
          success: true,
          message: 'Signup completed',
          codice_identificativo: codice_identificativo,
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
