import { Attivita } from 'app/entity/gestione_todolist/Attivita';

/**
 * Represents the response object for a to-do list.
 */
export interface ResponseObjectToDoList {
  toDoList: {
    num_attivita: number | undefined;
    completata: boolean | undefined;
    med: number | undefined;
    paziente: string;
    id: number | undefined;
  };
  attivita: Attivita[];
}
