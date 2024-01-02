import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';
import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { CaregiverFamiliareService } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareService';
import { CaregiverFamiliareServiceInterface } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareServiceInterface';
import { MedicoService } from 'app/services/gestione_autenticazione/medico/MedicoService';
import { MedicoServiceInterface } from 'app/services/gestione_autenticazione/medico/MedicoServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();

const medicoService: MedicoServiceInterface = new MedicoService();
const caregiverFamiliareService: CaregiverFamiliareServiceInterface =
  new CaregiverFamiliareService();

router.post('/login', async (req: Request, res: Response) => {
  const { email, passwd } = req.body;

  const medico: Medico | undefined = await medicoService.get(email);
  const caregiverFamiliare: CaregiverFamiliare | undefined =
    await caregiverFamiliareService.get(email);

  if (medico?.email === email && medico?.passwd === passwd) {
    req.session.user = { type: 'medico', email: medico.email };
    res.json({ success: true, userType: 'medico' });
  } else if (
    caregiverFamiliare?.email === email &&
    caregiverFamiliare.passwd === passwd
  ) {
    req.session.user = { type: 'caregiver', email: caregiverFamiliare.email };
    res.json({ success: true, userType: 'caregiver' });
  }

  res.status(401).json({ success: false, message: 'Credenziali non valide' });
});

export default router;
