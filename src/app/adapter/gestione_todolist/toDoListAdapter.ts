import { Attivita } from 'app/entity/gestione_todolist/Attivita';

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
