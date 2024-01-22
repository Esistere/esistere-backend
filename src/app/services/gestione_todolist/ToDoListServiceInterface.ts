/**
 * Interface for the ToDoListService.
 */
import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';

export interface ToDoListServiceInterface {
  /**
   * Retrieves all ToDoLists.
   * @returns A promise that resolves to an array of ToDoLists.
   */
  getAll(): Promise<ToDoList[]>;

  /**
   * Retrieves ToDoLists by medico.
   * @param medico - The ID of the medico.
   * @returns A promise that resolves to an array of ToDoLists.
   */
  getByMed(medico: number): Promise<ToDoList[]>;

  /**
   * Retrieves ToDoLists by paziente.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to an array of ToDoLists.
   */
  getByPaziente(paziente: string): Promise<ToDoList[]>;

  /**
   * Retrieves ToDoLists by medico and paziente.
   * @param medico - The ID of the medico.
   * @param paziente - The ID of the paziente.
   * @returns A promise that resolves to an array of ToDoLists.
   */
  getByMedAndPaz(medico: number, paziente: string): Promise<ToDoList[]>;

  /**
   * Updates a ToDoList.
   * @param toDoList - The ToDoList to update.
   * @returns A promise that resolves when the update is complete.
   */
  update(toDoList: ToDoList): Promise<void>;

  /**
   * Saves a new ToDoList.
   * @param toDoList - The ToDoList to save.
   * @returns A promise that resolves to the ID of the saved ToDoList.
   */
  save(toDoList: ToDoList): Promise<number>;

  /**
   * Retrieves a ToDoList by ID.
   * @param id - The ID of the ToDoList.
   * @returns A promise that resolves to the ToDoList.
   */
  get(id: number): Promise<ToDoList>;

  /**
   * Retrieves all Attivita associated with a ToDoList.
   * @param toDoList - The ID of the ToDoList.
   * @returns A promise that resolves to an array of Attivita.
   */
  getAllAttivitaByToDoList(toDoList: number): Promise<Attivita[]>;

  /**
   * Retrieves an Attivita by ID.
   * @param id - The ID of the Attivita.
   * @returns A promise that resolves to the Attivita.
   */
  getAttivita(id: number): Promise<Attivita>;

  /**
   * Updates an Attivita.
   * @param attivita - The Attivita to update.
   * @returns A promise that resolves when the update is complete.
   */
  updateAttivita(attivita: Attivita): Promise<void>;

  /**
   * Saves a new Attivita.
   * @param attivita - The Attivita to save.
   * @returns A promise that resolves to the ID of the saved Attivita.
   */
  saveAttivita(attivita: Attivita): Promise<number>;

  /**
   * Creates a new ToDoList with associated Attivita.
   * @param toDoList - The ToDoList to create.
   * @param attivita - The array of Attivita to associate with the ToDoList.
   * @returns A promise that resolves when the creation is complete.
   */
  createToDoList(toDoList: ToDoList, attivita: Attivita[]): Promise<void>;
}
