import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import pazienteRoutes from './pazienteRoutes';
import medicoRoutes from './medicoRoutes';
import caregiverFamiliareRoutes from './caregiverFamiliareRoutes';

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

authRoutes.use(pazienteRoutes);
authRoutes.use(medicoRoutes);
authRoutes.use(caregiverFamiliareRoutes);

export default authRoutes;
