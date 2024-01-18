/**
 * Represents a daily training quiz.
 */
export class QuizAllenamentoGiornaliero {
  /**
   * The unique identifier of the quiz.
   */
  private _id: number | undefined;

  /**
   * The caregiver familiare associated with the quiz.
   */
  private _caregiverFamiliare: number;

  /**
   * The number of questions in the quiz.
   */
  private _numDomande: number;

  /**
   * The total score of the quiz.
   */
  private _punteggioTot: number | undefined;

  /**
   * Creates a new instance of QuizAllenamentoGiornaliero.
   * @param caregiverFamiliare - The caregiver familiare associated with the quiz.
   * @param numDomande - The number of questions in the quiz.
   * @param punteggioTot - The total score of the quiz (optional).
   * @param id - The unique identifier of the quiz (optional).
   */
  constructor(
    caregiverFamiliare: number,
    numDomande: number,
    punteggioTot?: number,
    id?: number
  ) {
    this._caregiverFamiliare = caregiverFamiliare;
    this._numDomande = numDomande;
    this._punteggioTot = punteggioTot;
    this._id = id;
  }

  /**
   * Gets the unique identifier of the quiz.
   * @returns The unique identifier of the quiz.
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Sets the unique identifier of the quiz.
   * @param id - The unique identifier of the quiz.
   */
  public set id(id: number | undefined) {
    this._id = id;
  }

  /**
   * Gets the caregiver familiare associated with the quiz.
   * @returns The caregiver familiare associated with the quiz.
   */
  public get caregiverFamiliare(): number {
    return this._caregiverFamiliare;
  }

  /**
   * Sets the caregiver familiare associated with the quiz.
   * @param caregiverFamiliare - The caregiver familiare associated with the quiz.
   */
  public set caregiverFamiliare(caregiverFamiliare: number) {
    this._caregiverFamiliare = caregiverFamiliare;
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
}
