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

  public getAll(): Promise<Storia[]> {
    return this.storiaDAO.getAll();
  }

  public get(id: number): Promise<Storia> {
    return this.storiaDAO.get(id);
  }

  public save(storia: Storia): Promise<void> {
    return this.storiaDAO.save(storia);
  }

  public update(storia: Storia): Promise<void> {
    return this.storiaDAO.update(storia);
  }

  public getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<Storia[]> {
    return this.storiaDAO.getByCaregiverFamiliare(caregiverFamiliare);
  }

  public getAllMedia(): Promise<Media[]> {
    return this.storiaDAO.getAllMedia();
  }

  public getMedia(id: number): Promise<Media> {
    return this.storiaDAO.getMedia(id);
  }

  public saveMedia(media: Media): Promise<void> {
    return this.storiaDAO.saveMedia(media);
  }

  public updateMedia(media: Media): Promise<void> {
    return this.storiaDAO.updateMedia(media);
  }

  public getMediaByStoria(storia: number): Promise<Media[]> {
    return this.storiaDAO.getMediaByStoria(storia);
  }
}
