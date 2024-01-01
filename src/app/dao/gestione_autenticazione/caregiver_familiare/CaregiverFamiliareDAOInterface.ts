import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';

export interface CaregiverFamiliareDAOInterface {
  getAll(): Promise<CaregiverFamiliare[]>;
  get(codice_identificativo: number): Promise<CaregiverFamiliare>;
  save(caregiver_familiare: CaregiverFamiliare): Promise<number>;
  update(caregiver_familiare: CaregiverFamiliare): Promise<void>;
}
