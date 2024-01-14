export class DomandaQuizPreliminare {
  private _id: number | undefined;
  private _domanda: string;
  private _quizPreliminare: number | undefined;

  constructor(domanda: string, quizPreliminare?: number, id?: number) {
    this._id = id;
    this._domanda = domanda;
    this._quizPreliminare = quizPreliminare;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get domanda(): string {
    return this._domanda;
  }

  public set domanda(domanda: string) {
    this._domanda = domanda;
  }

  public get quizPreliminare(): number | undefined {
    return this._quizPreliminare;
  }

  public set quizPreliminare(quizPreliminare: number | undefined) {
    this._quizPreliminare = quizPreliminare;
  }
}
