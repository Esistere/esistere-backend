import { Medico } from 'app/entity/gestione_autenticazione/Medico';

/**
 * Represents the interface for the DAO (Data Access Object) of the Medico entity.
 */
export interface MedicoDAOInterface {
  /**
   * Retrieves all Medico entities.
   * @returns A promise that resolves to an array of Medico entities.
   */
  getAll(): Promise<Medico[]>;

  /**
   * Retrieves a Medico entity by its code.
   * @param codice - The id or email of the Medico entity to retrieve.
   * @returns A promise that resolves to the retrieved Medico entity.
   */
  get(codice: string | number): Promise<Medico>;

  /**
   * Saves a Medico entity.
   * @param medico - The Medico entity to save.
   * @returns A promise that resolves when the Medico entity is saved successfully.
   */
  save(medico: Medico): Promise<void>;

  /**
   * Updates a Medico entity.
   * @param medico - The Medico entity to update.
   * @returns A promise that resolves when the Medico entity is updated successfully.
   */
  update(medico: Medico): Promise<void>;
}
