import * as daoModule from 'app/dao/gestione_filastrocca/FilastroccaDAO';
import { Filastrocca } from 'app/entity/gestione_filastrocca/Filastrocca';
import { FilastroccaService } from 'app/services/gestione_filastrocca/FilastroccaService';

describe('FilastroccaService', () => {
  let service: FilastroccaService;
  let filastrocca: Filastrocca;

  beforeEach(() => {
    const mockFilastroccaDAO = {
      save: jest.fn().mockResolvedValue(1),
    };

    jest
      .spyOn(daoModule, 'FilastroccaDAO')
      .mockImplementation(() => mockFilastroccaDAO as any);
    service = new FilastroccaService();
    filastrocca = new Filastrocca('Titolo', 'Testo', 'Autore', 1);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('save should call DAO methods correctly', async () => {
    service.save(filastrocca);

    const mockDao = new daoModule.FilastroccaDAO() as any;

    expect(mockDao.save).toHaveBeenCalledWith(filastrocca);
  });
});
