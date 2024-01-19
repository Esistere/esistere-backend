/**
 * This file contains the utility routes for handling medico-related operations.
 */

import express, { Request, Response } from 'express';
import { MedicoService } from 'app/services/gestione_autenticazione/medico/MedicoService';
import { MedicoServiceInterface } from 'app/services/gestione_autenticazione/medico/MedicoServiceInterface';

const router = express.Router();
const medicoService: MedicoServiceInterface = new MedicoService();

/**
 * GET /visualizza_medici
 * Retrieves all medici from the database.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A JSON response containing the list of medici.
 */
router.get('/visualizza_medici', async (req: Request, res: Response) => {
  try {
    const medici = await medicoService.getAll();
    res.json(medici);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
