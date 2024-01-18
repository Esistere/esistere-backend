import { QuizPreliminareService } from 'app/services/gestione_quiz_preliminare/QuizPreliminareService';
import * as daoModule from 'app/dao/gestione_quiz_preliminare/QuizPreliminareDAO';
import { QuizPreliminare } from 'app/entity/gestione_quiz_preliminare/QuizPreliminare';
import { DomandaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/DomandaQuizPreliminare';
import { RispostaQuizPreliminare } from 'app/entity/gestione_quiz_preliminare/RispostaQuizPreliminare';

describe('QuizPreliminareService', () => {
  let service: QuizPreliminareService;
  let quizPreliminare: QuizPreliminare;
  let domandaPreliminare: DomandaQuizPreliminare;
  let rispostaPreliminare: RispostaQuizPreliminare;
  let domandeRisposte: Map<DomandaQuizPreliminare, RispostaQuizPreliminare>;

  beforeEach(() => {
    const mockQuizPreliminareDAO = {
      save: jest.fn().mockResolvedValue(1),
      saveDomanda: jest.fn().mockResolvedValue(2),
      saveRisposta: jest.fn().mockResolvedValue(undefined),
      getByQuizPreliminare: jest
        .fn()
        .mockResolvedValue([
          { id: 1, domanda: 'Domanda 1', quizPreliminare: 1 },
        ]),
      getByDomandaAndPaziente: jest.fn().mockResolvedValue({
        id: 1,
        domandaPreliminare: 1,
        risposta: 'Risposta 1',
        paziente: 'paziente',
      }),
    };

    jest
      .spyOn(daoModule, 'QuizPreliminareDAO')
      .mockImplementation(() => mockQuizPreliminareDAO as any);

    service = new QuizPreliminareService();

    quizPreliminare = new QuizPreliminare(1, true, 1, 'paziente', 12, 1);
    domandaPreliminare = new DomandaQuizPreliminare('Domanda', undefined, 1);
    rispostaPreliminare = new RispostaQuizPreliminare(
      'Risposta',
      'paziente',
      undefined
    );

    domandeRisposte = new Map();
    domandeRisposte.set(domandaPreliminare, rispostaPreliminare);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('saveQuizPreliminare should call DAO methods correctly', async () => {
    await service.saveQuizPreliminare(quizPreliminare, domandeRisposte);

    const mockDAO = new daoModule.QuizPreliminareDAO() as any;

    expect(mockDAO.save).toHaveBeenCalledWith(quizPreliminare);

    expect(mockDAO.saveDomanda).toHaveBeenCalledWith({
      ...domandaPreliminare,
      _quizPreliminare: 1,
    });

    expect(mockDAO.saveRisposta).toHaveBeenCalledWith({
      ...rispostaPreliminare,
      _domandaPreliminare: 2,
    });
  });

  test('getDomandeRisposte should correctly process data from DAO', async () => {
    const quizId = 1;
    const paziente = 'paziente';
    const mockDAO = new daoModule.QuizPreliminareDAO() as any;

    const result = await service.getDomandeRisposte(quizId, paziente);
    const expectedResponse = {
      'Domanda 1': {
        id_domanda: 1,
        quiz_preliminare: quizId,
        domanda: 'Domanda 1',
        risposta: {
          id: 1,
          domanda_preliminare: 1,
          risposta: 'Risposta 1',
          paziente: paziente,
        },
      },
    };

    expect(result).toEqual(expectedResponse);
    expect(mockDAO.getByQuizPreliminare).toHaveBeenCalledWith(quizId);
    expect(mockDAO.getByDomandaAndPaziente).toHaveBeenCalledWith(
      quizId,
      paziente
    );
  });
});
