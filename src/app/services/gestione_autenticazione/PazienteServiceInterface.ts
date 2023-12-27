import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export interface PazienteServiceInterface {
  get getAll(): Promise<Paziente[]>;
}
