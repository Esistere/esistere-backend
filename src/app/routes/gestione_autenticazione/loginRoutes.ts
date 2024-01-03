import express, { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';
import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { MedicoServiceInterface } from 'app/services/gestione_autenticazione/medico/MedicoServiceInterface';
import { MedicoService } from 'app/services/gestione_autenticazione/medico/MedicoService';
import { CaregiverFamiliareServiceInterface } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareServiceInterface';
import { CaregiverFamiliareService } from 'app/services/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareService';

const router = express.Router();

const medicoService: MedicoServiceInterface = new MedicoService();
const caregiverFamiliareService: CaregiverFamiliareServiceInterface =
  new CaregiverFamiliareService();

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, passwd } = req.body;

    const medico: Medico | undefined = await medicoService.get(email);
    const caregiverFamiliare: CaregiverFamiliare | undefined =
      await caregiverFamiliareService.get(email);

    const body = {
      email: email,
      userType: '',
    };

    if (medico?.passwd === passwd || caregiverFamiliare?.passwd === passwd) {
      body.userType = medico ? 'medico' : 'caregiver';
      const token = jwt.sign(body, String(process.env.SECRET_KEY), {
        expiresIn: '1h',
      });

      res.json({
        success: true,
        message: 'Logged',
        jwt: token,
      });
    } else throw new Error();
  } catch (error) {
    res.status(401).json({ success: false, message: 'User not found' });
  }
});

export default router;
