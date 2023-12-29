import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export interface PazienteDAOInterface {
  getAll(): Promise<Paziente[]>;
  get(codice_fiscale: string): Promise<Paziente>;
  save(paziente: Paziente): Promise<void>;
  update(paziente: Paziente): Promise<void>;
}
