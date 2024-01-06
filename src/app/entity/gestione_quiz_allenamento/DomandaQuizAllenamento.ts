export class DomandaQuizAllenamento {
  private _id: number | undefined;
  private _quizAllenamento: number;
  private _domanda: string;
  private _corretta: boolean;

  constructor(
    quizAllenamento: number,
    domanda: string,
    corretta: boolean,
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

  public get quizAllenamento(): number {
    return this._quizAllenamento;
  }

  public set quizAllenamento(quizAllenamento: number) {
    this._quizAllenamento = quizAllenamento;
  }

  public get domanda(): string {
    return this._domanda;
  }

  public set domanda(domanda: string) {
    this.domanda = domanda;
  }

  public get corretta(): boolean {
    return this.corretta;
  }

  public set corretta(corretta: boolean) {
    this.corretta = corretta;
  }
}
