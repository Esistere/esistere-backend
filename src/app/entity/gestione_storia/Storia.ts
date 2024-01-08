export class Storia {
  private _id?: number | undefined;
  private _cgFam: number;
  private _testo: string;

  constructor(cgFam: number, testo: string, id?: number) {
    this._cgFam = cgFam;
    this._testo = testo;
    this._id = id;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get cgFam(): number {
    return this._cgFam;
  }

  public set cgFam(cgFam: number) {
    this._cgFam = cgFam;
  }

  public get testo(): string {
    return this._testo;
  }

  public set testo(testo: string) {
    this._testo = testo;
  }
}
