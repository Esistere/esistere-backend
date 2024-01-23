import * as daoModule from 'app/dao/gestione_tac/TacDAO';
import { Tac } from 'app/entity/gestione_tac/Tac';
import { TacService } from 'app/services/gestione_tac/TacService';

describe('TacService', () => {
  let service: TacService;
  let tac: Tac;

  beforeEach(() => {
    const mockTacDAO = {
      save: jest.fn().mockResolvedValue(1),
      getByPaziente: jest.fn().mockResolvedValue([
        {
          stadio: 'stadio',
          paziente: 'paziente',
          allegato: 'allegato',
          id: 1,
        },
      ]),
    };

    jest.spyOn(daoModule, 'TacDAO').mockImplementation(() => mockTacDAO as any);
    service = new TacService();
    tac = new Tac('stadio', 1, 'paziente', 'allegato');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('save should call DAO methods correctly', async () => {
    await service.save(tac);

    const mockDao = new daoModule.TacDAO() as any;

    expect(mockDao.save).toHaveBeenCalledWith(tac);
  });

  test('visualizzaTac should call DAO methods correctly', async () => {
    const paziente: string = 'paziente';
    const result = await service.getByPaziente(paziente);
    const oracle = [
      { stadio: 'stadio', paziente: 'paziente', allegato: 'allegato', id: 1 },
    ];

    const mockDao = new daoModule.TacDAO() as any;

    expect(result).toEqual(oracle);
    expect(mockDao.getByPaziente).toHaveBeenCalledWith(paziente);
  });
});
