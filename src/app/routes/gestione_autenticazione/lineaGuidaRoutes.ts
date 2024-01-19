/**
 * This file contains the routes for managing linee guida (guidelines) in the authentication management module.
 */

import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';
import { LineeGuidaService } from 'app/services/gestione_autenticazione/medico/linee_guida/LineeGuidaService';
import { LineeGuidaServiceInterface } from 'app/services/gestione_autenticazione/medico/linee_guida/LineeGuidaServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const lineeGuidaService: LineeGuidaServiceInterface = new LineeGuidaService();

/**
 * GET /visualizza_linee_guida
 * Retrieves all linee guida.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The list of linee guida in JSON format.
 */
router.get('/visualizza_linee_guida', async (req: Request, res: Response) => {
  try {
    const lineeGuida = await lineeGuidaService.getAll();
    res.json(lineeGuida);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * GET /visualizza_linea_guida
 * Retrieves a specific linea guida by its ID.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The linea guida object in JSON format.
 */
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

/**
 * GET /visualizza_linea_guida_medico
 * Retrieves a specific linea guida by the ID of the associated medico.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The linea guida object in JSON format.
 */
router.get(
  '/visualizza_linea_guida_medico',
  async (req: Request, res: Response) => {
    try {
      const idMedico = Number(req.query.id);
      const lineaGuidaDAO = await lineeGuidaService.getByMed(idMedico);

      const lineaGuida = {
        id: lineaGuidaDAO.id,
        linea_guida: lineaGuidaDAO.lineeGuida,
        med: lineaGuidaDAO.medico,
      };

      res.json(lineaGuida);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * POST /salva_linee_guida
 * Saves a new linea guida.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/salva_linee_guida', async (req: Request, res: Response) => {
  try {
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
