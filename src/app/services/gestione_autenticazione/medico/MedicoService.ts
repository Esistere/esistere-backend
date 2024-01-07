import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { MedicoServiceInterface } from './MedicoServiceInterface';
import { MedicoDAO } from 'app/dao/gestione_autenticazione/medico/MedicoDAO';
import { MedicoDAOInterface } from 'app/dao/gestione_autenticazione/medico/MedicoDAOInterface';
import { PazienteDAOInterface } from 'app/dao/gestione_autenticazione/paziente/PazienteDAOInterface';
import { PazienteDAO } from 'app/dao/gestione_autenticazione/paziente/PazienteDAO';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export class MedicoService implements MedicoServiceInterface {
  private medicoDAO: MedicoDAOInterface;
  private pazienteDAO: PazienteDAOInterface;

  constructor() {
    this.medicoDAO = new MedicoDAO();
    this.pazienteDAO = new PazienteDAO();
  }

  public getAll(): Promise<Medico[]> {
    return this.medicoDAO.getAll();
  }

  public get(codice: string | number): Promise<Medico> {
    return this.medicoDAO.get(codice);
  }

  public save(medico: Medico): void {
    this.medicoDAO.save(medico);
  }

  public update(medico: Medico): void {
    this.medicoDAO.update(medico);
  }

  public getPazientiByMed(med: number): Promise<Paziente[]> {
    return this.pazienteDAO.getPazienteByMed(med);
  }

  public getPazienteByMed(cf: string): Promise<Paziente> {
    return this.pazienteDAO.get(cf);
  }
}
