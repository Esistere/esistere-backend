export class Tac {
  private _id: number | undefined;
  private _stadio: string;
  private _allegato: Blob;
  private _medico: number;
  private _paziente: string;

  constructor(
    stadio: string,
    allegato: Blob,
    medico: number,
    paziente: string,
    id?: number
  ) {
    this._id = id;
    this._stadio = stadio;
    this._allegato = allegato;
    this._medico = medico;
    this._paziente = paziente;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get stadio(): string {
    return this._stadio;
  }

  public set stadio(stadio: string) {
    this._stadio = stadio;
  }

  public get allegato(): Blob {
    return this._allegato;
  }

  public set allegato(allegato: Blob) {
    this._allegato = allegato;
  }

  public get medico(): number {
    return this._medico;
  }

  public set medico(medico: number) {
    this._medico = medico;
  }

  public get paziente(): string {
    return this._paziente;
  }

  public set paziente(paziente: string) {
    this._paziente = paziente;
  }
}
