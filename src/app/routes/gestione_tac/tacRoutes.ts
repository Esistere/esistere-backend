import express, { Request, Response } from 'express';
import multer from 'multer';
import { Tac } from 'app/entity/gestione_tac/Tac';
import { TacServiceInterface } from 'app/services/gestione_tac/TacServiceInterface';
import { TacService } from 'app/services/gestione_tac/TacService';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
const tacService: TacServiceInterface = new TacService();

router.get('/tac', async (req: Request, res: Response) => {
  try {
    const idTac = Number(req.query.id);
    const tac = await tacService.get(idTac);
    const tacResponse = {
      id: tac.id,
      paziente: tac.paziente,
      med: tac.medico,
      allegato: tac.allegato.toString('base64'),
      stadio: tac.stadio,
    };
    res.json(tacResponse);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/tac_paziente', async (req: Request, res: Response) => {
  try {
    const codice_fiscale = req.body.codice_fiscale;
    const tac = await tacService.getByPaziente(codice_fiscale);
    res.json(tac);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/update_tac', async (req: Request, res: Response) => {
  try {
    const tacJSON = req.body;
    const tac = new Tac(
      tacJSON.stadio,
      tacJSON.medico,
      tacJSON.paziente,
      tacJSON.allegato,
      tacJSON.id
    );
    await tacService.update(tac);
    res.json({ message: 'Tac aggiornata correttamente' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post(
  '/save_tac',
  upload.single('image'),
  async (req: Request, res: Response) => {
    try {
      // TODO: check if req.body.data is a valid JSON
      const tacJSON = JSON.parse(req.body.data);
      const file = req.file;

      if (file) {
        const tac = new Tac(
          tacJSON.stadio,
          tacJSON.med,
          tacJSON.paziente,
          file.buffer
        );

        await tacService.save(tac);
        res.json({ message: 'Tac correctly saved' });
      } else {
        res.status(400).json({ error: 'File not provided' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
