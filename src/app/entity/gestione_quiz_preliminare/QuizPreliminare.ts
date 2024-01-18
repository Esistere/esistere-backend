/**
 * Represents a Quiz Preliminare.
 */
export class QuizPreliminare {
  /**
   * The unique identifier for the QuizPreliminare entity.
   */
  private _id: number | undefined;
  
  /**
   * The number of questions in the quiz.
   */
  private _numDomande: number;

  /**
   * Indicates whether the quiz is for a sage.
   */
  private _sage: boolean;

  /**
   * The ID of the doctor associated with the quiz.
   */
  private _medico: number;

  /**
   * The patient associated with the quiz.
   */
  private _paziente: string;

  /**
   * The total score of the quiz.
   */
  private _punteggioTot: number | undefined;

  /**
   * Creates an instance of QuizPreliminare.
   * @param numDomande - The number of questions in the quiz.
   * @param sage - Indicates if the quiz is for a sage.
   * @param medico - The ID of the doctor associated with the quiz.
   * @param paziente - The patient associated with the quiz.
   * @param punteggioTot - The total score of the quiz.
   * @param id - The ID of the quiz.
   */
  constructor(
    numDomande: number,
    sage: boolean,
    medico: number,
    paziente: string,
    punteggioTot?: number,
    id?: number
  ) {
    this._numDomande = numDomande;
    this._sage = sage;
    this._punteggioTot = punteggioTot;
    this._medico = medico;
    this._paziente = paziente;
    this._id = id;
  }

  /**
   * Gets the ID of the quiz.
   * @returns The ID of the quiz.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the ID of the quiz.
   * @param id - The ID of the quiz.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the number of questions in the quiz.
   * @returns The number of questions in the quiz.
   */
  public get numDomande(): number {
    return this._numDomande;
  }

  /**
   * Sets the number of questions in the quiz.
   * @param numDomande - The number of questions in the quiz.
   */
  public set numDomande(numDomande: number) {
    this._numDomande = numDomande;
  }

  /**
   * Gets whether the quiz is for a sage.
   * @returns True if the quiz is for a sage, false otherwise.
   */
  public get sage(): boolean {
    return this._sage;
  }

  /**
   * Sets whether the quiz is for a sage.
   * @param sage - True if the quiz is for a sage, false otherwise.
   */
  public set sage(sage: boolean) {
    this._sage = sage;
  }

  /**
   * Gets the total score of the quiz.
   * @returns The total score of the quiz.
   */
  public get punteggioTot(): number | undefined {
    return this._punteggioTot;
  }

  /**
   * Sets the total score of the quiz.
   * @param punteggioTot - The total score of the quiz.
   */
  public set punteggioTot(punteggioTot: number | undefined) {
    this._punteggioTot = punteggioTot;
  }

  /**
   * Gets the ID of the doctor associated with the quiz.
   * @returns The ID of the doctor associated with the quiz.
   */
  public get medico(): number {
    return this._medico;
  }

  /**
   * Sets the ID of the doctor associated with the quiz.
   * @param medico - The ID of the doctor associated with the quiz.
   */
  public set medico(medico: number) {
    this._medico = medico;
  }

  /**
   * Gets the cf of the patient associated with the quiz.
   * @returns The name of the patient associated with the quiz.
   */
  public get paziente(): string {
    return this._paziente;
  }

  /**
   * Sets the cf of the patient associated with the quiz.
   * @param paziente - The name of the patient associated with the quiz.
   */
  public set paziente(paziente: string) {
    this._paziente = paziente;
  }
}
