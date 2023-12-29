import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export interface PazienteServiceInterface {
  getAll(): Promise<Paziente[]>;
  getByID(codice_fiscale: string): Promise<Paziente>;
  createPaziente(paziente: Paziente): void;
}
