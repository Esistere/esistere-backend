export class LineaGuida {
  private _id?: number | undefined;
  private _lineeGuida: string;
  private _medico: number;

  constructor(lineeGuida: string, medico: number, id?: number) {
    this._lineeGuida = lineeGuida;
    this._medico = medico;
    this._id = id;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
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
