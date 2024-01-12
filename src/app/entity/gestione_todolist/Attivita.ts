export class Attivita {
  private _id: number | undefined;
  private _toDoList: number | undefined;
  private _testo: string;
  private _completata: boolean;
  private _commento: string | undefined;
  private _valutazione: number | undefined;

  constructor(
    testo: string,
    completata: boolean,
    commento?: string,
    valutazione?: number,
    toDoList?: number,
    id?: number
  ) {
    this._id = id;
    this._toDoList = toDoList;
    this._testo = testo;
    this._completata = completata;
    this._commento = commento;
    this._valutazione = valutazione;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get toDoList(): number | undefined {
    return this._toDoList;
  }

  public set toDoList(toDoList: number | undefined) {
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

  public get commento(): string | undefined {
    return this._commento;
  }

  public set commento(commento: string | undefined) {
    this._commento = commento;
  }

  public get valutazione(): number | undefined {
    return this._valutazione;
  }

  public set valutazione(valutazione: number | undefined) {
    this._valutazione = valutazione;
  }
}
