/**
 * Service class for managing Medico entities.
 */
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

  /**
   * Retrieves all Medico entities.
   * @returns A promise that resolves to an array of Medico entities.
   */
  public getAll(): Promise<Medico[]> {
    return this.medicoDAO.getAll();
  }

  /**
   * Retrieves a Medico entity by its code.
   * @param codice - The code of the Medico entity.
   * @returns A promise that resolves to the Medico entity.
   */
  public get(codice: string | number): Promise<Medico> {
    return this.medicoDAO.get(codice);
  }

  /**
   * Saves a Medico entity.
   * @param medico - The Medico entity to be saved.
   */
  public save(medico: Medico): void {
    this.medicoDAO.save(medico);
  }

  /**
   * Updates a Medico entity.
   * @param medico - The Medico entity to be updated.
   */
  public update(medico: Medico): void {
    this.medicoDAO.update(medico);
  }

  /**
   * Retrieves all Paziente entities associated with a Medico.
   * @param med - The ID of the Medico.
   * @returns A promise that resolves to an array of Paziente entities.
   */
  public getPazientiByMed(med: number): Promise<Paziente[]> {
    return this.pazienteDAO.getPazienteByMed(med);
  }

  /**
   * Retrieves a Paziente entity associated with a Medico by the Paziente's CF.
   * @param cf - The CF (Codice Fiscale) of the Paziente.
   * @returns A promise that resolves to the Paziente entity.
   */
  public getPazienteByMed(cf: string): Promise<Paziente> {
    return this.pazienteDAO.get(cf);
  }
}
