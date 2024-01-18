/**
 * Represents a response to a preliminary quiz question.
 */
export class RispostaQuizPreliminare {
  /**
   * The answer for the preliminary quiz.
   */
  private _risposta: string;

  /**
   * The patient's cf.
   */
  private _paziente: string;

  /**
   * The ID of the response.
   */
  private _id: number | undefined;

  /**
   * The ID of the preliminary question.
   */
  private _domandaPreliminare: number | undefined;

  /**
   * Creates an instance of RispostaQuizPreliminare.
   * @param risposta - The answer to the quiz question.
   * @param paziente - The patient's cf.
   * @param domandaPreliminare - The ID of the preliminary question.
   * @param id - The ID of the response.
   */
  constructor(
    risposta: string,
    paziente: string,
    domandaPreliminare?: number,
    id?: number
  ) {
    this._id = id;
    this._risposta = risposta;
    this._domandaPreliminare = domandaPreliminare;
    this._paziente = paziente;
  }

  /**
   * Gets the ID of the response.
   * @returns The ID of the response.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the ID of the response.
   * @param id - The ID of the response.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the answer to the quiz question.
   * @returns The answer to the quiz question.
   */
  public get risposta(): string {
    return this._risposta;
  }

  /**
   * Sets the answer to the quiz question.
   * @param risposta - The answer to the quiz question.
   */
  public set risposta(risposta: string) {
    this._risposta = risposta;
  }

  /**
   * Gets the ID of the preliminary question.
   * @returns The ID of the preliminary question.
   */
  public get domandaPreliminare(): number | undefined {
    return this._domandaPreliminare;
  }

  /**
   * Sets the ID of the preliminary question.
   * @param domandaPreliminare - The ID of the preliminary question.
   */
  public set domandaPreliminare(domandaPreliminare: number | undefined) {
    this._domandaPreliminare = domandaPreliminare;
  }

  /**
   * Gets the patient's cf.
   * @returns The patient's cf.
   */
  public get paziente(): string {
    return this._paziente;
  }

  /**
   * Sets the patient's cf.
   * @param paziente - The patient's cf.
   */
  public set paziente(paziente: string) {
    this._paziente = paziente;
  }
}
