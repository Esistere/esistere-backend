import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { MedicoService } from 'app/services/gestione_autenticazione/medico/MedicoService';
import { MedicoServiceInterface } from 'app/services/gestione_autenticazione/medico/MedicoServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const medicoService: MedicoServiceInterface = new MedicoService();

router.get('/visualizza_medico', async (req: Request, res: Response) => {
  try {
    const idMedico = Number(req.query.id);
    const medico = await medicoService.get(idMedico);
    res.json(medico);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/visualizza_pazienti_med', async (req: Request, res: Response) => {
  try {
    const id = Number(req.query.id);
    const pazienti = await medicoService.getPazientiByMed(id);
    res.json(pazienti);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/visualizza_paziente_med', async (req: Request, res: Response) => {
  try {
    const cf = String(req.query.cf);
    const paziente = await medicoService.getPazienteByMed(cf);
    res.json(paziente);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/modifica_medico', async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const medico = new Medico(
      data.nome,
      data.cognome,
      data.indirizzo_studio,
      data.numero_civico,
      data.numero_telefono_studio,
      data.citta,
      data.email,
      data.passwd,
      data.codice_identificativo
    );
    medicoService.update(medico);
    res.json({ message: 'Medico modificato' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
