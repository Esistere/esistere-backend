import * as daoModule from 'app/dao/gestione_autenticazione/medico/MedicoDAO';
import { MedicoService } from 'app/services/gestione_autenticazione/medico/MedicoService';

describe('MedicoService', () => {
  let service: MedicoService;

  beforeEach(() => {
    const mockMedicoDAO = {
      get: jest.fn().mockResolvedValue({
        _codiceIdentificativo: 1,
        _nome: 'nome',
        _cognome: 'cognome',
        _indirizzoStudio: 'indirizzoStudio',
        _numCivico: 1,
        _numTelefonoStudio: 'numTelefonoStudio',
        _citta: 'citta',
        _email: 'email',
        _passwd: 'passwd',
      }),
    };

    jest
      .spyOn(daoModule, 'MedicoDAO')
      .mockImplementation(() => mockMedicoDAO as any);
    service = new MedicoService();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('get should correctly process data from DAO', async () => {
    const id = 1;
    const result = await service.get(id);
    const oracle = {
      _codiceIdentificativo: 1,
      _nome: 'nome',
      _cognome: 'cognome',
      _indirizzoStudio: 'indirizzoStudio',
      _numCivico: 1,
      _numTelefonoStudio: 'numTelefonoStudio',
      _citta: 'citta',
      _email: 'email',
      _passwd: 'passwd',
    };

    const mockDao = new daoModule.MedicoDAO() as any;

    expect(result).toEqual(oracle);
    expect(mockDao.get).toHaveBeenCalledWith(id);
  });
});
