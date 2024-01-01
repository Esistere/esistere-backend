import { CaregiverFamiliareDAO } from 'app/dao/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareDAO';
import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';
import { CaregiverFamiliareServiceInterface } from './CaregiverFamiliareServiceInterface';

/* eslint-disable */

export class CaregiverFamiliareService
  implements CaregiverFamiliareServiceInterface
{
  private caregiverFamiliareDAO: CaregiverFamiliareDAO;

  constructor() {
    this.caregiverFamiliareDAO = new CaregiverFamiliareDAO();
  }

  public getAll(): Promise<CaregiverFamiliare[]> {
    return this.caregiverFamiliareDAO.getAll();
  }

  public get(codice_identificativo: number): Promise<CaregiverFamiliare> {
    return this.caregiverFamiliareDAO.get(codice_identificativo);
  }

  public save(caregiverFamiliare: CaregiverFamiliare): Promise<number> {
    return this.caregiverFamiliareDAO.save(caregiverFamiliare);
  }

  public update(caregiverFamiliare: CaregiverFamiliare): void {
    this.caregiverFamiliareDAO.update(caregiverFamiliare);
  }
}
