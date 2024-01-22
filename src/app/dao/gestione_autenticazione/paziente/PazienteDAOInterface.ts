import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

/**
 * Represents the interface for the Paziente DAO (Data Access Object).
 */
/**
 * Represents the interface for interacting with the Paziente data access object.
 */
export interface PazienteDAOInterface {
  /**
   * Retrieves all pazienti.
   * @returns A promise that resolves to an array of Paziente objects.
   */
  getAll(): Promise<Paziente[]>;

  /**
   * Retrieves a paziente by their codice fiscale.
   * @param codice_fiscale - The codice fiscale of the paziente.
   * @returns A promise that resolves to the Paziente object.
   */
  get(codice_fiscale: string): Promise<Paziente>;

  /**
   * Retrieves pazienti associated with a specific med.
   * @param med - The med identifier.
   * @returns A promise that resolves to an array of Paziente objects.
   */
  getPazienteByMed(med: number): Promise<Paziente[]>;

  /**
   * Retrieves pazienti associated with a specific caregiver familiare.
   * @param caregiver_familiare - The caregiver familiare identifier.
   * @returns A promise that resolves to an array of Paziente objects.
   */
  getPazienteByCgFam(caregiver_familiare: number): Promise<Paziente>;

  /**
   * Saves a new paziente.
   * @param paziente - The paziente object to be saved.
   * @returns A promise that resolves when the paziente is saved successfully.
   */
  save(paziente: Paziente): Promise<void>;

  /**
   * Updates an existing paziente.
   * @param paziente - The paziente object to be updated.
   * @returns A promise that resolves when the paziente is updated successfully.
   */
  update(paziente: Paziente): Promise<void>;
}
