import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';
import { Pool } from 'pg';

export interface PazienteDAOInterface {
  getAll(): Promise<Paziente[]>;
  getByID(codice_fiscale: string): Promise<Paziente>;
  createPaziente(paziente: Paziente): Promise<void>;
}
