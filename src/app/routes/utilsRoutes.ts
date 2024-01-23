/**
 * This file contains the utility routes for handling some operations.
 */

import express, { Request, Response } from 'express';
import { MedicoService } from 'app/services/gestione_autenticazione/medico/MedicoService';
import { MedicoServiceInterface } from 'app/services/gestione_autenticazione/medico/MedicoServiceInterface';

const router = express.Router();
const medicoService: MedicoServiceInterface = new MedicoService();

/**
 * GET /visualizza_medici
 * Retrieves a list of all medici and returns a JSON response with their names and surnames.
 * @param req - The request object.
 * @param res - The response object.
 * @returns A JSON response with the names, surnames and ids of all medici.
 */
router.get('/visualizza_medici', async (req: Request, res: Response) => {
  try {
    const medici = await medicoService.getAll();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const mediciResponse = medici.map(({ passwd, email, ...rest }) => rest);

    res.json(mediciResponse);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
