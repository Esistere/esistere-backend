/**
 * Represents a Filastrocca object.
 */
export class Filastrocca {
  /**
   * The unique identifier of the Filastrocca.
   */
  private _id?: number | undefined;

  /**
   * The caregiver familiare associated with the Filastrocca.
   */
  private _caregiverFamiliare: number;

  /**
   * The title of the Filastrocca.
   */
  private _titolo: string;

  /**
   * The text of the Filastrocca.
   */
  private _testo: string;

  /**
   * The author of the Filastrocca.
   */
  private _autore: string;

  /**
   * Creates a new Filastrocca instance.
   * @param titolo - The title of the Filastrocca.
   * @param testo - The text of the Filastrocca.
   * @param autore - The author of the Filastrocca.
   * @param caregiverFamiliare - The caregiver familiare associated with the Filastrocca.
   * @param id - The unique identifier of the Filastrocca.
   */
  constructor(
    titolo: string,
    testo: string,
    autore: string,
    caregiverFamiliare: number,
    id?: number
  ) {
    this._caregiverFamiliare = caregiverFamiliare;
    this._titolo = titolo;
    this._testo = testo;
    this._autore = autore;
    this._id = id;
  }

  /**
   * Gets the unique identifier of the Filastrocca.
   * @returns The unique identifier of the Filastrocca.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the unique identifier of the Filastrocca.
   * @param id - The unique identifier of the Filastrocca.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the caregiver familiare associated with the Filastrocca.
   * @returns The caregiver familiare associated with the Filastrocca.
   */
  public get caregiverFamiliare(): number {
    return this._caregiverFamiliare;
  }

  /**
   * Sets the caregiver familiare associated with the Filastrocca.
   * @param caregiverFamiliare - The caregiver familiare associated with the Filastrocca.
   */
  public set caregiverFamiliare(caregiverFamiliare: number) {
    this._caregiverFamiliare = caregiverFamiliare;
  }

  /**
   * Gets the title of the Filastrocca.
   * @returns The title of the Filastrocca.
   */
  public get titolo(): string {
    return this._titolo;
  }

  /**
   * Sets the title of the Filastrocca.
   * @param titolo - The title of the Filastrocca.
   */
  public set titolo(titolo: string) {
    this._titolo = titolo;
  }

  /**
   * Gets the text of the Filastrocca.
   * @returns The text of the Filastrocca.
   */
  public get testo(): string {
    return this._testo;
  }

  /**
   * Sets the text of the Filastrocca.
   * @param testo - The text of the Filastrocca.
   */
  public set testo(testo: string) {
    this._testo = testo;
  }

  /**
   * Gets the author of the Filastrocca.
   * @returns The author of the Filastrocca.
   */
  public get autore(): string {
    return this._autore;
  }

  /**
   * Sets the author of the Filastrocca.
   * @param autore - The author of the Filastrocca.
   */
  public set autore(autore: string) {
    this._autore = autore;
  }
}
