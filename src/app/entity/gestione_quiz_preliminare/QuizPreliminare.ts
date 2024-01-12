export class QuizPreliminare {
  private _id: number | undefined;
  private _numDomande: number;
  private _sage: boolean;
  private _medico: number;
  private _paziente: number;
  private _punteggioTot: number | undefined;

  constructor(
    numDomande: number,
    sage: boolean,
    medico: number,
    paziente: number,
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

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
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

  public get punteggioTot(): number | undefined {
    return this._punteggioTot;
  }

  public set punteggioTot(punteggioTot: number | undefined) {
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
