export class RispostaQuizPreliminare {
  private _id: number;
  private _risposta: string;
  private _domandaPreliminare: number;
  private _paziente: string;

  constructor(
    id: number,
    risposta: string,
    domandaPreliminare: number,
    paziente: string
  ) {
    this._id = id;
    this._risposta = risposta;
    this._domandaPreliminare = domandaPreliminare;
    this._paziente = paziente;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get risposta(): string {
    return this._risposta;
  }

  public set risposta(risposta: string) {
    this._risposta = risposta;
  }

  public get domandaPreliminare(): number {
    return this._domandaPreliminare;
  }

  public set domandaPreliminare(domandaPreliminare: number) {
    this._domandaPreliminare = domandaPreliminare;
  }

  public get paziente(): string {
    return this._paziente;
  }

  public set paziente(paziente: string) {
    this._paziente = paziente;
  }
}