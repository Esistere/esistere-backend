export class RispostaQuizAllenamento {
  private _id: number | undefined;
  private _domanda: number | undefined;
  private _risposta: string;
  private _corretta: boolean | undefined;
  private _selezionata: boolean | undefined;

  constructor(
    risposta: string,
    domanda?: number,
    corretta?: boolean,
    selezionata?: boolean,
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

  public get domanda(): number | undefined {
    return this._domanda;
  }

  public set domanda(domanda: number | undefined) {
    this._domanda = domanda;
  }

  public get risposta(): string {
    return this._risposta;
  }

  public set risposta(risposta: string) {
    this._risposta = risposta;
  }

  public get corretta(): boolean | undefined {
    return this._corretta;
  }

  public set corretta(corretta: boolean | undefined) {
    this._corretta = corretta;
  }

  public get selezionata(): boolean | undefined {
    return this._selezionata;
  }

  public set selezionata(selezionata: boolean | undefined) {
    this._selezionata = selezionata;
  }
}
