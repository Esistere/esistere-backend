import cors from 'cors';
import express from 'express';
import fs from 'fs';
import https from 'https';
import dotenv from 'dotenv';
import sessions from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import pazienteRoutes from 'app/routes/gestione_autenticazione/pazienteRoutes';
import medicoRoutes from 'app/routes/gestione_autenticazione/medicoRoutes';
import caregiverFamiliareRoutes from 'app/routes/gestione_autenticazione/caregiverFamiliareRoutes';
import loginRoutes from 'app/routes/gestione_autenticazione/loginRoutes';
import './sesssionData';

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

// Session middleware
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: String(process.env.SESSION_KEY),
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cookieParser());

// Use routes
app.use(pazienteRoutes);
app.use(medicoRoutes);
app.use(caregiverFamiliareRoutes);
app.use(loginRoutes);

const port = 3001;
const server = https.createServer({ key: key, cert: cert }, app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
