/**
 * Service class for managing LineeGuida entities.
 */
import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';
import { LineeGuidaServiceInterface } from 'app/services/gestione_autenticazione/medico/linee_guida/LineeGuidaServiceInterface';
import { LineeGuidaDAO } from 'app/dao/gestione_autenticazione/medico/linee_guida/LineeGuidaDAO';
import { LineeGuidaDAOInterface } from 'app/dao/gestione_autenticazione/medico/linee_guida/LineeGuidaDAOInterface';

export class LineeGuidaService implements LineeGuidaServiceInterface {
  private lineeGuidaDAO: LineeGuidaDAOInterface;

  constructor() {
    this.lineeGuidaDAO = new LineeGuidaDAO();
  }

  /**
   * Retrieves all LineaGuida entities.
   * @returns A promise that resolves to an array of LineaGuida objects.
   */
  public getAll(): Promise<LineaGuida[]> {
    return this.lineeGuidaDAO.getAll();
  }

  /**
   * Retrieves a LineaGuida entity by its ID.
   * @param id - The ID of the LineaGuida entity.
   * @returns A promise that resolves to the LineaGuida object.
   */
  public get(id: number): Promise<LineaGuida> {
    return this.lineeGuidaDAO.get(id);
  }

  /**
   * Retrieves a LineaGuida entity by the ID of the associated Medico.
   * @param medico - The ID of the associated Medico.
   * @returns A promise that resolves to the LineaGuida object.
   */
  public getByMed(medico: number): Promise<LineaGuida> {
    return this.lineeGuidaDAO.getByMed(medico);
  }

  /**
   * Saves a LineaGuida entity.
   * @param lineeGuida - The LineaGuida object to be saved.
   */
  public save(lineeGuida: LineaGuida): void {
    this.lineeGuidaDAO.save(lineeGuida);
  }

  /**
   * Updates a LineaGuida entity.
   * @param lineeGuida - The LineaGuida object to be updated.
   */
  public update(lineeGuida: LineaGuida): void {
    this.lineeGuidaDAO.update(lineeGuida);
  }
}
