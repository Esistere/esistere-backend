import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';

export interface ToDoListServiceInterface {
  getAll(): Promise<ToDoList[]>;
  getByMed(med: number): Promise<ToDoList[]>;
  getByPaziente(paz: number): Promise<ToDoList[]>;
  get(id: number): Promise<ToDoList>;
  getAllAttivitaByList(toDoList: ToDoList): Promise<Attivita[]>;
  getAttivita(id: number): Promise<Attivita>;
  updateAttivita(attivita: Attivita): Promise<void>;
  saveAttivita(attivita: Attivita): Promise<void>;
  update(toDoList: ToDoList): Promise<void>;
  save(toDoList: ToDoList): Promise<void>;
}
