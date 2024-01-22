/**
 * Interface for the CaregiverFamiliareService.
 */
import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';

export interface CaregiverFamiliareServiceInterface {
  /**
   * Retrieves all caregiver familiare records.
   * @returns A promise that resolves to an array of CaregiverFamiliare objects.
   */
  getAll(): Promise<CaregiverFamiliare[]>;

  /**
   * Retrieves a specific caregiver familiare record by its code.
   * @param codice - The code of the caregiver familiare.
   * @returns A promise that resolves to the CaregiverFamiliare object.
   */
  get(codice: string | number): Promise<CaregiverFamiliare>;

  /**
   * Saves a new caregiver familiare record.
   * @param caregiver_familiare - The caregiver familiare object to be saved.
   * @returns A promise that resolves to the ID of the saved record.
   */
  save(caregiver_familiare: CaregiverFamiliare): Promise<number>;

  /**
   * Updates an existing caregiver familiare record.
   * @param caregiver_familiare - The caregiver familiare object to be updated.
   */
  update(caregiver_familiare: CaregiverFamiliare): void;
}
