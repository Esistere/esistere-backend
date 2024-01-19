/**
 * This file contains the authentication routes for the application.
 * It exports an Express Router instance with the authentication routes.
 * It also defines a custom request interface and an authentication middleware.
 * The authentication middleware checks for a valid JWT token in the request header,
 * verifies the token, and attaches the token payload to the request object.
 * The routes are protected by the authentication middleware.
 */

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

/**
 * Custom request interface that extends the Express Request interface
 * to include a `token` property of type `jwt.JwtPayload`.
 */
export interface CustomRequest extends Request {
  token: jwt.JwtPayload;
}

/**
 * Authentication middleware that checks for a valid JWT token in the request header,
 * verifies the token, and attaches the token payload to the request object.
 * If the token is invalid or expired, it sends an appropriate error response.
 * If the token is valid, it calls the next middleware function.
 * @param req The Express Request object.
 * @param res The Express Response object.
 * @param next The next middleware function.
 */
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

/**
 * @param req The Express Request object
 * @param res The Express Response object
 * @returns The user type of the user that made the request
 */
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
