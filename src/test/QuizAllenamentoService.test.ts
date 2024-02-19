import { QuizAllenamentoService } from 'app/services/gestione_quiz_allenamento/QuizAllenamentoService';
import * as daoModule from 'app/dao/gestione_quiz_allenamento/QuizAllenamentoDAO';
import { QuizAllenamentoGiornaliero } from 'app/entity/gestione_quiz_allenamento/QuizAllenamentoGiornaliero';
import { DomandaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/DomandaQuizAllenamento';
import { RispostaQuizAllenamento } from 'app/entity/gestione_quiz_allenamento/RispostaQuizAllenamento';

describe('QuizAllenamentoService', () => {
  let service: QuizAllenamentoService;
  let quizAllenamento: QuizAllenamentoGiornaliero;
  let domanda: DomandaQuizAllenamento;
  let risposta: RispostaQuizAllenamento;
  let domandeRisposte: Map<DomandaQuizAllenamento, RispostaQuizAllenamento[]>;

  beforeEach(() => {
    const mockQuizAllenamentoDAO = {
      save: jest.fn().mockResolvedValue(1),
      saveDomanda: jest.fn().mockResolvedValue(2),
      saveRisposta: jest.fn().mockResolvedValue(undefined),
      getByQuizAllenamento: jest.fn().mockResolvedValue([
        { id: 1, domanda: 'Domanda 1', corretta: true, quizAllenamento: 1 },
        { id: 2, domanda: 'Domanda 2', corretta: false, quizAllenamento: 1 },
      ]),
      getByDomandaAllenamento: jest.fn().mockResolvedValue([
        {
          id: 1,
          risposta: 'Risposta 1',
          corretta: true,
          selezionata: false,
          domanda: 1,
        },
        {
          id: 2,
          risposta: 'Risposta 2',
          corretta: false,
          selezionata: false,
          domanda: 2,
        },
      ]),
    };

    jest
      .spyOn(daoModule, 'QuizAllenamentoDAO')
      .mockImplementation(() => mockQuizAllenamentoDAO as any);

    service = new QuizAllenamentoService();

    quizAllenamento = new QuizAllenamentoGiornaliero(1, 1, 1);
    domanda = new DomandaQuizAllenamento('Domanda', undefined, true);
    risposta = new RispostaQuizAllenamento('Risposta', 1, true, true);

    domandeRisposte = new Map();
    domandeRisposte.set(domanda, [risposta]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('createQuizAllenamento should call DAO methods correctly', async () => {
    await service.createQuizAllenamento(quizAllenamento, domandeRisposte);

    const mockDAO = new daoModule.QuizAllenamentoDAO() as any;

    expect(mockDAO.save).toHaveBeenCalledWith(quizAllenamento);
    expect(mockDAO.saveDomanda).toHaveBeenCalledWith({
      ...domanda,
      _quizAllenamento: 1,
    });

    domandeRisposte.get(domanda)?.forEach((r) => {
      expect(mockDAO.saveRisposta).toHaveBeenCalledWith({
        ...r,
        _domanda: 2,
      });
    });
  });

  test('getDomandeRisposte should correctly process data from DAO', async () => {
    const quizId = 1;
    const mockDAO = new daoModule.QuizAllenamentoDAO() as any;

    const expectedResponse = {
      'Domanda 1': {
        idDomanda: 1,
        quiz_ag: 1,
        domanda: 'Domanda 1',
        corretta: true,
        risposte: [
          {
            id: 1,
            domanda_ag: 1,
            risposta: 'Risposta 1',
            corretta: true,
            selezionata: false,
          },
          {
            id: 2,
            domanda_ag: 1,
            risposta: 'Risposta 2',
            corretta: false,
            selezionata: false,
          },
        ],
      },
      'Domanda 2': {
        idDomanda: 2,
        quiz_ag: 1,
        domanda: 'Domanda 2',
        corretta: false,
        risposte: [
          {
            id: 1,
            domanda_ag: 2,
            risposta: 'Risposta 1',
            corretta: true,
            selezionata: false,
          },
          {
            id: 2,
            domanda_ag: 2,
            risposta: 'Risposta 2',
            corretta: false,
            selezionata: false,
          },
        ],
      },
    };

    const result = await service.getDomandeRisposte(quizId);

    expect(result).toEqual(expectedResponse);

    expect(mockDAO.getByQuizAllenamento).toHaveBeenCalledWith(quizId);

    expect(mockDAO.getByDomandaAllenamento).toHaveBeenCalledWith(1);

    expect(mockDAO.getByDomandaAllenamento).toHaveBeenCalledWith(2);
  });
});
