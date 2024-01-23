/**
 * Service class for managing Storia entities.
 */
import { Storia } from 'app/entity/gestione_storia/Storia';
import { Media } from 'app/entity/gestione_storia/Media';
import { StoriaDAO } from 'app/dao/gestione_storia/StoriaDAO';
import { StoriaDAOInterface } from 'app/dao/gestione_storia/StoriaDAOInterface';
import { StoriaServiceInterface } from './StoriaServiceInterface';

export class StoriaService implements StoriaServiceInterface {
  private storiaDAO: StoriaDAOInterface;

  constructor() {
    this.storiaDAO = new StoriaDAO();
  }

  /**
   * Retrieves all Storia entities.
   * @returns A promise that resolves to an array of Storia entities.
   */
  public getAll(): Promise<Storia[]> {
    return this.storiaDAO.getAll();
  }

  /**
   * Retrieves a Storia entity by its ID.
   * @param id - The ID of the Storia entity.
   * @returns A promise that resolves to the Storia entity.
   */
  public get(id: number): Promise<Storia> {
    return this.storiaDAO.get(id);
  }

  /**
   * Saves a new Storia entity.
   * @param storia - The Storia entity to be saved.
   * @returns A promise that resolves to the ID of the saved Storia entity.
   */
  public save(storia: Storia): Promise<number> {
    return this.storiaDAO.save(storia);
  }

  /**
   * Updates an existing Storia entity.
   * @param storia - The Storia entity to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  public update(storia: Storia): Promise<void> {
    return this.storiaDAO.update(storia);
  }

  /**
   * Retrieves all Storia entities associated with a caregiver or family member.
   * @param caregiverFamiliare - The ID of the caregiver or family member.
   * @returns A promise that resolves to an array of Storia entities.
   */
  public getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<Storia[]> {
    return this.storiaDAO.getByCaregiverFamiliare(caregiverFamiliare);
  }

  /**
   * Retrieves all Media entities.
   * @returns A promise that resolves to an array of Media entities.
   */
  public getAllMedia(): Promise<Media[]> {
    return this.storiaDAO.getAllMedia();
  }

  /**
   * Retrieves a Media entity by its ID.
   * @param id - The ID of the Media entity.
   * @returns A promise that resolves to the Media entity.
   */
  public getMedia(id: number): Promise<Media> {
    return this.storiaDAO.getMedia(id);
  }

  /**
   * Saves a new Media entity.
   * @param media - The Media entity to be saved.
   * @returns A promise that resolves when the save is complete.
   */
  public saveMedia(media: Media): Promise<void> {
    return this.storiaDAO.saveMedia(media);
  }

  /**
   * Updates an existing Media entity.
   * @param media - The Media entity to be updated.
   * @returns A promise that resolves when the update is complete.
   */
  public updateMedia(media: Media): Promise<void> {
    return this.storiaDAO.updateMedia(media);
  }

  /**
   * Retrieves all Media entities associated with a Storia entity.
   * @param storia - The ID of the Storia entity.
   * @returns A promise that resolves to an array of Media entities.
   */
  public getMediaByStoria(storia: number): Promise<Media[]> {
    return this.storiaDAO.getMediaByStoria(storia);
  }
}
