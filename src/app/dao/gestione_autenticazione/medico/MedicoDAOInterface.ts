export interface Medico {
  getAll(): Promise<Medico[]>;
  get(codice_identificativo: number): Promise<Medico>;
  save(medico: Medico): Promise<void>;
  update(medico: Medico): Promise<void>;
}