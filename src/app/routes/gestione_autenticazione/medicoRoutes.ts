import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { MedicoService } from 'app/services/gestione_autenticazione/medico/MedicoService';
import { MedicoServiceInterface } from 'app/services/gestione_autenticazione/medico/MedicoServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const medicoService: MedicoServiceInterface = new MedicoService();

router.get('/visualizza_medico', async (req: Request, res: Response) => {
  try {
    const medici = await medicoService.getAll();
    res.json(medici);
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

    medicoService.save(medico);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
