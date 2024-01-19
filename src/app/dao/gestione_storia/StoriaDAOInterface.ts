import { Media } from 'app/entity/gestione_storia/Media';
import { Storia } from 'app/entity/gestione_storia/Storia';

/**
 * Represents the interface for a Storia Data Access Object (DAO).
 * This interface defines methods for retrieving and manipulating Storia and Media entities.
 */
export interface StoriaDAOInterface {
  /**
   * Retrieves all Storia entities.
   * @returns A promise that resolves to an array of Storia entities.
   */
  getAll(): Promise<Storia[]>;

  /**
   * Retrieves a Storia entity by its ID.
   * @param id - The ID of the Storia entity.
   * @returns A promise that resolves to the Storia entity.
   */
  get(id: number): Promise<Storia>;

  /**
   * Saves a Storia entity.
   * @param storia - The Storia entity to be saved.
   * @returns A promise that resolves the id of the saved Storia entity.
   */
  save(storia: Storia): Promise<number>;

  /**
   * Updates a Storia entity.
   * @param storia - The Storia entity to be updated.
   * @returns A promise that resolves when the Storia entity is updated.
   */
  update(storia: Storia): Promise<void>;

  /**
   * Retrieves all Storia entities associated with a caregiver or familiare.
   * @param caregiverFamiliare - The ID of the caregiver or familiare.
   * @returns A promise that resolves to an array of Storia entities.
   */
  getByCaregiverFamiliare(caregiverFamiliare: number): Promise<Storia[]>;

  /**
   * Retrieves all Media entities.
   * @returns A promise that resolves to an array of Media entities.
   */
  getAllMedia(): Promise<Media[]>;

  /**
   * Retrieves a Media entity by its ID.
   * @param id - The ID of the Media entity.
   * @returns A promise that resolves to the Media entity.
   */
  getMedia(id: number): Promise<Media>;

  /**
   * Saves a Media entity.
   * @param media - The Media entity to be saved.
   * @returns A promise that resolves when the Media entity is saved.
   */
  saveMedia(media: Media): Promise<void>;

  /**
   * Updates a Media entity.
   * @param media - The Media entity to be updated.
   * @returns A promise that resolves when the Media entity is updated.
   */
  updateMedia(media: Media): Promise<void>;

  /**
   * Retrieves all Media entities associated with a Storia entity.
   * @param storia - The ID of the Storia entity.
   * @returns A promise that resolves to an array of Media entities.
   */
  getMediaByStoria(storia: number): Promise<Media[]>;
}
