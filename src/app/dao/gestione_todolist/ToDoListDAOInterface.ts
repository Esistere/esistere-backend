import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';

/**
 * Represents the interface for a ToDoList Data Access Object (DAO).
 * This interface defines methods for CRUD operations on ToDoList entities.
 */
export interface ToDoListDAOInterface {
  /**
   * Retrieves all ToDoLists.
   * @returns A promise that resolves to an array of ToDoList objects.
   */
  getAll(): Promise<ToDoList[]>;

  /**
   * Retrieves a ToDoList by its ID.
   * @param id - The ID of the ToDoList to retrieve.
   * @returns A promise that resolves to the retrieved ToDoList object.
   */
  get(id: number): Promise<ToDoList>;

  /**
   * Retrieves all ToDoLists associated with a specific medico.
   * @param medico - The ID of the medico.
   * @returns A promise that resolves to an array of ToDoList objects.
   */
  getByMed(medico: number): Promise<ToDoList[]>;

  /**
   * Retrieves all ToDoLists associated with a specific paziente.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to an array of ToDoList objects.
   */
  getByPaziente(paziente: string): Promise<ToDoList[]>;

  /**
   * Retrieves all ToDoLists associated with a specific medico and paziente.
   * @param medico - The ID of the medico.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to an array of ToDoList objects.
   */
  getByMedAndPaz(medico: number, paziente: string): Promise<ToDoList[]>;

  /**
   * Updates a ToDoList.
   * @param toDoList - The ToDoList object to update.
   * @returns A promise that resolves when the update is complete.
   */
  update(toDoList: ToDoList): Promise<void>;

  /**
   * Saves a new ToDoList.
   * @param toDoList - The ToDoList object to save.
   * @returns A promise that resolves to the ID of the saved ToDoList.
   */
  save(toDoList: ToDoList): Promise<number>;

  /**
   * Retrieves all Attivita associated with a specific ToDoList.
   * @param toDoList - The ID of the ToDoList.
   * @returns A promise that resolves to an array of Attivita objects.
   */
  getAllAttivitaByToDoList(toDoList: number): Promise<Attivita[]>;

  /**
   * Retrieves an Attivita by its ID.
   * @param id - The ID of the Attivita to retrieve.
   * @returns A promise that resolves to the retrieved Attivita object.
   */
  getAttivita(id: number): Promise<Attivita>;

  /**
   * Updates an Attivita.
   * @param attivita - The Attivita object to update.
   * @returns A promise that resolves when the update is complete.
   */
  updateAttivita(attivita: Attivita): Promise<void>;

  /**
   * Saves a new Attivita.
   * @param attivita - The Attivita object to save.
   * @returns A promise that resolves to the ID of the saved Attivita.
   */
  saveAttivita(attivita: Attivita): Promise<number>;
}
