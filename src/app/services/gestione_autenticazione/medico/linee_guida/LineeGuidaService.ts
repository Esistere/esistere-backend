import { LineaGuida } from 'app/entity/gestione_autenticazione/LineaGuida';
import { LineeGuidaServiceInterface } from 'app/services/gestione_autenticazione/medico/linee_guida/LineeGuidaServiceInterface';
import { LineeGuidaDAO } from 'app/dao/gestione_autenticazione/medico/linee_guida/LineeGuidaDAO';
import { LineeGuidaDAOInterface } from 'app/dao/gestione_autenticazione/medico/linee_guida/LineeGuidaDAOInterface';

export class LineeGuidaService implements LineeGuidaServiceInterface {
  private lineeGuidaDAO: LineeGuidaDAOInterface;

  constructor() {
    this.lineeGuidaDAO = new LineeGuidaDAO();
  }

  public getAll(): Promise<LineaGuida[]> {
    return this.lineeGuidaDAO.getAll();
  }

  public get(id: number): Promise<LineaGuida> {
    return this.lineeGuidaDAO.get(id);
  }

  public getByMed(medico: number): Promise<LineaGuida> {
    return this.lineeGuidaDAO.getByMed(medico);
  }

  public save(lineeGuida: LineaGuida): void {
    this.lineeGuidaDAO.save(lineeGuida);
  }

  public update(lineeGuida: LineaGuida): void {
    this.lineeGuidaDAO.update(lineeGuida);
  }
}
