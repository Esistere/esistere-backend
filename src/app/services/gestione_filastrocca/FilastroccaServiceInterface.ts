import { Filastrocca } from 'app/entity/gestione_filastrocca/Filastrocca';

export interface FilastroccaServiceInterface {
  get(id: number): Promise<Filastrocca>;
  save(filastrocca: Filastrocca): void;
  update(filastrocca: Filastrocca): void;
  getByCaregiverFamiliare(caregiverFamiliare: number): Promise<Filastrocca[]>;
}
