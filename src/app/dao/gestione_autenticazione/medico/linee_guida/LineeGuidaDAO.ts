import { Pool } from 'pg';
import * as Database from 'app/Database';
import { LineeGuidaDAOInterface } from './LineeGuidaDAOInterface';
import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';

export class LineeGuidaDAO implements LineeGuidaDAOInterface{

  private pool: Pool;

  constructor() {
    this.pool = Database.Database.instance;
  }

  public getAll(): Promise<LineaGuida[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM linea_guida_quiz', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as LineaGuida[]);
          }
        });
      });
    });
  }

  public get(id: number): Promise<LineaGuida> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM linea_guida_quiz WHERE id = $1';

        client?.query(query, [id], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const linea_guida_quiz = res.rows[0] as LineaGuida;
            resolve(linea_guida_quiz);
          }
        });
      });
    });
  }
}

public save(medico: Medico): Promise<void> {
  return new Promise<void>((resolve, reject) =>
    this.pool.connect((err, client) => {
      if (err) {
        console.error("Errore durante l'aggiunta", err);
        reject(err);
        return;
      }

      let query: string;
      query =
        'INSERT INTO paziente (codice_identificativo, nome, cognome, indirizzo_studio, citta,' +
        ' numero_civico, numero_telefono_studio, email, passwd)' +
        ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';

      client?.query(
        query,
        [
          medico.codiceIdentificativo,
          medico.nome,
          medico.cognome,
          medico.indirizzoStudio,
          medico.citta,
          medico.numCivico,
          medico.numTelefonoStudio,
          medico.email,
          medico.passwd,
        ],
        (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
            return;
          } else {
            client.release();
            resolve();
          }
        }
      );
    })
  );
}

