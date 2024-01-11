import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';

export interface ToDoListServiceInterface {
  getAll(): Promise<ToDoList[]>;
  getByMed(med: number): Promise<ToDoList[]>;
  getByPaziente(paz: number): Promise<ToDoList[]>;
  getByMedAndPaz(med: number, paz: number): Promise<ToDoList[]>;
  update(toDoList: ToDoList): Promise<void>;
  save(toDoList: ToDoList): Promise<number>;

  get(id: number): Promise<ToDoList>;
  getAllAttivitaByToDoList(toDoList: number): Promise<Attivita[]>;
  getAttivita(id: number): Promise<Attivita>;
  updateAttivita(attivita: Attivita): Promise<void>;
  saveAttivita(attivita: Attivita): Promise<number>;

  createToDoList(toDoList: ToDoList, attivita: Attivita[]): Promise<void>;
  
}
