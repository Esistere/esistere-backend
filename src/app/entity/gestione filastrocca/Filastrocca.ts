export class Filastrocca {
  private _id?: number | undefined;
  private _caregiverFamiliare: number;
  private _titolo: string;
  private _testo: string;
  private _autore: string;

  constructor(
    titolo: string,
    testo: string,
    autore: string,
    caregiverFamiliare: number,
    id?: number
  ) {
    this._caregiverFamiliare = caregiverFamiliare;
    this._titolo = titolo;
    this._testo = testo;
    this._autore = autore;
    this._id = id;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get caregiverFamiliare(): number {
    return this._caregiverFamiliare;
  }

  public set caregiverFamiliare(caregiverFamiliare: number) {
    this._caregiverFamiliare = caregiverFamiliare;
  }

  public get titolo(): string {
    return this._titolo;
  }

  public set titolo(titolo: string) {
    this._titolo = titolo;
  }

  public get testo(): string {
    return this._testo;
  }

  public set testo(testo: string) {
    this._testo = testo;
  }

  public get autore(): string {
    return this._autore;
  }

  public set autore(autore: string) {
    this._autore = autore;
  }
}
