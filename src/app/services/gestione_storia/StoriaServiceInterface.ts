/**
 * Interface for the StoriaService, which provides methods to interact with Storia and Media entities.
 */
import { Storia } from 'app/entity/gestione_storia/Storia';
import { Media } from 'app/entity/gestione_storia/Media';

export interface StoriaServiceInterface {
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
   * @returns A promise that resolves to the ID of the saved Storia entity.
   */
  save(storia: Storia): Promise<number>;

  /**
   * Updates a Storia entity.
   * @param storia - The Storia entity to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  update(storia: Storia): Promise<void>;

  /**
   * Retrieves all Storia entities associated with a caregiver or family member.
   * @param caregiverFamiliare - The ID of the caregiver or family member.
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
   * @returns A promise that resolves when the save is complete.
   */
  saveMedia(media: Media): Promise<void>;

  /**
   * Updates a Media entity.
   * @param media - The Media entity to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  updateMedia(media: Media): Promise<void>;

  /**
   * Retrieves all Media entities associated with a Storia entity.
   * @param storia - The ID of the Storia entity.
   * @returns A promise that resolves to an array of Media entities.
   */
  getMediaByStoria(storia: number): Promise<Media[]>;
}
