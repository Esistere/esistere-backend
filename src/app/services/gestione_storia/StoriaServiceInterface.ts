import { Storia } from 'app/entity/gestione_storia/Storia';
import { Media } from 'app/entity/gestione_storia/Media';

export interface StoriaServiceInterface {
  getAll(): Promise<Storia[]>;
  get(id: number): Promise<Storia>;
  save(storia: Storia): Promise<number>;
  update(storia: Storia): Promise<void>;
  getByCaregiverFamiliare(caregiverFamiliare: number): Promise<Storia[]>;
  getAllMedia(): Promise<Media[]>;
  getMedia(id: number): Promise<Media>;
  saveMedia(media: Media): Promise<void>;
  updateMedia(media: Media): Promise<void>;
  getMediaByStoria(storia: number): Promise<Media[]>;
}
