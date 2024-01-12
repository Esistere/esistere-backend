import { Attivita } from 'app/entity/gestione_todolist/Attivita';
import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { ToDoListService } from 'app/services/gestione_todolist/ToDoListService';
import { ToDoListServiceInterface } from 'app/services/gestione_todolist/ToDoListServiceInterface';
import express, { Request, Response } from 'express';

const router = express.Router();
const toDoListService: ToDoListServiceInterface = new ToDoListService();

router.get('/to_do_list', async (req: Request, res: Response) => {
  try {
    const idToDoList = Number(req.query.id);
    const toDoList = await toDoListService.get(idToDoList);
    res.json(toDoList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/to_do_list_medico', async (req: Request, res: Response) => {
  try {
    const idMedico = Number(req.query.idMedico);
    const toDoList = await toDoListService.getByMed(idMedico);
    res.json(toDoList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/to_do_list_paziente', async (req: Request, res: Response) => {
  try {
    const cfPaziente = Number(req.body.codice_fiscale);
    const toDoList = await toDoListService.getByPaziente(cfPaziente);
    res.json(toDoList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get(
  '/to_do_list_medico_paziente',
  async (req: Request, res: Response) => {
    try {
      const idMed = Number(req.query.idMed);
      const cfPaziente = Number(req.query.cfPaziente);
      const toDoList = await toDoListService.getByMedAndPaz(idMed, cfPaziente);
      res.json(toDoList);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// router.post('/save_to_do_list', async (req: Request, res: Response) => {
//   try {
//     const toDoListJSON = req.body;
//     const toDoList = new ToDoList(
//       toDoListJSON.num_attivita,
//       toDoListJSON.completata,
//       toDoListJSON.med,
//       toDoListJSON.paziente
//     );
//     const idToDoList = await toDoListService.save(toDoList);
//     res.json({ message: 'ToDoList saved', idToDoList: idToDoList });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

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

router.get('/attivita', async (req: Request, res: Response) => {
  try {
    const idAttivita = Number(req.query.id);
    const attivita = await toDoListService.getAttivita(idAttivita);
    res.json(attivita);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/attivita_to_do_list', async (req: Request, res: Response) => {
  try {
    const id = Number(req.query.id);
    const attivita = await toDoListService.getAllAttivitaByToDoList(id);
    res.json(attivita);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

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
          attivita.valutazione,
          attivita.to_do_list
        )
      );
    });

    await toDoListService.createToDoList(toDoList, arrayAttivita);

    res.json({ success: 'true', message: 'ToDoList saved' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
