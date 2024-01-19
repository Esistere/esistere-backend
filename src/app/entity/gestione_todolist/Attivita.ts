/**
 * Represents an activity in a to-do list.
 */
export class Attivita {
  /**
   * The unique identifier of the activity.
   */
  private _id: number | undefined;

  /**
   * The identifier of the to-do list that the activity belongs to.
   */
  private _toDoList: number | undefined;

  /**
   * The text description of the activity.
   */
  private _testo: string;

  /**
   * Indicates whether the activity is completed or not.
   */
  private _completata: boolean;

  /**
   * The comment associated with the activity.
   */
  private _commento: string | undefined;

  /**
   * The rating given to the activity.
   */
  private _valutazione: number | undefined;

  /**
   * Creates a new instance of the Attivita class.
   * @param testo - The text description of the activity.
   * @param completata - Indicates whether the activity is completed or not.
   * @param commento - The comment associated with the activity.
   * @param valutazione - The rating given to the activity.
   * @param toDoList - The identifier of the to-do list that the activity belongs to.
   * @param id - The unique identifier of the activity.
   */
  constructor(
    testo: string,
    completata: boolean,
    commento?: string,
    valutazione?: number,
    toDoList?: number,
    id?: number
  ) {
    this._id = id;
    this._toDoList = toDoList;
    this._testo = testo;
    this._completata = completata;
    this._commento = commento;
    this._valutazione = valutazione;
  }

  /**
   * Gets the unique identifier of the activity.
   * @returns The unique identifier of the activity.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the unique identifier of the activity.
   * @param id - The unique identifier of the activity.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the identifier of the to-do list that the activity belongs to.
   * @returns The identifier of the to-do list that the activity belongs to.
   */
  public get toDoList(): number | undefined {
    return this._toDoList;
  }

  /**
   * Sets the identifier of the to-do list that the activity belongs to.
   * @param toDoList - The identifier of the to-do list that the activity belongs to.
   */
  public set toDoList(toDoList: number | undefined) {
    this._toDoList = toDoList;
  }

  /**
   * Gets the text description of the activity.
   * @returns The text description of the activity.
   */
  public get testo(): string {
    return this._testo;
  }

  /**
   * Sets the text description of the activity.
   * @param testo - The text description of the activity.
   */
  public set testo(testo: string) {
    this._testo = testo;
  }

  /**
   * Gets whether the activity is completed or not.
   * @returns Whether the activity is completed or not.
   */
  public get completata(): boolean {
    return this._completata;
  }

  /**
   * Sets whether the activity is completed or not.
   * @param completata - Whether the activity is completed or not.
   */
  public set completata(completata: boolean) {
    this._completata = completata;
  }

  /**
   * Gets the comment associated with the activity.
   * @returns The comment associated with the activity.
   */
  public get commento(): string | undefined {
    return this._commento;
  }

  /**
   * Sets the comment associated with the activity.
   * @param commento - The comment associated with the activity.
   */
  public set commento(commento: string | undefined) {
    this._commento = commento;
  }

  /**
   * Gets the rating given to the activity.
   * @returns The rating given to the activity.
   */
  public get valutazione(): number | undefined {
    return this._valutazione;
  }

  /**
   * Sets the rating given to the activity.
   * @param valutazione - The rating given to the activity.
   */
  public set valutazione(valutazione: number | undefined) {
    this._valutazione = valutazione;
  }
}
