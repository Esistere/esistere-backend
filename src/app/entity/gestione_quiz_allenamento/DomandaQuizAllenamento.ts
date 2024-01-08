export class DomandaQuizAllenamento {
  private _id: number | undefined;
  private _quizAllenamento: number | undefined;
  private _domanda: string;
  private _corretta: boolean | undefined;

  constructor(
    domanda: string,
    quizAllenamento?: number,
    corretta?: boolean,
    id?: number
  ) {
    this._quizAllenamento = quizAllenamento;
    this._domanda = domanda;
    this._corretta = corretta;
    this._id = id;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get quizAllenamento(): number | undefined {
    return this._quizAllenamento;
  }

  public set quizAllenamento(quizAllenamento: number | undefined) {
    this._quizAllenamento = quizAllenamento;
  }

  public get domanda(): string {
    return this._domanda;
  }

  public set domanda(domanda: string) {
    this._domanda = domanda;
  }

  public get corretta(): boolean | undefined {
    return this._corretta;
  }

  public set corretta(corretta: boolean | undefined) {
    this._corretta = corretta;
  }
}
