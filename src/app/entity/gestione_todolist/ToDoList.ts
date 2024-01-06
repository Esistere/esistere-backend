export class ToDoList {
  private _id: number | undefined;
  private _numAttivita: number;
  private _completata: boolean;
  private _med: number;
  private _paziente: string;

  constructor(
    numAttivita: number,
    completata: boolean,
    med: number,
    paziente: string,
    id?: number
  ) {
    this._id = id;
    this._numAttivita = numAttivita;
    this._completata = completata;
    this._med = med;
    this._paziente = paziente;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get numAttivita(): number {
    return this._numAttivita;
  }

  public set numAttivita(numAttivita: number) {
    this._numAttivita = numAttivita;
  }

  public get completata(): boolean {
    return this._completata;
  }

  public set completata(completata: boolean) {
    this._completata = completata;
  }

  public get med(): number {
    return this._med;
  }

  public set med(med: number) {
    this._med = med;
  }

  public get paziente(): string {
    return this._paziente;
  }

  public set paziente(paziente: string) {
    this._paziente = paziente;
  }
}
