export class RispostaQuizAllenamento {
  private _id: number | undefined;
  private _domanda: number;
  private _risposta: string;
  private _corretta: boolean;
  private _selezionata: boolean;

  constructor(
    domanda: number,
    risposta: string,
    corretta: boolean,
    selezionata: boolean,
    id?: number
  ) {
    this._domanda = domanda;
    this._risposta = risposta;
    this._corretta = corretta;
    this._selezionata = selezionata;
    this._id = id;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get domanda(): number {
    return this._domanda;
  }

  public set domanda(domanda: number) {
    this.domanda = domanda;
  }

  public get risposta(): string {
    return this._risposta;
  }

  public set risposta(risposta: string) {
    this._risposta = risposta;
  }

  public get corretta(): boolean {
    return this._corretta;
  }

  public set corretta(corretta: boolean) {
    this._corretta = corretta;
  }

  public get selezionata(): boolean {
    return this._selezionata;
  }

  public set selezionata(selezionata: boolean) {
    this._selezionata = selezionata;
  }
}
