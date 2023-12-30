import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';
import { PazienteService } from 'app/services/gestione_autenticazione/paziente/PazienteService';
import { PazienteServiceInterface } from 'app/services/gestione_autenticazione/paziente/PazienteServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const pazienteService: PazienteServiceInterface = new PazienteService();

router.get('/visualizza_pazienti', async (req: Request, res: Response) => {
  try {
    const pazienti = await pazienteService.getAll();
    res.json(pazienti);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/salva_paziente', async (req: Request, res: Response) => {
  try {
    console.log('Dati ', req.body);

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

export default router;
