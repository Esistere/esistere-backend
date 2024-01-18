/**
 * Represents a quiz question in the preliminary quiz.
 */
export class DomandaQuizPreliminare {
  /**
   * The unique identifier of the question.
   */
  private _id: number | undefined;

  /**
   * The text of the question.
   */
  private _domanda: string;

  /**
   * The ID of the preliminary quiz that this question belongs to.
   */
  private _quizPreliminare: number | undefined;

  /**
   * Creates a new instance of DomandaQuizPreliminare.
   * @param domanda - The text of the question.
   * @param quizPreliminare - The ID of the preliminary quiz that this question belongs to.
   * @param id - The unique identifier of the question.
   */
  constructor(domanda: string, quizPreliminare?: number, id?: number) {
    this._id = id;
    this._domanda = domanda;
    this._quizPreliminare = quizPreliminare;
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
   * @param id - The unique identifier of the question.
   */
  public set id(id: number | undefined) {
    this._id = id;
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
   * @param domanda - The text of the question.
   */
  public set domanda(domanda: string) {
    this._domanda = domanda;
  }

  /**
   * Gets the ID of the preliminary quiz that this question belongs to.
   * @returns The ID of the preliminary quiz.
   */
  public get quizPreliminare(): number | undefined {
    return this._quizPreliminare;
  }

  /**
   * Sets the ID of the preliminary quiz that this question belongs to.
   * @param quizPreliminare - The ID of the preliminary quiz.
   */
  public set quizPreliminare(quizPreliminare: number | undefined) {
    this._quizPreliminare = quizPreliminare;
  }
}
