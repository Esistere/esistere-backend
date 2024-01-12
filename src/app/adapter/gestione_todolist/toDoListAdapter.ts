import { Attivita } from 'app/entity/gestione_todolist/Attivita';
import { ToDoList } from 'app/entity/gestione_todolist/ToDoList';

export interface ResponseObjectToDoList {
  toDoList: ToDoList;
  attivita: Attivita[];
}
