
/**
 * Represents a media object.
 */
export class Media {
  /**
   * The ID of the media.
   */
  private _id?: number | undefined;

  /**
   * The ID of the story associated with the media.
   */
  private _storia: number;

  /**
   * The attachment of the media.
   */
  private _allegato: string;

  /**
   * The description of the media.
   */
  private _descrizione: string;

  /**
   * The type of the media.
   */
  private _tipo: number;

  /**
   * Creates a new Media object.
   * @param storia - The ID of the story associated with the media.
   * @param allegato - The attachment of the media.
   * @param descrizione - The description of the media.
   * @param tipo - The type of the media.
   * @param id - The ID of the media (optional).
   */
  constructor(
    storia: number,
    allegato: string,
    descrizione: string,
    tipo: number,
    id?: number
  ) {
    this._storia = storia;
    this._allegato = allegato;
    this._descrizione = descrizione;
    this._tipo = tipo;
    this._id = id;
  }

  /**
   * Gets the ID of the media.
   * @returns The ID of the media.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the ID of the media.
   * @param id - The ID of the media.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the ID of the story associated with the media.
   * @returns The ID of the story.
   */
  public get storia(): number {
    return this._storia;
  }

  /**
   * Sets the ID of the story associated with the media.
   * @param storia - The ID of the story.
   */
  public set storia(storia: number) {
    this._storia = storia;
  }

  /**
   * Gets the attachment of the media.
   * @returns The attachment of the media.
   */
  public get allegato(): string {
    return this._allegato;
  }

  /**
   * Sets the attachment of the media.
   * @param allegato - The attachment of the media.
   */
  public set allegato(allegato: string) {
    this._allegato = allegato;
  }

  /**
   * Gets the description of the media.
   * @returns The description of the media.
   */
  public get descrizione(): string {
    return this._descrizione;
  }

  /**
   * Sets the description of the media.
   * @param descrizione - The description of the media.
   */
  public set descrizione(descrizione: string) {
    this._descrizione = descrizione;
  }

  /**
   * Gets the type of the media.
   * @returns The type of the media.
   */
  public get tipo(): number {
    return this._tipo;
  }

  /**
   * Sets the type of the media.
   * @param tipo - The type of the media.
   */
  public set tipo(tipo: number) {
    this._tipo = tipo;
  }
}
