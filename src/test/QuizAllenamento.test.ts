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
});
