import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';
import { ToDoListServiceInterface } from './ToDoListServiceInterface';
import { ToDoListDAOInterface } from 'app/dao/gestione_todolist/ToDoListDAOInterface';
import { ToDoListDAO } from 'app/dao/gestione_todolist/ToDoListDAO';

export class ToDoListService implements ToDoListServiceInterface {
  private toDoListDAO: ToDoListDAOInterface;

  constructor() {
    this.toDoListDAO = new ToDoListDAO();
  }

  public getAll(): Promise<ToDoList[]> {
    return this.toDoListDAO.getAll();
  }

  public getByMed(medico: number): Promise<ToDoList[]> {
    return this.toDoListDAO.getByMed(medico);
  }

  public getByPaziente(paziente: string): Promise<ToDoList[]> {
    return this.toDoListDAO.getByPaziente(paziente);
  }

  public getByMedAndPaz(medico: number, paziente: string): Promise<ToDoList[]> {
    return this.toDoListDAO.getByMedAndPaz(medico, paziente);
  }

  public get(id: number): Promise<ToDoList> {
    return this.toDoListDAO.get(id);
  }

  public getAllAttivitaByToDoList(toDoList: number): Promise<Attivita[]> {
    return this.toDoListDAO.getAllAttivitaByToDoList(toDoList);
  }

  public getAttivita(id: number): Promise<Attivita> {
    return this.toDoListDAO.getAttivita(id);
  }

  public updateAttivita(attivita: Attivita): Promise<void> {
    return this.toDoListDAO.updateAttivita(attivita);
  }

  public saveAttivita(attivita: Attivita): Promise<number> {
    return this.toDoListDAO.saveAttivita(attivita);
  }

  public update(toDoList: ToDoList): Promise<void> {
    return this.toDoListDAO.update(toDoList);
  }

  public save(toDoList: ToDoList): Promise<number> {
    return this.toDoListDAO.save(toDoList);
  }

  public async createToDoList(
    toDoList: ToDoList,
    attivita: Attivita[]
  ): Promise<void> {
    const idToDoList = await this.toDoListDAO.save(toDoList);
    await Promise.all(
      attivita.map(async (a) => {
        a.toDoList = idToDoList;
        await this.toDoListDAO.saveAttivita(a);
      })
    );
  }
}
