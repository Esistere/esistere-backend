import { Filastrocca } from 'app/entity/gestione_filastrocca/Filastrocca';

/**
 * Represents the interface for a Filastrocca Data Access Object (DAO).
 */
export interface FilastroccaDAOInterface {
  /**
   * Retrieves a Filastrocca by its ID.
   * @param id - The ID of the Filastrocca.
   * @returns A Promise that resolves with the retrieved Filastrocca.
   */
  get(id: number): Promise<Filastrocca>;

  /**
   * Saves a Filastrocca.
   * @param filastrocca - The Filastrocca to be saved.
   * @returns A Promise that resolves when the Filastrocca is saved.
   */
  save(filastrocca: Filastrocca): Promise<void>;

  /**
   * Updates a Filastrocca.
   * @param filastrocca - The Filastrocca to be updated.
   * @returns A Promise that resolves when the Filastrocca is updated.
   */
  update(filastrocca: Filastrocca): Promise<void>;

  /**
   * Retrieves Filastroccas by caregiver familiare.
   * @param caregiverFamiliare - The caregiver familiare ID.
   * @returns A Promise that resolves with an array of Filastroccas.
   */
  getByCaregiverFamiliare(caregiverFamiliare: number): Promise<Filastrocca[]>;
}
