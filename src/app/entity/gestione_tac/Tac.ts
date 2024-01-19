/**
 * Represents a Tac entity.
 */
export class Tac {
  /**
   * The unique identifier of the Tac.
   */
  private _id: number | undefined;

  /**
   * The stage of the Tac.
   */
  private _stadio: string;

  /**
   * The identifier of the doctor associated with the Tac.
   */
  private _medico: number;

  /**
   * The name of the patient associated with the Tac.
   */
  private _paziente: string;

  /**
   * The attachment of the Tac.
   */
  private _allegato: string;

  /**
   * Creates a new instance of Tac.
   * @param stadio - The stage of the Tac.
   * @param medico - The identifier of the doctor associated with the Tac.
   * @param paziente - The name of the patient associated with the Tac.
   * @param allegato - The attachment of the Tac.
   * @param id - The unique identifier of the Tac.
   */
  constructor(
    stadio: string,
    medico: number,
    paziente: string,
    allegato: string,
    id?: number
  ) {
    this._id = id;
    this._stadio = stadio;
    this._allegato = allegato;
    this._medico = medico;
    this._paziente = paziente;
  }

  /**
   * Gets the unique identifier of the Tac.
   * @returns The unique identifier of the Tac.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the unique identifier of the Tac.
   * @param id - The unique identifier of the Tac.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the stage of the Tac.
   * @returns The stage of the Tac.
   */
  public get stadio(): string {
    return this._stadio;
  }

  /**
   * Sets the stage of the Tac.
   * @param stadio - The stage of the Tac.
   */
  public set stadio(stadio: string) {
    this._stadio = stadio;
  }

  /**
   * Gets the attachment of the Tac.
   * @returns The attachment of the Tac.
   */
  public get allegato(): string {
    return this._allegato;
  }

  /**
   * Sets the attachment of the Tac.
   * @param allegato - The attachment of the Tac.
   */
  public set allegato(allegato: string) {
    this._allegato = allegato;
  }

  /**
   * Gets the identifier of the doctor associated with the Tac.
   * @returns The identifier of the doctor associated with the Tac.
   */
  public get medico(): number {
    return this._medico;
  }

  /**
   * Sets the identifier of the doctor associated with the Tac.
   * @param medico - The identifier of the doctor associated with the Tac.
   */
  public set medico(medico: number) {
    this._medico = medico;
  }

  /**
   * Gets the name of the patient associated with the Tac.
   * @returns The name of the patient associated with the Tac.
   */
  public get paziente(): string {
    return this._paziente;
  }

  /**
   * Sets the name of the patient associated with the Tac.
   * @param paziente - The name of the patient associated with the Tac.
   */
  public set paziente(paziente: string) {
    this._paziente = paziente;
  }
}
