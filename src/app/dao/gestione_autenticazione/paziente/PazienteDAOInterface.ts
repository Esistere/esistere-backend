import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';
import { Pool } from 'pg';

export interface PazienteDAOInterface {
  getAll(): Promise<Paziente[]>;
  get(codice_fiscale: string): Promise<Paziente>;
  save(paziente: Paziente): Promise<void>;
}
