/**
 * Interface for the LineeGuidaService.
 */
import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';


export interface LineeGuidaServiceInterface {
  /**
   * Retrieves all linee guida.
   * @returns A promise that resolves to an array of LineaGuida objects.
   */
  getAll(): Promise<LineaGuida[]>;

  /**
   * Retrieves a specific linee guida by its ID.
   * @param id - The ID of the linee guida to retrieve.
   * @returns A promise that resolves to the LineaGuida object.
   */
  get(id: number): Promise<LineaGuida>;

  /**
   * Retrieves linee guida associated with a specific medico.
   * @param medico - The ID of the medico.
   * @returns A promise that resolves to an array of LineaGuida objects.
   */
  getByMed(medico: number): Promise<LineaGuida>;

  /**
   * Saves a new linee guida.
   * @param lineeGuida - The LineaGuida object to save.
   */
  save(lineeGuida: LineaGuida): void;

  /**
   * Updates an existing linee guida.
   * @param lineeGuida - The LineaGuida object to update.
   */
  update(lineeGuida: LineaGuida): void;
}
