import cors from 'cors';
import express from 'express';
import fs from 'fs';
import https from 'https';
import bodyParser from 'body-parser';
import pazienteRoutes from 'app/routes/gestione_autenticazione/pazienteRoutes';

const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');

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
app.use(bodyParser.json());

// Use routes
app.use(pazienteRoutes);

const port = 3001;
const server = https.createServer({ key: key, cert: cert }, app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
