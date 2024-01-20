/**
 * This file contains the routes related to the management of filastrocche.
 */
import { Filastrocca } from 'app/entity/gestione_filastrocca/Filastrocca';
import { FilastroccaService } from 'app/services/gestione_filastrocca/FilastroccaService';
import { FilastroccaServiceInterface } from 'app/services/gestione_filastrocca/FilastroccaServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const filastroccaService: FilastroccaServiceInterface =
  new FilastroccaService();

/**
 * Get filastrocche by caregiver familiare ID.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The filastrocche.
 */
router.get('/filastrocche_cgfam', async (req: Request, res: Response) => {
  try {
    const idCgFam = Number(req.query.idCgFam);
    const filastrocche = await filastroccaService.getByCaregiverFamiliare(
      idCgFam
    );
    res.json(filastrocche);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Get filastrocca by ID.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The filastrocca.
 */
router.get('/filastrocca', async (req: Request, res: Response) => {
  try {
    const id = Number(req.query.id);
    const filastrocca = await filastroccaService.get(id);
    res.json(filastrocca);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Save a new filastrocca.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message.
 */
router.post('/salva_filastrocca', async (req: Request, res: Response) => {
  try {
    const filastroccaJSON = req.body;
    const filastrocca = new Filastrocca(
      filastroccaJSON.titolo,
      filastroccaJSON.testo,
      filastroccaJSON.autore,
      filastroccaJSON.cg_fam
    );

    filastroccaService.save(filastrocca);
    res.status(201).json({ success: true, message: 'Filastrocca aggiunta' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Update an existing filastrocca.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A success message and the updated filastrocca.
 */
router.post('/update_filastrocca', async (req: Request, res: Response) => {
  try {
    const filastroccaJSON = req.body;
    const filastrocca = new Filastrocca(
      filastroccaJSON.titolo,
      filastroccaJSON.testo,
      filastroccaJSON.autore,
      filastroccaJSON.cg_fam,
      filastroccaJSON.id
    );

    filastroccaService.update(filastrocca);
    res.status(200).json({ success: true, filastrocca });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
