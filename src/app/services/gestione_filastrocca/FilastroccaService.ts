import { FilastroccaDAOInterface } from 'app/dao/gestione_filastrocca/FilastroccaDAOInterface';
import { FilastroccaServiceInterface } from './FilastroccaServiceInterface';
import { FilastroccaDAO } from 'app/dao/gestione_filastrocca/FilastroccaDAO';
import { Filastrocca } from 'app/entity/gestione_filastrocca/Filastrocca';

export class FilastroccaService implements FilastroccaServiceInterface {
  filastroccaDAO: FilastroccaDAOInterface;

  constructor() {
    this.filastroccaDAO = new FilastroccaDAO();
  }

  public get(id: number): Promise<Filastrocca> {
    return this.filastroccaDAO.get(id);
  }

  public save(filastrocca: Filastrocca): void {
    this.filastroccaDAO.save(filastrocca);
  }

  public update(filastrocca: Filastrocca): void {
    this.filastroccaDAO.update(filastrocca);
  }

  public getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<Filastrocca[]> {
    return this.filastroccaDAO.getByCaregiverFamiliare(caregiverFamiliare);
  }
}
