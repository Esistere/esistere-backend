export class DomandaQuizPreliminare {
  private _id: number;
  private _domanda: string;

  constructor(id: number, domanda: string) {
    this._id = id;
    this._domanda = domanda;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get domanda(): string {
    return this._domanda;
  }

  public set domanda(domanda: string) {
    this._domanda = domanda;
  }
}
