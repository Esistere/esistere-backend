import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';

export interface ToDoListServiceInterface {
  getAll(): Promise<ToDoList[]>;
  getByMed(medico: number): Promise<ToDoList[]>;
  getByPaziente(paziente: string): Promise<ToDoList[]>;
  getByMedAndPaz(medico: number, paziente: string): Promise<ToDoList[]>;
  update(toDoList: ToDoList): Promise<void>;
  save(toDoList: ToDoList): Promise<number>;

  get(id: number): Promise<ToDoList>;
  getAllAttivitaByToDoList(toDoList: number): Promise<Attivita[]>;
  getAttivita(id: number): Promise<Attivita>;
  updateAttivita(attivita: Attivita): Promise<void>;
  saveAttivita(attivita: Attivita): Promise<number>;

  createToDoList(toDoList: ToDoList, attivita: Attivita[]): Promise<void>;
  
}
