import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export interface PazienteServiceInterface {
  getAll(): Promise<Paziente[]>;
  get(codice_fiscale: string): Promise<Paziente>;
  save(paziente: Paziente): void;
  update(paziente: Paziente): void;
}
