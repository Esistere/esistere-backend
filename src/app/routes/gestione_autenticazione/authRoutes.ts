import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import pazienteRoutes from './pazienteRoutes';
import medicoRoutes from './medicoRoutes';
import caregiverFamiliareRoutes from './caregiverFamiliareRoutes';
import quizAllenamentoRoutes from 'app/routes/gestione_quiz_allenamento/quizAllenamentoRoutes';
import filastroccaRoutes from '../gestione_filastrocca/filastroccaRoutes';
import toDoListRoutes from '../gestione_todolist/toDoListRoutes';
import tacRoutes from '../gestione_tac/tacRoutes';

const authRoutes = Router();

export interface CustomRequest extends Request {
  token: jwt.JwtPayload;
}

authRoutes.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (token === undefined) {
      res.status(401).send('Invalid token');
      return;
    } else {
      const result = jwt.verify(
        token,
        String(process.env.SECRET_KEY)
      ) as jwt.JwtPayload;
      if (!result) {
        res.status(401).send('Expired token');
        return;
      }
      (req as CustomRequest).token = result;
      next();
    }
  } catch (error) {
    res.status(401).send('Token not found');
  }
});

authRoutes.use('/userType', async (req: Request, res: Response) => {
  const userType = (req as CustomRequest).token.userType;

  res.json(userType);
});

authRoutes.use(pazienteRoutes);
authRoutes.use(medicoRoutes);
authRoutes.use(caregiverFamiliareRoutes);
authRoutes.use(quizAllenamentoRoutes);
authRoutes.use(filastroccaRoutes);
authRoutes.use(toDoListRoutes);
authRoutes.use(tacRoutes);

export default authRoutes;
