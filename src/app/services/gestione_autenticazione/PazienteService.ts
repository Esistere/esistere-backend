import { PazienteDAOInterface } from 'app/dao/gestione_autenticazione/paziente/PazienteDAOInterface';
import { PazienteServiceInterface } from './PazienteServiceInterface';
import { PazienteDAO } from 'app/dao/gestione_autenticazione/paziente/PazienteDAO';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export class PazienteService implements PazienteServiceInterface {
  private pazienteDAO: PazienteDAOInterface;

  constructor() {
    this.pazienteDAO = new PazienteDAO();
  }

  public getAll(): Promise<Paziente[]> {
    return this.pazienteDAO.getAll();
  }

  public getByID(codice_fiscale: string): Promise<Paziente> {
    return this.pazienteDAO.getByID(codice_fiscale);
  }

  public createPaziente(paziente: Paziente): void {
    this.pazienteDAO.createPaziente(paziente);
  }
}
