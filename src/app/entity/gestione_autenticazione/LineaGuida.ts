/**
 * Represents a LineaGuida entity.
 */
export class LineaGuida {
  /**
   * Represents a LineaGuida id.
   */
  private _id?: number | undefined;

  /**
   * Represents the lineeGuida value.
   */
  private _lineeGuida: string;

  /**
   * Represents the medico id value.
   */
  private _medico: number;

  /**
   * Creates a new instance of LineaGuida.
   * @param lineeGuida - The lineeGuida value.
   * @param medico - The medico value.
   * @param id - The optional id value.
   */
  constructor(lineeGuida: string, medico: number, id?: number) {
    this._lineeGuida = lineeGuida;
    this._medico = medico;
    this._id = id;
  }

  /**
   * Gets the id value.
   * @returns The id value.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the id value.
   * @param id - The id value.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the lineeGuida value.
   * @returns The lineeGuida value.
   */
  public get lineeGuida(): string {
    return this._lineeGuida;
  }

  /**
   * Sets the lineeGuida value.
   * @param lineeGuida - The lineeGuida value.
   */
  public set lineeGuida(lineeGuida: string) {
    this._lineeGuida = lineeGuida;
  }

  /**
   * Gets the medico value.
   * @returns The medico value.
   */
  public get medico(): number {
    return this._medico;
  }

  /**
   * Sets the medico value.
   * @param medico - The medico value.
   */
  public set medico(medico: number) {
    this._medico = medico;
  }
}
