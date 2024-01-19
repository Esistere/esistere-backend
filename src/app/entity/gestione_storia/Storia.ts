/**
 * Represents a Storia object.
 */
export class Storia {
  /**
   * The unique identifier of the Storia.
   */
  private _id?: number | undefined;

  /**
   * The cgFam value of the Storia.
   */
  private _cgFam: number;

  /**
   * The testo value of the Storia.
   */
  private _testo: string;

  /**
   * Creates a new Storia object.
   * @param cgFam - The cgFam value of the Storia.
   * @param testo - The testo value of the Storia.
   * @param id - The optional identifier of the Storia.
   */
  constructor(cgFam: number, testo: string, id?: number) {
    this._cgFam = cgFam;
    this._testo = testo;
    this._id = id;
  }

  /**
   * Gets the identifier of the Storia.
   * @returns The identifier of the Storia.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the identifier of the Storia.
   * @param id - The identifier of the Storia.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the cgFam value of the Storia.
   * @returns The cgFam value of the Storia.
   */
  public get cgFam(): number {
    return this._cgFam;
  }

  /**
   * Sets the cgFam value of the Storia.
   * @param cgFam - The cgFam value of the Storia.
   */
  public set cgFam(cgFam: number) {
    this._cgFam = cgFam;
  }

  /**
   * Gets the testo value of the Storia.
   * @returns The testo value of the Storia.
   */
  public get testo(): string {
    return this._testo;
  }

  /**
   * Sets the testo value of the Storia.
   * @param testo - The testo value of the Storia.
   */
  public set testo(testo: string) {
    this._testo = testo;
  }
}
