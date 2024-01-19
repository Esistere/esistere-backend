import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import pazienteRoutes from './pazienteRoutes';
import medicoRoutes from './medicoRoutes';
import caregiverFamiliareRoutes from './caregiverFamiliareRoutes';
import quizAllenamentoRoutes from 'app/routes/gestione_quiz_allenamento/quizAllenamentoRoutes';
import quizPreliminareRoutes from 'app/routes/gestione_quiz_preliminare/quizPreliminareRoutes';
import filastroccaRoutes from '../gestione_filastrocca/filastroccaRoutes';
import toDoListRoutes from '../gestione_todolist/toDoListRoutes';
import tacRoutes from '../gestione_tac/tacRoutes';
import lineaGuidaRoutes from './lineaGuidaRoutes';
import storiaRoutes from '../gestione_storia/storiaRoutes';

const authRoutes = Router();

export interface CustomRequest extends Request {
  token: jwt.JwtPayload;
}

const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
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
};

// Use auth middleware
authRoutes.use(auth);

authRoutes.use('/userType', async (req: Request, res: Response) => {
  const userType = (req as CustomRequest).token.userType;

  res.json(userType);
});

authRoutes.use(pazienteRoutes);
authRoutes.use(medicoRoutes);
authRoutes.use(caregiverFamiliareRoutes);
authRoutes.use(lineaGuidaRoutes);
authRoutes.use(quizAllenamentoRoutes);
authRoutes.use(quizPreliminareRoutes);
authRoutes.use(filastroccaRoutes);
authRoutes.use(toDoListRoutes);
authRoutes.use(tacRoutes);
authRoutes.use(storiaRoutes);

export default authRoutes;
