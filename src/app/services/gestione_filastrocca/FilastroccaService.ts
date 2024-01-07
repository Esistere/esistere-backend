import { FilastroccaDAOInterface } from 'app/dao/gestione_filastrocca/FilastroccaDAOInterface';
import { FilastroccaServiceInterface } from './FilastroccaServiceInterface';
import { FilastroccaDAO } from 'app/dao/gestione_filastrocca/FilastroccaDAO';
import { Filastrocca } from 'app/entity/gestione filastrocca/Filastrocca';

export class FilastroccaService implements FilastroccaServiceInterface {
  filastroccaDAO: FilastroccaDAOInterface;

  constructor() {
    this.filastroccaDAO = new FilastroccaDAO();
  }
  get(id: number): Promise<Filastrocca> {
    return this.filastroccaDAO.get(id);
  }
  save(filastrocca: Filastrocca): void {
    this.filastroccaDAO.save(filastrocca);
  }
  update(filastrocca: Filastrocca): void {
    this.filastroccaDAO.update(filastrocca);
  }
  getByCaregiverFamiliare(caregiverFamiliare: number): Promise<Filastrocca[]> {
    return this.filastroccaDAO.getByCaregiverFamiliare(caregiverFamiliare);
  }
}
