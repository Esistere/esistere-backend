export class Attivita {
  private _id: number | undefined;
  private _toDoList: number;
  private _testo: string;
  private _completata: boolean;
  private _commento: string;
  private _valutazione: number;

  constructor(
    toDoList: number,
    testo: string,
    completata: boolean,
    commento: string,
    valutazione: number,
    id?: number
  ) {
    this._toDoList = toDoList;
    this._testo = testo;
    this._completata = completata;
    this._commento = commento;
    this._valutazione = valutazione;
    this._id = id;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get toDolist(): number {
    return this._toDoList;
  }

  public set toDoList(toDoList: number) {
    this._toDoList = toDoList;
  }

  public get testo(): string {
    return this._testo;
  }

  public set testo(testo: string) {
    this._testo = testo;
  }

  public get completata(): boolean {
    return this._completata;
  }

  public set completata(completata: boolean) {
    this._completata = completata;
  }

  public get commento(): string {
    return this._commento;
  }

  public set commento(commento: string) {
    this._commento = commento;
  }

  public get valutazione(): number {
    return this._valutazione;
  }

  public set valutazione(valutazione: number) {
    this._valutazione = valutazione;
  }
}
