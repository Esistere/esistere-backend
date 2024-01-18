import { Tac } from 'app/entity/gestione_tac/Tac';

/**
 * Interface for the Tac DAO (Data Access Object).
 * Defines methods for retrieving, saving, and updating Tac entities.
 */
export interface TacDAOInterface {
  /**
   * Retrieves all Tac entities.
   * @returns A promise that resolves to an array of Tac entities.
   */
  getAll(): Promise<Tac[]>;

  /**
   * Retrieves a Tac entity by its ID.
   * @param id - The ID of the Tac entity.
   * @returns A promise that resolves to the Tac entity.
   */
  get(id: number): Promise<Tac>;

  /**
   * Retrieves Tac entities by medical professional.
   * @param med - The ID of the medical professional.
   * @returns A promise that resolves to an array of Tac entities.
   */
  getByMed(med: number): Promise<Tac[]>;

  /**
   * Retrieves Tac entities by patient.
   * @param paz - The ID of the patient.
   * @returns A promise that resolves to an array of Tac entities.
   */
  getByPaziente(paz: string): Promise<Tac[]>;

  /**
   * Saves a Tac entity.
   * @param tac - The Tac entity to save.
   * @returns A promise that resolves when the Tac entity is saved.
   */
  save(tac: Tac): Promise<void>;

  /**
   * Updates a Tac entity.
   * @param tac - The Tac entity to update.
   * @returns A promise that resolves when the Tac entity is updated.
   */
  update(tac: Tac): Promise<void>;
}
