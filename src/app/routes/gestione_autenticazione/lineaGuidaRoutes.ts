import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';
import { LineeGuidaService } from 'app/services/gestione_autenticazione/medico/linee_guida/LineeGuidaService';
import { LineeGuidaServiceInterface } from 'app/services/gestione_autenticazione/medico/linee_guida/LineeGuidaServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const lineeGuidaService: LineeGuidaServiceInterface = new LineeGuidaService();

router.get('/visualizza_medici', async (req: Request, res: Response) => {
  try {
    const lineeGuida = await lineeGuidaService.getAll();
    res.json(lineeGuida);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/salva_medico', async (req: Request, res: Response) => {
  try {
    console.log('Dati ', req.body);

    const lineeGuidaJSON = req.body;
    const lineeGuida = new LineaGuida(
      lineeGuidaJSON.id,
      lineeGuidaJSON.linea_guida,
      lineeGuidaJSON.med
    );

    if (!(await lineeGuidaService.get(lineeGuida.id))) {
      lineeGuidaService.save(lineeGuida);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
