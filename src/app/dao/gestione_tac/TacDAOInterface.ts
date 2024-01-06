import { Tac } from 'app/entity/gestione_tac/Tac';

export interface TacDAOInterface {
  getAll(): Promise<Tac[]>;
  get(id: number): Promise<Tac>;
  getByMed(med: number): Promise<Tac[]>;
  getByPaziente(paz: string): Promise<Tac[]>;
  save(tac: Tac): Promise<void>;
  update(tac: Tac): Promise<void>;
}
