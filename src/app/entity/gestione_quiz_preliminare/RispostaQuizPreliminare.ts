export class RispostaQuizPreliminare {
  private _risposta: string;
  private _paziente: string;
  private _id: number | undefined;
  private _domandaPreliminare: number | undefined;

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

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get risposta(): string {
    return this._risposta;
  }

  public set risposta(risposta: string) {
    this._risposta = risposta;
  }

  public get domandaPreliminare(): number | undefined {
    return this._domandaPreliminare;
  }

  public set domandaPreliminare(domandaPreliminare: number | undefined) {
    this._domandaPreliminare = domandaPreliminare;
  }

  public get paziente(): string {
    return this._paziente;
  }

  public set paziente(paziente: string) {
    this._paziente = paziente;
  }
}
