import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';

/**
 * Represents the interface for a Data Access Object (DAO) that handles LineeGuida entities.
 */
export interface LineeGuidaDAOInterface {
  /**
   * Retrieves all LineaGuida entities.
   * @returns A promise that resolves to an array of LineaGuida entities.
   */
  getAll(): Promise<LineaGuida[]>;

  /**
   * Retrieves a specific LineaGuida entity by its codice_identificativo.
   * @param codice_identificativo - The identifier of the LineaGuida entity.
   * @returns A promise that resolves to the LineaGuida entity.
   */
  get(codice_identificativo: number): Promise<LineaGuida>;

  /**
   * Saves a new LineaGuida entity.
   * @param medico - The LineaGuida entity to be saved.
   * @returns A promise that resolves when the LineaGuida entity is successfully saved.
   */
  save(medico: LineaGuida): Promise<void>;

  /**
   * Updates an existing LineaGuida entity.
   * @param medico - The LineaGuida entity to be updated.
   * @returns A promise that resolves when the LineaGuida entity is successfully updated.
   */
  update(medico: LineaGuida): Promise<void>;
}
