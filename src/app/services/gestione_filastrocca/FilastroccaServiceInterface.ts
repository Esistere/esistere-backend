
/**
 * Interface for FilastroccaService.
 */
import { Filastrocca } from 'app/entity/gestione_filastrocca/Filastrocca';

export interface FilastroccaServiceInterface {
  /**
   * Retrieves a Filastrocca by its ID.
   * @param id - The ID of the Filastrocca.
   * @returns A Promise that resolves with the retrieved Filastrocca.
   */
  get(id: number): Promise<Filastrocca>;

  /**
   * Saves a Filastrocca.
   * @param filastrocca - The Filastrocca to be saved.
   */
  save(filastrocca: Filastrocca): void;

  /**
   * Updates a Filastrocca.
   * @param filastrocca - The Filastrocca to be updated.
   */
  update(filastrocca: Filastrocca): void;

  /**
   * Retrieves Filastroccas by caregiver familiare.
   * @param caregiverFamiliare - The caregiver familiare ID.
   * @returns A Promise that resolves with an array of Filastroccas.
   */
  getByCaregiverFamiliare(caregiverFamiliare: number): Promise<Filastrocca[]>;
}
