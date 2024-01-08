export class QuizAllenamentoGiornaliero {
  private _id: number | undefined;
  private _caregiverFamiliare: number;
  private _numDomande: number;
  private _punteggioTot: number | undefined;

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

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get caregiverFamiliare(): number {
    return this._caregiverFamiliare;
  }

  public set caregiverFamiliare(caregiverFamiliare: number) {
    this._caregiverFamiliare = caregiverFamiliare;
  }

  public get numDomande(): number {
    return this._numDomande;
  }

  public set numDomande(numDomande: number) {
    this._numDomande = numDomande;
  }

  public get punteggioTot(): number | undefined {
    return this._punteggioTot;
  }

  public set punteggioTot(punteggioTot: number | undefined) {
    this._punteggioTot = punteggioTot;
  }
}
