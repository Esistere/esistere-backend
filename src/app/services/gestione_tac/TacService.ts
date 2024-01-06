import { TacDAO } from 'app/dao/gestione_tac/TacDAO';
import { TacDAOInterface } from 'app/dao/gestione_tac/TacDAOInterface';
import { TacServiceInterface } from './TacServiceInterface';
import { Tac } from 'app/entity/gestione_tac/Tac';

export class TacService implements TacServiceInterface {
  private tacDAO: TacDAOInterface;

  constructor() {
    this.tacDAO = new TacDAO();
  }

  getAll(): Promise<Tac[]> {
    return this.tacDAO.getAll();
  }

  get(id: number): Promise<Tac> {
    return this.tacDAO.get(id);
  }

  getByMed(med: number): Promise<Tac[]> {
    return this.tacDAO.getByMed(med);
  }

  getByPaziente(paz: string): Promise<Tac[]> {
    return this.tacDAO.getByPaziente(paz);
  }

  save(tac: Tac): Promise<void> {
    return this.tacDAO.save(tac);
  }

  update(tac: Tac): Promise<void> {
    return this.tacDAO.update(tac);
  }
}
