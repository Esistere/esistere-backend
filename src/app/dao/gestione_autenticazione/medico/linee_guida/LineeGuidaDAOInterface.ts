import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';

export interface LineeGuidaDAOInterface {
  getAll(): Promise<LineaGuida[]>;
  get(codice_identificativo: number): Promise<LineaGuida>;
  save(medico: LineaGuida): Promise<void>;
  update(medico: LineaGuida): Promise<void>;
}
