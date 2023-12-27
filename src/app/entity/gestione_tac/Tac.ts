export class Tac {
  private _id: number;
  private _stadio: string;
  private _file: Blob;
  private _medico: number;
  private _paziente: string;

  constructor(
    id: number,
    stadio: string,
    file: Blob,
    medico: number,
    paziente: string
  ) {
    this._id = id;
    this._stadio = stadio;
    this._file = file;
    this._medico = medico;
    this._paziente = paziente;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get stadio(): string {
    return this._stadio;
  }

  public set stadio(stadio: string) {
    this._stadio = stadio;
  }

  public get file(): Blob {
    return this._file;
  }

  public set file(file: Blob) {
    this._file = file;
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
