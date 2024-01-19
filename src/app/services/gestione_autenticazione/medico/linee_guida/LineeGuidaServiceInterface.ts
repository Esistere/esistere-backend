import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';

export interface LineeGuidaServiceInterface {
  getAll(): Promise<LineaGuida[]>;
  get(id: number): Promise<LineaGuida>;
  getByMed(medico: number): Promise<LineaGuida>;
  save(lineeGuida: LineaGuida): void;
  update(lineeGuida: LineaGuida): void;
}
