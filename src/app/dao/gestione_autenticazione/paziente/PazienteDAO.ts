import { Pool } from 'pg';
import { PazienteDAOInterface } from './PazienteDAOInterface';
import { Database } from 'app/Database';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';
import { rejects } from 'assert';

export class PazienteDAO implements PazienteDAOInterface {
  private pool: Pool;

  constructor() {
    this.pool = Database.instance;
  }

  public getAll(): Promise<Paziente[]> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        client?.query('SELECT * FROM paziente', (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            resolve(res.rows as Paziente[]);
          }
        });
      });
    });
  }

  public getByID(codice_fiscale: string): Promise<Paziente> {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client) => {
        if (err) {
          reject(err);
          return;
        }

        const query = 'SELECT * FROM paziente WHERE codice_fiscale = ?';

        //Passing the parameters as an array [], it is useful if there are more parameters
        client?.query(query, [codice_fiscale], (err, res) => {
          if (err) {
            console.log(err.stack);
            reject(err);
          } else {
            client.release();
            const paziente = res.rows[0] as Paziente;
            resolve(paziente);
          }
        });
      });
    });
  }
  
  public createPaziente(paziente: Paziente): void {
    this.pool.connect((err, client) => {
      if(err) {
        return;
      }

      let nome, cognome, codice_fiscale: string;
      let med, cg_fam : number;
      let data_di_nascita: Date;
      
      codice_fiscale = paziente.codiceFiscale;
      nome = paziente.nome;
      cognome = paziente.cognome;
      med = paziente.medico;
      cg_fam = paziente.caregiverFamiliare;
      data_di_nascita = paziente.dataDiNascita;

      let query: string;
      query = 'INSERT INTO paziente (codice_fiscale, nome, cognome, data_di_nascita,' + 
              'med, cg_fam) VALUES (? ? ? ? ? ?)';

      client?.query(query, [codice_fiscale, nome, cognome, data_di_nascita, med, cg_fam], (err, res) => {
        if(err) {
          console.log(err.stack);
          return;
        } else {
          client.release();
        }
      })
    })
  }

  // public updatePaziente(paziente: Paziente): Promise<Paziente> {
  //   return new Promise (())
  //   this.pool.connect((err, client) => {

  //   })
  // }

}
