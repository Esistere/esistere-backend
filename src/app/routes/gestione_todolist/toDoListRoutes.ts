/**
 * This file contains the routes for managing ToDoLists in the application.
 */

import { ResponseObjectToDoList } from 'app/adapter/gestione_todolist/toDoListAdapter';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';
import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { ToDoListService } from 'app/services/gestione_todolist/ToDoListService';
import { ToDoListServiceInterface } from 'app/services/gestione_todolist/ToDoListServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const toDoListService: ToDoListServiceInterface = new ToDoListService();

/**
 * Get a ToDoList by its ID.
 * @param req - The request object.
 * @param res - The response object.
 */
router.get('/to_do_list', async (req: Request, res: Response) => {
  try {
    const idToDoList = Number(req.query.id);
    const toDoList = await toDoListService.get(idToDoList);
    res.json(toDoList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Get a ToDoList by the ID of the associated doctor.
 * @param req - The request object.
 * @param res - The response object.
 */
router.get('/to_do_list_medico', async (req: Request, res: Response) => {
  try {
    const idMedico = Number(req.query.idMedico);
    const toDoList = await toDoListService.getByMed(idMedico);
    res.json(toDoList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Get a ToDoList by the codice fiscale of the associated patient.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/to_do_list_paziente', async (req: Request, res: Response) => {
  try {
    const cfPaziente = String(req.body.codice_fiscale);
    const toDoList = await toDoListService.getByPaziente(cfPaziente);
    res.json(toDoList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Get a ToDoList by the ID of the associated doctor and the codice fiscale of the associated patient.
 * @param req - The request object.
 * @param res - The response object.
 */
router.get(
  '/to_do_list_medico_paziente',
  async (req: Request, res: Response) => {
    try {
      const idMed = Number(req.query.idMed);
      const cfPaziente = String(req.query.cfPaziente);
      const toDoList = await toDoListService.getByMedAndPaz(idMed, cfPaziente);
      res.json(toDoList);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

/**
 * Update a ToDoList.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/update_to_do_list', async (req: Request, res: Response) => {
  try {
    const toDoListJSON = req.body;
    const toDoList = new ToDoList(
      toDoListJSON.num_attivita,
      toDoListJSON.completata,
      toDoListJSON.med,
      toDoListJSON.paziente,
      toDoListJSON.id
    );
    await toDoListService.update(toDoList);
    res.json({ message: 'ToDoList updated' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Get an activity by its ID.
 * @param req - The request object.
 * @param res - The response object.
 */
router.get('/attivita', async (req: Request, res: Response) => {
  try {
    const idAttivita = Number(req.query.id);
    const attivita = await toDoListService.getAttivita(idAttivita);
    res.json(attivita);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Get all activities of a ToDoList.
 * @param req - The request object.
 * @param res - The response object.
 */
router.get('/attivita_to_do_list', async (req: Request, res: Response) => {
  try {
    const id = Number(req.query.id);
    const attivita = await toDoListService.getAllAttivitaByToDoList(id);
    res.json(attivita);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Save an activity.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/save_attivita', async (req: Request, res: Response) => {
  try {
    const attivitaJSON = req.body;
    const attivita = new Attivita(
      attivitaJSON.testo,
      attivitaJSON.completata,
      attivitaJSON.commento,
      attivitaJSON.valutazione,
      attivitaJSON.to_do_list
    );
    const idAttivita = await toDoListService.saveAttivita(attivita);

    res.json({ message: 'Attivita saved', idAttivita: idAttivita });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Update an activity.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/update_attivita', async (req: Request, res: Response) => {
  try {
    const attivitaJSON = req.body;
    const attivita = new Attivita(
      attivitaJSON.testo,
      attivitaJSON.completata,
      attivitaJSON.commento,
      attivitaJSON.valutazione,
      attivitaJSON.to_do_list,
      attivitaJSON.id
    );
    await toDoListService.updateAttivita(attivita);
    res.json({ message: 'Attivita updated' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Save a ToDoList with its associated activities.
 * @param req - The request object.
 * @param res - The response object.
 */
router.post('/save_to_do_list', async (req: Request, res: Response) => {
  try {
    const toDoListJSON = req.body.toDoList;
    const toDoList = new ToDoList(
      toDoListJSON.num_attivita,
      toDoListJSON.completata,
      toDoListJSON.med,
      toDoListJSON.paziente
    );

    const attivitaJSON = req.body.attivita;
    const arrayAttivita: Attivita[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    attivitaJSON.forEach((attivita: any) => {
      arrayAttivita.push(
        new Attivita(
          attivita.testo,
          attivita.completata,
          attivita.commento,
          attivita.valutazione
        )
      );
    });

    await toDoListService.createToDoList(toDoList, arrayAttivita);

    res.json({ success: 'true', message: 'ToDoList saved' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Get a ToDoList and its associated activities by its ID.
 * @param req - The request object.
 * @param res - The response object.
 */
router.get('/visualizza_to_do_list', async (req: Request, res: Response) => {
  try {
    const id = Number(req.query.id);
    const toDoList = await toDoListService.get(id);
    const toDoListJSON = {
      id: toDoList.id,
      num_attivita: toDoList.numAttivita,
      completata: toDoList.completata,
      med: toDoList.med,
      paziente: toDoList.paziente,
    };

    const arrayAttivita = await toDoListService.getAllAttivitaByToDoList(id);

    const responseObject: ResponseObjectToDoList = {
      toDoList: toDoListJSON,
      attivita: arrayAttivita,
    };

    res.json(responseObject);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
