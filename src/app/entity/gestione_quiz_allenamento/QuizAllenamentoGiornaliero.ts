export class QuizAllenamentoGiornaliero {
  private _id: number | undefined;
  private _cgFam: number;
  private _numDomande: number;
  private _punteggioTot: number;

  constructor(
    cgFam: number,
    numDomande: number,
    punteggioTot: number,
    id?: number
  ) {
    this._cgFam = cgFam;
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

  public get cgFam(): number {
    return this._cgFam;
  }

  public set cgFam(cgFam: number) {
    this._cgFam = cgFam;
  }

  public get numDomande(): number {
    return this._numDomande;
  }

  public set numDomande(numDomande: number) {
    this._numDomande = numDomande;
  }

  public get punteggioTot(): number {
    return this._punteggioTot;
  }

  public set punteggioTot(punteggioTot: number) {
    this._punteggioTot = punteggioTot;
  }
}
