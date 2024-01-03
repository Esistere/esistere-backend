import cors from 'cors';
import express from 'express';
import fs from 'fs';
import https from 'https';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import loginRoutes from 'app/routes/gestione_autenticazione/loginRoutes';
import authRoutes from './routes/gestione_autenticazione/authRoutes';

dotenv.config();

const key = fs.readFileSync('src/app/key.pem');
const cert = fs.readFileSync('src/app/cert.pem');

const app = express();

// CORS config
// TODO remove localhost from allowedOrigins before production
const allowedOrigins = ['https://esistere.github.io', 'http://localhost:3000'];
const corsOptions = {
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
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cookieParser());

// Use routes
app.use(loginRoutes);
app.use(authRoutes);

const port = 3001;
const server = https.createServer({ key: key, cert: cert }, app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
