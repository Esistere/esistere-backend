import { Filastrocca } from 'app/entity/gestione filastrocca/Filastrocca';

export interface FilastroccaServiceInterface {
  get(id: number): Promise<Filastrocca>;
  save(filastrocca: Filastrocca): void;
  update(filastrocca: Filastrocca): void;
  getByCargiverFamiliare(caregiverFamiliare: number): Promise<Filastrocca[]>;
}
