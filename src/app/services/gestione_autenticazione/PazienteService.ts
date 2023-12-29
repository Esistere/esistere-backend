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

  public get(codice_fiscale: string): Promise<Paziente> {
    return this.pazienteDAO.get(codice_fiscale);
  }

  public save(paziente: Paziente): void {
    this.pazienteDAO.save(paziente);
  }

  public update(paziente: Paziente): void {
    this.pazienteDAO.update(paziente);
  }
}
