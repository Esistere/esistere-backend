export class LineaGuida {
  private _id: number;
  private _lineeGuida: string;
  private _medico: number;

  constructor(id: number, lineeGuida: string, medico: number) {
    this._id = id;
    this._lineeGuida = lineeGuida;
    this._medico = medico;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get lineeGuida(): string {
    return this._lineeGuida;
  }

  public set lineeGuida(lineeGuida: string) {
    this._lineeGuida = lineeGuida;
  }

  public get medico(): number {
    return this._medico;
  }

  public set medico(medico: number) {
    this._medico = medico;
  }
}

