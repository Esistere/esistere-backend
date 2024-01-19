import {
  STORYIMGPATH,
  STORYIMGSAVE,
  STORYAUDPATH,
  STORYAUDSAVE,
} from 'app/config';
import { Media } from 'app/entity/gestione_storia/Media';
import { Storia } from 'app/entity/gestione_storia/Storia';
import { StoriaService } from 'app/services/gestione_storia/StoriaService';
import { StoriaServiceInterface } from 'app/services/gestione_storia/StoriaServiceInterface';
import express, { Request, Response } from 'express';
import multer from 'multer';

const storyImgPath = STORYIMGPATH;
const storyAudPath = STORYAUDPATH;

const router = express.Router();
const storiaService: StoriaServiceInterface = new StoriaService();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, storyImgPath);
    } else if (file.mimetype.startsWith('audio/')) {
      cb(null, storyAudPath);
    } else {
      cb(new Error('Unsupported file type'), '');
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  '/save_storia',
  upload.single('file'),
  async (req: Request, res: Response) => {
    try {
      // TODO: check if json is valid
      const storiaJSON = JSON.parse(req.body.data);
      const file = req.file;

      if (file) {
        const storia = new Storia(storiaJSON.cg_fam, storiaJSON.testo);
        const idStoria = await storiaService.save(storia);
        const media = new Media(
          idStoria,
          '',
          storiaJSON.media.descrizione,
          storiaJSON.media.tipo
        );


        if (file.mimetype.startsWith('image/')) {
          media.allegato = STORYIMGSAVE + file.originalname;
        } else if (file.mimetype.startsWith('audio/')) {
          media.allegato = STORYAUDSAVE + file.originalname;
        } else {
          res.status(400).json({ error: 'File type not supported' });
        }

        await storiaService.saveMedia(media);
        res.json({ message: 'Story correctly saved' });
      } else {
        res.status(400).json({ error: 'File not provided' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
