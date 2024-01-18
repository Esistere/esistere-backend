/**
 * Represents a question in a training quiz.
 */
export class DomandaQuizAllenamento {
  /**
   * The unique identifier of the question.
   */
  private _id: number | undefined;

  /**
   * The identifier of the training quiz that this question belongs to.
   */
  private _quizAllenamento: number | undefined;

  /**
   * The text of the question.
   */
  private _domanda: string;

  /**
   * Indicates whether the question is correct or not.
   */
  private _corretta: boolean | undefined;

  /**
   * Creates a new instance of the DomandaQuizAllenamento class.
   * @param domanda The text of the question.
   * @param quizAllenamento The identifier of the training quiz that this question belongs to.
   * @param corretta Indicates whether the question is correct or not.
   * @param id The unique identifier of the question.
   */
  constructor(
    domanda: string,
    quizAllenamento?: number,
    corretta?: boolean,
    id?: number
  ) {
    this._quizAllenamento = quizAllenamento;
    this._domanda = domanda;
    this._corretta = corretta;
    this._id = id;
  }

  /**
   * Gets the unique identifier of the question.
   * @returns The unique identifier of the question.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the unique identifier of the question.
   * @param id The unique identifier of the question.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the identifier of the training quiz that this question belongs to.
   * @returns The identifier of the training quiz that this question belongs to.
   */
  public get quizAllenamento(): number | undefined {
    return this._quizAllenamento;
  }

  /**
   * Sets the identifier of the training quiz that this question belongs to.
   * @param quizAllenamento The identifier of the training quiz that this question belongs to.
   */
  public set quizAllenamento(quizAllenamento: number | undefined) {
    this._quizAllenamento = quizAllenamento;
  }

  /**
   * Gets the text of the question.
   * @returns The text of the question.
   */
  public get domanda(): string {
    return this._domanda;
  }

  /**
   * Sets the text of the question.
   * @param domanda The text of the question.
   */
  public set domanda(domanda: string) {
    this._domanda = domanda;
  }

  /**
   * Gets whether the question is correct or not.
   * @returns Whether the question is correct or not.
   */
  public get corretta(): boolean | undefined {
    return this._corretta;
  }

  /**
   * Sets whether the question is correct or not.
   * @param corretta Indicates whether the question is correct or not.
   */
  public set corretta(corretta: boolean | undefined) {
    this._corretta = corretta;
  }
}
