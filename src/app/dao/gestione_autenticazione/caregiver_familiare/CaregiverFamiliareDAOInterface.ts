import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';

/**
 * Represents the interface for the DAO (Data Access Object) of the CaregiverFamiliare entity.
 */
export interface CaregiverFamiliareDAOInterface {
  /**
   * Retrieves all caregiver familiare entities.
   * @returns A promise that resolves to an array of CaregiverFamiliare objects.
   */
  getAll(): Promise<CaregiverFamiliare[]>;

  /**
   * Retrieves a caregiver familiare entity by its codice.
   * @param codice - The id or email of the caregiver familiare.
   * @returns A promise that resolves to a CaregiverFamiliare object.
   */
  get(codice: string | number): Promise<CaregiverFamiliare>;

  /**
   * Saves a caregiver familiare entity.
   * @param caregiver_familiare - The caregiver familiare object to be saved.
   * @returns A promise that resolves to the ID of the saved caregiver familiare.
   */
  save(caregiver_familiare: CaregiverFamiliare): Promise<number>;

  /**
   * Updates a caregiver familiare entity.
   * @param caregiver_familiare - The caregiver familiare object to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  update(caregiver_familiare: CaregiverFamiliare): Promise<void>;
}
