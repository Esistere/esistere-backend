export class Paziente {
  private _codiceFiscale: string;
  private _nome: string;
  private _dataDiNascita: Date;
  private _medico: number;
  private _caregiverFamiliare: number;

  constructor(
    codiceFiscale: string,
    nome: string,
    dataDiNascita: Date,
    medico: number,
    caregiverFamiliare: number
  ) {
    this._codiceFiscale = codiceFiscale;
    this._nome = nome;
    this._dataDiNascita = dataDiNascita;
    this._medico = medico;
    this._caregiverFamiliare = caregiverFamiliare;
  }

  public get codiceFiscale(): string {
    return this._codiceFiscale;
  }

  public set codiceFiscale(codiceFiscale: string) {
    this._codiceFiscale = codiceFiscale;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get dataDiNascita(): Date {
    return this._dataDiNascita;
  }

  public set dataDiNascita(dataDiNascita: Date) {
    this._dataDiNascita = dataDiNascita;
  }

  public get medico(): number {
    return this._medico;
  }

  public set medico(medico: number) {
    this._medico = medico;
  }

  public get caregiverFamiliare(): number {
    return this._caregiverFamiliare;
  }

  public set caregiverFamiliare(caregiverFamiliare: number) {
    this._caregiverFamiliare = caregiverFamiliare;
  }
}
