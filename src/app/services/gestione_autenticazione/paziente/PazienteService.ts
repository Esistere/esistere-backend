import { PazienteDAOInterface } from 'app/dao/gestione_autenticazione/paziente/PazienteDAOInterface';
import { PazienteServiceInterface } from './PazienteServiceInterface';
import { PazienteDAO } from 'app/dao/gestione_autenticazione/paziente/PazienteDAO';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';
import { CaregiverFamiliareDAOInterface } from 'app/dao/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareDAOInterface';
import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';
import { CaregiverFamiliareDAO } from 'app/dao/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareDAO';
import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { MedicoDAOInterface } from 'app/dao/gestione_autenticazione/medico/MedicoDAOInterface';
import { MedicoDAO } from 'app/dao/gestione_autenticazione/medico/MedicoDAO';

export class PazienteService implements PazienteServiceInterface {
  private pazienteDAO: PazienteDAOInterface;
  private caregiverFamiliareDAO: CaregiverFamiliareDAOInterface;
  private medicoDAO: MedicoDAOInterface;

  constructor() {
    this.pazienteDAO = new PazienteDAO();
    this.caregiverFamiliareDAO = new CaregiverFamiliareDAO();
    this.medicoDAO = new MedicoDAO();
  }

  public getAll(): Promise<Paziente[]> {
    return this.pazienteDAO.getAll();
  }

  public get(codice_fiscale: string): Promise<Paziente> {
    return this.pazienteDAO.get(codice_fiscale);
  }

  public save(paziente: Paziente): void {
    this.pazienteDAO.save(paziente);
  }

  public update(paziente: Paziente): void {
    this.pazienteDAO.update(paziente);
  }

  public getCgFamByPaziente(cgFam: number): Promise<CaregiverFamiliare> {
    return this.caregiverFamiliareDAO.get(cgFam);
  }

  public getMedByPaziente(med: number): Promise<Medico> {
    return this.medicoDAO.get(med);
  }
}
