/**
 * Service class for managing Caregiver Familiare entities.
 */
import { CaregiverFamiliareDAO } from 'app/dao/gestione_autenticazione/caregiver_familiare/CaregiverFamiliareDAO';
import { CaregiverFamiliare } from 'app/entity/gestione_autenticazione/CaregiverFamiliare';
import { CaregiverFamiliareServiceInterface } from './CaregiverFamiliareServiceInterface';

/* eslint-disable */


export class CaregiverFamiliareService implements CaregiverFamiliareServiceInterface {
  private caregiverFamiliareDAO: CaregiverFamiliareDAO;

  constructor() {
    this.caregiverFamiliareDAO = new CaregiverFamiliareDAO();
  }

  /**
   * Retrieves all Caregiver Familiare entities.
   * @returns A promise that resolves to an array of Caregiver Familiare entities.
   */
  public getAll(): Promise<CaregiverFamiliare[]> {
    return this.caregiverFamiliareDAO.getAll();
  }

  /**
   * Retrieves a Caregiver Familiare entity by its code.
   * @param codice - The code of the Caregiver Familiare entity.
   * @returns A promise that resolves to the Caregiver Familiare entity.
   */
  public get(codice: string | number): Promise<CaregiverFamiliare> {
    return this.caregiverFamiliareDAO.get(codice);
  }

  /**
   * Saves a Caregiver Familiare entity.
   * @param caregiverFamiliare - The Caregiver Familiare entity to be saved.
   * @returns A promise that resolves to the ID of the saved entity.
   */
  public save(caregiverFamiliare: CaregiverFamiliare): Promise<number> {
    return this.caregiverFamiliareDAO.save(caregiverFamiliare);
  }

  /**
   * Updates a Caregiver Familiare entity.
   * @param caregiverFamiliare - The Caregiver Familiare entity to be updated.
   */
  public update(caregiverFamiliare: CaregiverFamiliare): void {
    this.caregiverFamiliareDAO.update(caregiverFamiliare);
  }
}
