import * as daoModule from 'app/dao/gestione_storia/StoriaDAO';
import { Storia } from 'app/entity/gestione_storia/Storia';
import { StoriaService } from 'app/services/gestione_storia/StoriaService';
import { Media } from 'app/entity/gestione_storia/Media';

describe('StoriaService', () => {
  let service: StoriaService;
  let storia: Storia;
  let media: Media;

  beforeEach(() => {
    const mockStoriaDAO = {
      save: jest.fn().mockResolvedValue(1),
      saveMedia: jest.fn().mockResolvedValue(undefined),
      getByCaregiverFamiliare: jest
        .fn()
        .mockResolvedValue([{ cg_fam: 1, testo: 'Testo', id: 1 }]),
    };

    jest
      .spyOn(daoModule, 'StoriaDAO')
      .mockImplementation(() => mockStoriaDAO as any);
    service = new StoriaService();
    storia = new Storia(1, 'Testo');
    media = new Media(1, 'allegato', 'descrizione', 1);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('save should call DAO methods correctly', async () => {
    await service.save(storia);

    const mockDao = new daoModule.StoriaDAO() as any;

    expect(mockDao.save).toHaveBeenCalledWith(storia);
  });

  test('saveMedia should call DAO methods correctly', async () => {
    await service.saveMedia(media);

    const mockDao = new daoModule.StoriaDAO() as any;

    expect(mockDao.saveMedia).toHaveBeenCalledWith(media);
  });

  test('visualizzaStoria should call DAO methods correctly', async () => {
    const cg_fam: number = 1;
    const result = await service.getByCaregiverFamiliare(cg_fam);
    const oracle = [{ cg_fam: 1, testo: 'Testo', id: 1 }];

    const mockDao = new daoModule.StoriaDAO() as any;

    expect(result).toEqual(oracle);
    expect(mockDao.getByCaregiverFamiliare).toHaveBeenCalledWith(cg_fam);
  });
});
