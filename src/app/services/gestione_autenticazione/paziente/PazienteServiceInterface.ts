/**
 * Interface for the PazienteService.
 */
import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export interface PazienteServiceInterface {
  /**
   * Retrieves all the pazienti.
   * @returns A promise that resolves to an array of Paziente objects.
   */
  getAll(): Promise<Paziente[]>;

  /**
   * Retrieves a paziente by codice fiscale.
   * @param codice_fiscale - The codice fiscale of the paziente.
   * @returns A promise that resolves to a Paziente object.
   */
  get(codice_fiscale: string): Promise<Paziente>;

  /**
   * Saves a paziente.
   * @param paziente - The paziente to be saved.
   */
  save(paziente: Paziente): void;

  /**
   * Updates a paziente.
   * @param paziente - The paziente to be updated.
   */
  update(paziente: Paziente): void;

  /**
   * Retrieves the caregiver familiare associated with a paziente.
   * @param id - The ID of the paziente.
   * @returns A promise that resolves to a CaregiverFamiliare object.
   */
  getCgFamByPaziente(id: number): Promise<CaregiverFamiliare>;

  /**
   * Retrieves the medico associated with a paziente.
   * @param id - The ID of the paziente.
   * @returns A promise that resolves to a Medico object.
   */
  getMedByPaziente(codice_fiscale: string): Promise<number>;

  /**
   * Retrieves all the pazienti associated with a medico.
   * @param med - The ID of the medico.
   * @returns A promise that resolves to an array of Paziente objects.
   */
  getPazienteByMed(med: number): Promise<Paziente[]>;

  /**
   * Retrieves the paziente associated with a caregiver familiare.
   * @param cg_fam - The ID of the caregiver familiare.
   * @returns A promise that resolves to a Paziente object.
   */
  getPazienteByCgFam(cg_fam: number): Promise<Paziente>;
}
