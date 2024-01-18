import * as daoModule from 'app/dao/gestione_todolist/ToDoListDAO';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';
import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { ToDoListService } from 'app/services/gestione_todolist/ToDoListService';

describe('ToDoListService', () => {
  let service: ToDoListService;
  let toDoList: ToDoList;
  let attivita: Attivita[];

  beforeEach(() => {
    const mockToDoListDAO = {
      save: jest.fn().mockResolvedValue(1),
      saveAttivita: jest.fn().mockResolvedValue(2),
    };

    jest
      .spyOn(daoModule, 'ToDoListDAO')
      .mockImplementation(() => mockToDoListDAO as any);
    service = new ToDoListService();
    toDoList;

    service = new ToDoListService();
    toDoList = new ToDoList(1, false, 1, 'CF');
    attivita = [
      new Attivita('Attivita 1', false, 'Commento 1', undefined),
      new Attivita('Attivita 2', true, 'Commento 2', undefined),
    ];
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('createToDoList should call DAO methods correctly', async () => {
    await service.createToDoList(toDoList, attivita);

    const mockDao = new daoModule.ToDoListDAO() as any;

    expect(mockDao.save).toHaveBeenCalledWith(toDoList);
    attivita.forEach((a) => {
      expect(mockDao.saveAttivita).toHaveBeenCalledWith({
        ...a,
        _toDoList: 1,
      });
    });
  });
});
