export class CaregiverFamiliare {
  private _codiceIdentificativo?: number;
  private _nome: string;
  private _cognome: string;
  private _indirizzo: string;
  private _numCivico: string;
  private _dataDiNascita: Date;
  private _numeroTelefono: string;
  private _citta: string;
  private _email: string;
  private _passwd: string;

  constructor(
    nome: string,
    cognome: string,
    indirizzo: string,
    numCivico: string,
    dataDiNascita: Date,
    numeroTelefono: string,
    citta: string,
    email: string,
    passwd: string,
    codiceIdentificativo?: number) {
    this._codiceIdentificativo = codiceIdentificativo;
    this._nome = nome;
    this._cognome = cognome;
    this._indirizzo = indirizzo;
    this._numCivico = numCivico;
    this._dataDiNascita = dataDiNascita;
    this._numeroTelefono = numeroTelefono;
    this._citta = citta;
    this._email = email;
    this._passwd = passwd;
  }

  public get codiceIdentificativo(): number | undefined {
    return this._codiceIdentificativo;
  }

  public set codiceIdentificativo(codiceIdentificativo: number | undefined) {
    this._codiceIdentificativo = codiceIdentificativo;
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get cognome(): string {
    return this._cognome;
  }

  public set cognome(cognome: string) {
    this._cognome = cognome;
  }

  public get indirizzo(): string {
    return this._indirizzo;
  }

  public set indirizzo(indirizzo: string) {
    this._indirizzo = indirizzo;
  }

  public get numCivico(): string {
    return this._numCivico;
  }

  public set numCivico(numCivico: string) {
    this._numCivico = numCivico;
  }

  public get citta(): string {
    return this._citta;
  }

  public set citta(citta: string) {
    this._citta = citta;
  }

  public get dataDiNascita(): Date {
    return this._dataDiNascita;
  }

  public set dataDiNascita(dataDiNascita: Date) {
    this._dataDiNascita = dataDiNascita;
  }

  public get numTelefono(): string {
    return this._numeroTelefono;
  }

  public set numTelefono(numTelefono: string) {
    this._numeroTelefono = numTelefono;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get passwd(): string {
    return this._passwd;
  }

  public set passwd(passwd: string) {
    this._passwd = passwd;
  }
}
