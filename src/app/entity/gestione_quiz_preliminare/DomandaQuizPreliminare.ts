export class DomandaQuizPreliminare {
  private _id: number;
  private _domanda: string;
  private _quizPreliminare: number;

  constructor(id: number, domanda: string, quizPreliminare: number) {
    this._id = id;
    this._domanda = domanda;
    this._quizPreliminare = quizPreliminare;
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

  public get quizPreliminare(): number {
    return this.quizPreliminare;
  }

  public set quizPreliminare(quizPreliminare: number) {
    this.quizPreliminare = quizPreliminare;
  }
}
