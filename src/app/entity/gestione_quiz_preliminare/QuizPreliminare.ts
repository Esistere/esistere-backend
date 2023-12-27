export class QuizPreliminare {
  private _id: number;
  private _numDomande: number;
  private _sage: boolean;
  private _punteggioTot: number;
  private _medico: number;
  private _paziente: number;

  constructor(
    id: number,
    numDomande: number,
    sage: boolean,
    punteggioTot: number,
    medico: number,
    paziente: number
  ) {
    this._id = id;
    this._numDomande = numDomande;
    this._sage = sage;
    this._punteggioTot = punteggioTot;
    this._medico = medico;
    this._paziente = paziente;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get numDomande(): number {
    return this._numDomande;
  }

  public set numDomande(numDomande: number) {
    this._numDomande = numDomande;
  }

  public get sage(): boolean {
    return this._sage;
  }

  public set sage(sage: boolean) {
    this._sage = sage;
  }

  public get punteggioTot(): number {
    return this._punteggioTot;
  }

  public set punteggioTot(punteggioTot: number) {
    this._punteggioTot = punteggioTot;
  }

  public get medico(): number {
    return this._medico;
  }

  public set medico(medico: number) {
    this._medico = medico;
  }

  public get paziente(): number {
    return this._paziente;
  }

  public set paziente(paziente: number) {
    this._paziente = paziente;
  }
}