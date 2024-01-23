/**
 * Service class for managing TAC (Tomography) data.
 */
import { TacDAO } from 'app/dao/gestione_tac/TacDAO';
import { TacDAOInterface } from 'app/dao/gestione_tac/TacDAOInterface';
import { TacServiceInterface } from './TacServiceInterface';
import { Tac } from 'app/entity/gestione_tac/Tac';

export class TacService implements TacServiceInterface {
  private tacDAO: TacDAOInterface;

  constructor() {
    this.tacDAO = new TacDAO();
  }

  /**
   * Retrieves all TAC records.
   * @returns A promise that resolves to an array of TAC objects.
   */
  getAll(): Promise<Tac[]> {
    return this.tacDAO.getAll();
  }

  /**
   * Retrieves a TAC record by its ID.
   * @param id - The ID of the TAC record.
   * @returns A promise that resolves to the TAC object.
   */
  get(id: number): Promise<Tac> {
    return this.tacDAO.get(id);
  }

  /**
   * Retrieves all TAC records associated with a specific medical examination.
   * @param med - The ID of the medical examination.
   * @returns A promise that resolves to an array of TAC objects.
   */
  getByMed(med: number): Promise<Tac[]> {
    return this.tacDAO.getByMed(med);
  }

  /**
   * Retrieves all TAC records associated with a specific patient.
   * @param paz - The ID of the patient.
   * @returns A promise that resolves to an array of TAC objects.
   */
  getByPaziente(paz: string): Promise<Tac[]> {
    return this.tacDAO.getByPaziente(paz);
  }

  /**
   * Saves a new TAC record.
   * @param tac - The TAC object to be saved.
   * @returns A promise that resolves when the TAC record is saved.
   */
  save(tac: Tac): Promise<void> {
    return this.tacDAO.save(tac);
  }

  /**
   * Updates an existing TAC record.
   * @param tac - The updated TAC object.
   * @returns A promise that resolves when the TAC record is updated.
   */
  update(tac: Tac): Promise<void> {
    return this.tacDAO.update(tac);
  }
}
