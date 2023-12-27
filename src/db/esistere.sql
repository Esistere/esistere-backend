DROP DATABASE IF EXISTS esistere;
CREATE DATABASE esistere;
USE esistere;

DROP TABLE IF EXISTS medico;

CREATE TABLE medico (
    codice_identificativo serial PRIMARY KEY,
    nome varchar(30) NOT NULL,
    cognome varchar(30) NOT NULL,
    indirizzo_studio varchar(30) NOT NULL,
    citta varchar(30) NOT NULL,
    numero_civico varchar(6) NOT NULL,
    numero_telefono_studio varchar(13) NOT NULL,
    email varchar(50) NOT NULL,
    passwd varchar(50) NOT NULL
);

DROP TABLE IF EXISTS caregiver_familiare;

CREATE TABLE caregiver_familiare (
    codice_identificativo serial PRIMARY KEY,
    nome varcher(30) NOT NULL,
    cognome varchar(30) NOT NULL,
    indirizzo varchar(30) NOT NULL,
    citta varchar(30) NOT NULL,
    numero_civico varchar(6) NOT NULL,
    data_di_nascita date NOT NULL,
    numero_telefono varchar(13) NOT NULL,
    email varchar(50) NOT NULL,
    passwd varchar(50) NOT NULL
);

DROP TABLE IF EXISTS paziente;

CREATE TABLE paziente (
    codice_fiscale char(16) PRIMARY KEY,
    nome varchar(30) NOT NULL,
    cognome varchar(30) NOT NULL,
    data_di_nascita DATE NOT NULL,
    med integer NOT NULL,
    cg_fam integer NOT NULL,

    FOREIGN KEY (med) REFERENCES medico(codice_identificativo)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (cg_fam) REFERENCES caregiver_familiare(codice_identificativo)
        ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE IF EXISTS quiz_preliminare;

CREATE TABLE quiz_preliminare (
    id serial PRIMARY KEY,
    numero_domande integer NOT NULL,
    sage boolean NOT NULL,
    punteggio_totale decimal,
    med integer NOT NULL,
    paziente char(16) NOT NULL,
    
    FOREIGN KEY (med) REFERENCES medico(codice_identificativo)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (paziente) REFERENCES paziente(codice_fiscale)
        ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE IF EXISTS domanda_quiz_preliminare;

CREATE TABLE domanda_quiz_preliminare (
    id serial PRIMARY KEY,
    domanda varchar(300) NOT NULL,
    quiz_preliminare integer NOT NULL,
    
    FOREIGN KEY (quiz_preliminare) REFERENCES quiz_preliminare(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE IF EXISTS contenuto_quiz_preliminare;

CREATE TABLE contenuto_quiz_preliminare (
    quiz integer NOT NULL,
    domanda_quiz integer NOT NULL,

    PRIMARY KEY (quiz, domanda_quiz),
    FOREIGN KEY (quiz) REFERENCES quiz_preliminare(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (domanda_quiz) REFERENCES domanda_quiz_preliminare(id)
        ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE IF EXISTS risposta_quiz_preliminare;

CREATE TABLE risposta_quiz_preliminare (
    id serial PRIMARY KEY,
    domanda integer NOT NULL,
    paziente char(16) NOT NULL,
    risposta varchar(300) NOT NULL,

    FOREIGN KEY (domanda) REFERENCES domanda_quiz_preliminare(id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (paziente) REFERENCES paziente(codice_fiscale)
        ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE IF EXISTS linea_guida_quiz;

CREATE TABLE linea_guida_quiz (
    id serial PRIMARY KEY,
    med integer NOT NULL,
    linea_guida varchar(300) NOT NULL,


    FOREIGN KEY (med) REFERENCES medico(codice_identificativo)
        ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE IF EXISTS tac;

CREATE TABLE tac (
    id serial PRIMARY KEY,
    paziente char(16) NOT NULL,
    med integer NOT NULL,
    allegato bytea NOT NULL,
    stadio varchar(30) NOT NULL,

    FOREIGN KEY (paziente) REFERENCES paziente(codice_fiscale)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (med) REFERENCES medico(codice_identificativo)
        ON UPDATE CASCADE ON DELETE CASCADE
);
