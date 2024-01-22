/**
 * Service class for managing ToDoList entities.
 */
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

  /**
   * Retrieves all ToDoList entities.
   * @returns A promise that resolves to an array of ToDoList entities.
   */
  public getAll(): Promise<ToDoList[]> {
    return this.toDoListDAO.getAll();
  }

  /**
   * Retrieves ToDoList entities by medico.
   * @param medico - The medico identifier.
   * @returns A promise that resolves to an array of ToDoList entities.
   */
  public getByMed(medico: number): Promise<ToDoList[]> {
    return this.toDoListDAO.getByMed(medico);
  }

  /**
   * Retrieves ToDoList entities by paziente.
   * @param paziente - The paziente identifier.
   * @returns A promise that resolves to an array of ToDoList entities.
   */
  public getByPaziente(paziente: string): Promise<ToDoList[]> {
    return this.toDoListDAO.getByPaziente(paziente);
  }

  /**
   * Retrieves ToDoList entities by medico and paziente.
   * @param medico - The medico identifier.
   * @param paziente - The paziente identifier.
   * @returns A promise that resolves to an array of ToDoList entities.
   */
  public getByMedAndPaz(medico: number, paziente: string): Promise<ToDoList[]> {
    return this.toDoListDAO.getByMedAndPaz(medico, paziente);
  }

  /**
   * Retrieves a ToDoList entity by id.
   * @param id - The ToDoList identifier.
   * @returns A promise that resolves to a ToDoList entity.
   */
  public get(id: number): Promise<ToDoList> {
    return this.toDoListDAO.get(id);
  }

  /**
   * Retrieves all Attivita entities by ToDoList.
   * @param toDoList - The ToDoList identifier.
   * @returns A promise that resolves to an array of Attivita entities.
   */
  public getAllAttivitaByToDoList(toDoList: number): Promise<Attivita[]> {
    return this.toDoListDAO.getAllAttivitaByToDoList(toDoList);
  }

  /**
   * Retrieves an Attivita entity by id.
   * @param id - The Attivita identifier.
   * @returns A promise that resolves to an Attivita entity.
   */
  public getAttivita(id: number): Promise<Attivita> {
    return this.toDoListDAO.getAttivita(id);
  }

  /**
   * Updates an Attivita entity.
   * @param attivita - The Attivita entity to update.
   * @returns A promise that resolves when the update is complete.
   */
  public updateAttivita(attivita: Attivita): Promise<void> {
    return this.toDoListDAO.updateAttivita(attivita);
  }

  /**
   * Saves an Attivita entity.
   * @param attivita - The Attivita entity to save.
   * @returns A promise that resolves to the saved Attivita's identifier.
   */
  public saveAttivita(attivita: Attivita): Promise<number> {
    return this.toDoListDAO.saveAttivita(attivita);
  }

  /**
   * Updates a ToDoList entity.
   * @param toDoList - The ToDoList entity to update.
   * @returns A promise that resolves when the update is complete.
   */
  public update(toDoList: ToDoList): Promise<void> {
    return this.toDoListDAO.update(toDoList);
  }

  /**
   * Saves a ToDoList entity.
   * @param toDoList - The ToDoList entity to save.
   * @returns A promise that resolves to the saved ToDoList's identifier.
   */
  public save(toDoList: ToDoList): Promise<number> {
    return this.toDoListDAO.save(toDoList);
  }

  /**
   * Creates a new ToDoList entity with associated Attivita entities.
   * @param toDoList - The ToDoList entity to create.
   * @param attivita - The array of Attivita entities to associate with the ToDoList.
   * @returns A promise that resolves when the creation is complete.
   */
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
