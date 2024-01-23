/**
 * Service class for managing Paziente entities.
 */
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

  /**
   * Retrieves all Paziente entities.
   * @returns A promise that resolves to an array of Paziente entities.
   */
  public getAll(): Promise<Paziente[]> {
    return this.pazienteDAO.getAll();
  }

  /**
   * Retrieves a Paziente entity by its codice fiscale.
   * @param codice_fiscale - The codice fiscale of the Paziente entity.
   * @returns A promise that resolves to the Paziente entity.
   */
  public get(codice_fiscale: string): Promise<Paziente> {
    return this.pazienteDAO.get(codice_fiscale);
  }

  /**
   * Saves a Paziente entity.
   * @param paziente - The Paziente entity to be saved.
   */
  public save(paziente: Paziente): void {
    this.pazienteDAO.save(paziente);
  }

  /**
   * Updates a Paziente entity.
   * @param paziente - The Paziente entity to be updated.
   */
  public update(paziente: Paziente): void {
    this.pazienteDAO.update(paziente);
  }

  /**
   * Retrieves a CaregiverFamiliare entity by its id.
   * @param cgFam - The id of the CaregiverFamiliare entity.
   * @returns A promise that resolves to the CaregiverFamiliare entity.
   */
  public getCgFamByPaziente(cgFam: number): Promise<CaregiverFamiliare> {
    return this.caregiverFamiliareDAO.get(cgFam);
  }

  
  public async getMedByPaziente(codice_fiscale: string): Promise<number> {
    const paziente: Paziente = await this.pazienteDAO.get(codice_fiscale);
    const medico: Medico = await this.medicoDAO.get(paziente.medico);
    return Number(medico.codiceIdentificativo);
  }

  /**
   * Retrieves all Paziente entities associated with a Medico entity.
   * @param med - The id of the Medico entity.
   * @returns A promise that resolves to an array of Paziente entities.
   */
  public getPazienteByMed(med: number): Promise<Paziente[]> {
    return this.pazienteDAO.getPazienteByMed(med);
  }

  /**
   * Retrieves a Paziente entity associated with a CaregiverFamiliare entity.
   * @param cg_fam - The id of the CaregiverFamiliare entity.
   * @returns A promise that resolves to the Paziente entity.
   */
  public getPazienteByCgFam(cg_fam:number): Promise<Paziente> {
    return this.pazienteDAO.getPazienteByCgFam(cg_fam);
  }
}
