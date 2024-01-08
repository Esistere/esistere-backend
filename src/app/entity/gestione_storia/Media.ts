export class Media {
  private _id?: number | undefined;
  private _storia: number;
  private _allegato: ArrayBuffer;
  private _descrizione: string;
  private _tipo: number;

  constructor(
    storia: number,
    allegato: ArrayBuffer,
    descrizione: string,
    tipo: number,
    id?: number
  ) {
    this._storia = storia;
    this._allegato = allegato;
    this._descrizione = descrizione;
    this._tipo = tipo;
    this._id = id;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get storia(): number {
    return this._storia;
  }

  public set storia(storia: number) {
    this._storia = storia;
  }

  public get allegato(): ArrayBuffer {
    return this._allegato;
  }

  public set allegato(allegato: ArrayBuffer) {
    this._allegato = allegato;
  }

  public get descrizione(): string {
    return this._descrizione;
  }

  public set descrizione(descrizione: string) {
    this._descrizione = descrizione;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public set tipo(tipo: number) {
    this._tipo = tipo;
  }
}
