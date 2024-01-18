import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';
import { LineeGuidaService } from 'app/services/gestione_autenticazione/medico/linee_guida/LineeGuidaService';
import { LineeGuidaServiceInterface } from 'app/services/gestione_autenticazione/medico/linee_guida/LineeGuidaServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const lineeGuidaService: LineeGuidaServiceInterface = new LineeGuidaService();

router.get('/visualizza_linee_guida', async (req: Request, res: Response) => {
  try {
    const lineeGuida = await lineeGuidaService.getAll();
    res.json(lineeGuida);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/visualizza_linea_guida', async (req: Request, res: Response) => {
  try {
    const idLineaGuida = Number(req.query.id);
    const lineaGuidaDAO = await lineeGuidaService.get(idLineaGuida);

    const lineaGuida = {
      id: lineaGuidaDAO.id,
      linea_guida: lineaGuidaDAO.lineeGuida,
      med: lineaGuidaDAO.medico,
    };

    res.json(lineaGuida);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/salva_linee_guida', async (req: Request, res: Response) => {
  try {
    console.log('Dati ', req.body);

    const lineeGuidaJSON = req.body;
    const lineeGuida = new LineaGuida(
      lineeGuidaJSON.linea_guida,
      lineeGuidaJSON.med
    );

    lineeGuidaService.save(lineeGuida);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
