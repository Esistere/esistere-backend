/**
 * Service class for managing Filastrocca entities.
 */
import { FilastroccaDAOInterface } from 'app/dao/gestione_filastrocca/FilastroccaDAOInterface';
import { FilastroccaServiceInterface } from './FilastroccaServiceInterface';
import { FilastroccaDAO } from 'app/dao/gestione_filastrocca/FilastroccaDAO';
import { Filastrocca } from 'app/entity/gestione_filastrocca/Filastrocca';


export class FilastroccaService implements FilastroccaServiceInterface {
  filastroccaDAO: FilastroccaDAOInterface;

  constructor() {
    this.filastroccaDAO = new FilastroccaDAO();
  }

  /**
   * Retrieves a Filastrocca entity by its ID.
   * @param id - The ID of the Filastrocca entity.
   * @returns A promise that resolves to the retrieved Filastrocca entity.
   */
  public get(id: number): Promise<Filastrocca> {
    return this.filastroccaDAO.get(id);
  }

  /**
   * Saves a Filastrocca entity.
   * @param filastrocca - The Filastrocca entity to be saved.
   */
  public save(filastrocca: Filastrocca): void {
    this.filastroccaDAO.save(filastrocca);
  }

  /**
   * Updates a Filastrocca entity.
   * @param filastrocca - The Filastrocca entity to be updated.
   */
  public update(filastrocca: Filastrocca): void {
    this.filastroccaDAO.update(filastrocca);
  }

  /**
   * Retrieves Filastrocca entities by caregiver familiare.
   * @param caregiverFamiliare - The ID of the caregiver familiare.
   * @returns A promise that resolves to an array of Filastrocca entities.
   */
  public getByCaregiverFamiliare(
    caregiverFamiliare: number
  ): Promise<Filastrocca[]> {
    return this.filastroccaDAO.getByCaregiverFamiliare(caregiverFamiliare);
  }
}
