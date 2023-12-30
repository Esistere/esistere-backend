import { Medico } from 'app/entity/gestione_autenticazione/Medico';

export interface MedicoServiceInterface {
  getAll(): Promise<Medico[]>;
  get(codice_identificativo: number): Promise<Medico>;
  save(medico: Medico): void;

  update(medico: Medico): void;
}
