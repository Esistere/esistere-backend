export class CaregiverFamiliare {
  private _codiceIdentificativo: number;
  private _nome: string;
  private _cognome: string;
  private _indirizzo: string;
  private _numCivico: string;
  private _citta: string;
  private _provincia: string;
  private _email: string;
  private _password: string;

  constructor(
    codiceIdentificativo: number,
    nome: string,
    cognome: string,
    indirizzo: string,
    numCivico: string,
    citta: string,
    provincia: string,
    email: string,
    password: string
  ) {
    this._codiceIdentificativo = codiceIdentificativo;
    this._nome = nome;
    this._cognome = cognome;
    this._indirizzo = indirizzo;
    this._numCivico = numCivico;
    this._citta = citta;
    this._provincia = provincia;
    this._email = email;
    this._password = password;
  }

  public get codiceIdentificativo(): number {
    return this._codiceIdentificativo;
  }

  public set codiceIdentificativo(codiceIdentificativo: number) {
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

  public get provincia(): string {
    return this._provincia;
  }

  public set provincia(provincia: string) {
    this._provincia = provincia;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }
}
