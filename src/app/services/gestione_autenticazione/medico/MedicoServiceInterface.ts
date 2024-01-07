import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export interface MedicoServiceInterface {
  getAll(): Promise<Medico[]>;
  get(codice: string | number): Promise<Medico>;
  save(medico: Medico): void;
  update(medico: Medico): void;
  getPazientiByMed(med: number): Promise<Paziente[]>;
  getPazienteByMed(cf: string): Promise<Paziente>;
}
