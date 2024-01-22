/**
 * Represents the interface for the MedicoService.
 */
import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export interface MedicoServiceInterface {
  /**
   * Retrieves all the Medico entities.
   * @returns A promise that resolves to an array of Medico objects.
   */
  getAll(): Promise<Medico[]>;

  /**
   * Retrieves a specific Medico entity by its code.
   * @param codice - The code of the Medico.
   * @returns A promise that resolves to the Medico object.
   */
  get(codice: string | number): Promise<Medico>;

  /**
   * Saves a new Medico entity.
   * @param medico - The Medico object to be saved.
   */
  save(medico: Medico): void;

  /**
   * Updates an existing Medico entity.
   * @param medico - The Medico object to be updated.
   */
  update(medico: Medico): void;

  /**
   * Retrieves all the Paziente entities associated with a specific Medico.
   * @param med - The identifier of the Medico.
   * @returns A promise that resolves to an array of Paziente objects.
   */
  getPazientiByMed(med: number): Promise<Paziente[]>;

  /**
   * Retrieves a specific Paziente entity associated with a specific Medico.
   * @param cf - The fiscal code of the Paziente.
   * @returns A promise that resolves to the Paziente object.
   */
  getPazienteByMed(cf: string): Promise<Paziente>;
}
