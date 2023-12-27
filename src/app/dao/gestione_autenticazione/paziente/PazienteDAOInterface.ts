import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';
import { Pool } from 'pg';

export interface PazienteDAOInterface {
  get getAll(): Promise<Paziente[]>;
}
