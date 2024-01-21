import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';
import { Medico } from 'app/entity/gestione_autenticazione/Medico';
import { Paziente } from 'app/entity/gestione_autenticazione/Paziente';

export interface PazienteServiceInterface {
  getAll(): Promise<Paziente[]>;
  get(codice_fiscale: string): Promise<Paziente>;
  save(paziente: Paziente): void;
  update(paziente: Paziente): void;
  getCgFamByPaziente(id: number): Promise<CaregiverFamiliare>;
  getMedByPaziente(id: number): Promise<Medico>;
  getPazienteByMed(med: number): Promise<Paziente>;
  getPazienteByCgFam(cg_fam: number): Promise<Paziente>;
}
