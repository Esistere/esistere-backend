import { Filastrocca } from 'app/entity/gestione filastrocca/Filastrocca';

export interface FilastroccaDAOInterface {
  get(id: number): Promise<Filastrocca>;
  save(filastrocca: Filastrocca): Promise<void>;
  update(filastrocca: Filastrocca): Promise<void>;
  getByCaregiverFamiliare(caregiverFamiliare: number): Promise<Filastrocca[]>;
}
