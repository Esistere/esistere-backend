import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';

export interface MedicoServiceInterface {
  getAll(): Promise<LineaGuida[]>;
  get(codice_identificativo: number): Promise<LineaGuida>;
  save(lineeGuida: LineaGuida): void;
  update(lineeGuida: LineaGuida): void;
}
