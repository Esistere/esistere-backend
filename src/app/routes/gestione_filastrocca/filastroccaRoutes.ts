import { Filastrocca } from 'app/entity/gestione filastrocca/Filastrocca';
import { FilastroccaService } from 'app/services/gestione_filastrocca/FilastroccaService';
import { FilastroccaServiceInterface } from 'app/services/gestione_filastrocca/FilastroccaServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const filastroccaService: FilastroccaServiceInterface =
  new FilastroccaService();

router.get('/filastrocche_cgfam', async (req: Request, res: Response) => {
  try {
    const id_cgfam = Number(req.query.id_cgfam);
    const filastrocche = await filastroccaService.getByCargiverFamiliare(
      id_cgfam
    );
    res.json(filastrocche);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/filastrocca', async (req: Request, res: Response) => {
  try {
    const id = Number(req.query.id);
    const filastrocca = await filastroccaService.get(id);
    res.json(filastrocca);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/salva_filastrocca', async (req: Request, res: Response) => {
  try {
    const filastroccaJSON = req.body;
    const filastrocca = new Filastrocca(
      filastroccaJSON.titolo,
      filastroccaJSON.testo,
      filastroccaJSON.autore,
      filastroccaJSON.caregiver_familiare
    );

    filastroccaService.save(filastrocca);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/update_filastrocca', async (req: Request, res: Response) => {
  try {
    const filastroccaJSON = req.body;
    const filastrocca = new Filastrocca(
      filastroccaJSON.id,
      filastroccaJSON.titolo,
      filastroccaJSON.testo,
      filastroccaJSON.autore,
      filastroccaJSON.caregiver_familiare
    );

    filastroccaService.update(filastrocca);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
export default router;
