/**
 * Represents a quiz answer in a training session.
 */
export class RispostaQuizAllenamento {
  /**
   * The ID of the answer.
   */
  private _id: number | undefined;

  /**
   * The question number.
   */
  private _domanda: number | undefined;

  /**
   * The answer to the question.
   */
  private _risposta: string;

  /**
   * Indicates if the answer is correct.
   */
  private _corretta: boolean | undefined;

  /**
   * Indicates if the answer is selected.
   */
  private _selezionata: boolean | undefined;

  /**
   * Creates an instance of RispostaQuizAllenamento.
   * @param risposta - The answer to the question.
   * @param domanda - The question number.
   * @param corretta - Indicates if the answer is correct.
   * @param selezionata - Indicates if the answer is selected.
   * @param id - The ID of the answer.
   */
  constructor(
    risposta: string,
    domanda?: number,
    corretta?: boolean,
    selezionata?: boolean,
    id?: number
  ) {
    this._domanda = domanda;
    this._risposta = risposta;
    this._corretta = corretta;
    this._selezionata = selezionata;
    this._id = id;
  }

  /**
   * Gets the ID of the answer.
   * @returns The ID of the answer.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the ID of the answer.
   * @param id - The ID of the answer.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the question number.
   * @returns The question number.
   */
  public get domanda(): number | undefined {
    return this._domanda;
  }

  /**
   * Sets the question number.
   * @param domanda - The question number.
   */
  public set domanda(domanda: number | undefined) {
    this._domanda = domanda;
  }

  /**
   * Gets the answer to the question.
   * @returns The answer to the question.
   */
  public get risposta(): string {
    return this._risposta;
  }

  /**
   * Sets the answer to the question.
   * @param risposta - The answer to the question.
   */
  public set risposta(risposta: string) {
    this._risposta = risposta;
  }

  /**
   * Gets whether the answer is correct.
   * @returns Whether the answer is correct.
   */
  public get corretta(): boolean | undefined {
    return this._corretta;
  }

  /**
   * Sets whether the answer is correct.
   * @param corretta - Whether the answer is correct.
   */
  public set corretta(corretta: boolean | undefined) {
    this._corretta = corretta;
  }

  /**
   * Gets whether the answer is selected.
   * @returns Whether the answer is selected.
   */
  public get selezionata(): boolean | undefined {
    return this._selezionata;
  }

  /**
   * Sets whether the answer is selected.
   * @param selezionata - Whether the answer is selected.
   */
  public set selezionata(selezionata: boolean | undefined) {
    this._selezionata = selezionata;
  }
}
