/**
 * This file contains the server configuration and setup for the backend
 * application.
 * It imports necessary modules, sets up middleware, defines routes, and starts
 * the server.
 */

import cors from 'cors';
import express from 'express';
import fs from 'fs';
import https from 'https';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import signUpRoutes from './routes/gestione_autenticazione/signUpRoutes';
import loginRoutes from 'app/routes/gestione_autenticazione/loginRoutes';
import authRoutes from './routes/gestione_autenticazione/authRoutes';
import utilsRoutes from 'app/routes/utilsRoutes';
import { TACPATH } from 'app/config';

dotenv.config();

const key = fs.readFileSync('src/app/key.pem');
const cert = fs.readFileSync('src/app/cert.pem');

const app = express();

// CORS config
const allowedOrigins = ['https://esistere.github.io', 'http://localhost:3000'];
const corsOptions = {
  /**
   * Determines whether the request origin is allowed or not.
   * @param origin - The request origin.
   * @param callback - The callback function to be called with the result.
   */
  origin: (
    origin: string | undefined,
    callback: (error: Error | null, allow?: boolean) => void
  ) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET, POST',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Use routes
app.use(utilsRoutes);
app.use(signUpRoutes);
app.use(loginRoutes);
app.use(authRoutes);

// Host static content
app.use('/static/tac', express.static(TACPATH));
// TODO
// app.use(
//   '/static/story/images',
//   express.static(path.join(__dirname, 'static', 'story', 'images'))
// );
// app.use(
//   '/static/story/audio',
//   express.static(path.join(__dirname, 'static', 'story', 'audio'))
// );

const port = 3001;
const server = https.createServer({ key: key, cert: cert }, app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
