/**
 * Interface for the StoriaService, which provides methods to interact with Storia and Media entities.
 */
import { Tac } from 'app/entity/gestione_tac/Tac';

export interface TacServiceInterface {
  /**
   * Retrieves all Tacs.
   * @returns A promise that resolves to an array of Tacs.
   */
  getAll(): Promise<Tac[]>;

  /**
   * Retrieves a Tac by its ID.
   * @param id - The ID of the Tac.
   * @returns A promise that resolves to the Tac with the specified ID.
   */
  get(id: number): Promise<Tac>;

  /**
   * Retrieves Tacs by medical professional.
   * @param med - The ID of the medical professional.
   * @returns A promise that resolves to an array of Tacs associated with the specified medical professional.
   */
  getByMed(med: number): Promise<Tac[]>;

  /**
   * Retrieves Tacs by patient.
   * @param paz - The ID of the patient.
   * @returns A promise that resolves to an array of Tacs associated with the specified patient.
   */
  getByPaziente(paz: string): Promise<Tac[]>;

  /**
   * Saves a Tac.
   * @param tac - The Tac to be saved.
   * @returns A promise that resolves when the Tac is successfully saved.
   */
  save(tac: Tac): Promise<void>;

  /**
   * Updates a Tac.
   * @param tac - The Tac to be updated.
   * @returns A promise that resolves when the Tac is successfully updated.
   */
  update(tac: Tac): Promise<void>;
}
