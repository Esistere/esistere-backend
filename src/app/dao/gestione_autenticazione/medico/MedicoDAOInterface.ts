import { Medico } from 'app/entity/gestione_autenticazione/Medico';

export interface MedicoDAOInterface {
  getAll(): Promise<Medico[]>;
  get(codice: string | number): Promise<Medico>;
  save(medico: Medico): Promise<void>;
  update(medico: Medico): Promise<void>;
}
