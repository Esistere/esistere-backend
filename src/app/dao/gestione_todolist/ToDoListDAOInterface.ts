import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';
import { Attivita } from 'app/entity/gestione_todolist/Attivita';

export interface ToDoListDAOInterface {
  getAll(): Promise<ToDoList[]>;
  get(id: number): Promise<ToDoList>;
  getByMed(medico: number): Promise<ToDoList[]>;
  getByPaziente(paziente: string): Promise<ToDoList[]>;
  getByMedAndPaz(medico: number, paziente: string): Promise<ToDoList[]>;
  update(toDoList: ToDoList): Promise<void>;
  save(toDoList: ToDoList): Promise<number>;
  
  getAllAttivitaByToDoList(toDoList: number): Promise<Attivita[]>;
  getAttivita(id: number): Promise<Attivita>;
  updateAttivita(attivita: Attivita): Promise<void>;
  saveAttivita(attivita: Attivita): Promise<number>;
}
