import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { MedicoServiceInterface } from './MedicoServiceInterface';
import { MedicoDAO } from 'app/dao/gestione_autenticazione/medico/MedicoDAO';
import { MedicoDAOInterface } from 'app/dao/gestione_autenticazione/medico/MedicoDAOInterface';

export class MedicoService implements MedicoServiceInterface {
  private medicoDAO: MedicoDAOInterface;

  constructor() {
    this.medicoDAO = new MedicoDAO();
  }

  public getAll(): Promise<Medico[]> {
    return this.medicoDAO.getAll();
  }

  public get(codice_identificativo: number): Promise<Medico> {
    return this.medicoDAO.get(codice_identificativo);
  }

  public save(medico: Medico): void {
    this.medicoDAO.save(medico);
  }

  public update(medico: Medico): void {
    this.medicoDAO.update(medico);
  }
}
