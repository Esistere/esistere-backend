/**
 * Represents a ToDoList.
 */
export class ToDoList {
  /**
   * The unique identifier of the ToDoList.
   */
  private _id: number | undefined;

  /**
   * The number of activities in the ToDoList.
   */
  private _numAttivita: number;

  /**
   * Indicates whether the ToDoList is completed or not.
   */
  private _completata: boolean;

  /**
   * The identifier of the medical professional associated with the ToDoList.
   */
  private _med: number;

  /**
   * The name of the patient associated with the ToDoList.
   */
  private _paziente: string;

  /**
   * Creates a new instance of ToDoList.
   * @param numAttivita - The number of activities in the ToDoList.
   * @param completata - Indicates whether the ToDoList is completed or not.
   * @param med - The identifier of the medical professional associated with the ToDoList.
   * @param paziente - The name of the patient associated with the ToDoList.
   * @param id - The unique identifier of the ToDoList. (optional)
   */
  constructor(
    numAttivita: number,
    completata: boolean,
    med: number,
    paziente: string,
    id?: number
  ) {
    this._id = id;
    this._numAttivita = numAttivita;
    this._completata = completata;
    this._med = med;
    this._paziente = paziente;
  }

  /**
   * Gets the unique identifier of the ToDoList.
   * @returns The unique identifier of the ToDoList.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the unique identifier of the ToDoList.
   * @param id - The unique identifier of the ToDoList.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the number of activities in the ToDoList.
   * @returns The number of activities in the ToDoList.
   */
  public get numAttivita(): number {
    return this._numAttivita;
  }

  /**
   * Sets the number of activities in the ToDoList.
   * @param numAttivita - The number of activities in the ToDoList.
   */
  public set numAttivita(numAttivita: number) {
    this._numAttivita = numAttivita;
  }

  /**
   * Gets whether the ToDoList is completed or not.
   * @returns Whether the ToDoList is completed or not.
   */
  public get completata(): boolean {
    return this._completata;
  }

  /**
   * Sets whether the ToDoList is completed or not.
   * @param completata - Whether the ToDoList is completed or not.
   */
  public set completata(completata: boolean) {
    this._completata = completata;
  }

  /**
   * Gets the identifier of the medical professional associated with the ToDoList.
   * @returns The identifier of the medical professional associated with the ToDoList.
   */
  public get med(): number {
    return this._med;
  }

  /**
   * Sets the identifier of the medical professional associated with the ToDoList.
   * @param med - The identifier of the medical professional associated with the ToDoList.
   */
  public set med(med: number) {
    this._med = med;
  }

  /**
   * Gets the name of the patient associated with the ToDoList.
   * @returns The name of the patient associated with the ToDoList.
   */
  public get paziente(): string {
    return this._paziente;
  }

  /**
   * Sets the name of the patient associated with the ToDoList.
   * @param paziente - The name of the patient associated with the ToDoList.
   */
  public set paziente(paziente: string) {
    this._paziente = paziente;
  }
}
