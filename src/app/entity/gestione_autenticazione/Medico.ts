export class Medico {
  private _codiceIdentificativo?: number | undefined;
  private _nome: string;
  private _cognome: string;
  private _indirizzoStudio: string;
  private _numCivico: number;
  private _numTelefonoStudio: string;
  private _citta: string;
  private _email: string;
  private _passwd: string;

  constructor(
    nome: string,
    cognome: string,
    indirizzoStudio: string,
    numCivico: number,
    numTelefonoStudio: string,
    citta: string,
    email: string,
    passwd: string,
    codiceIdentificativo?: number | undefined
  ) {
    this._codiceIdentificativo = codiceIdentificativo;
    this._nome = nome;
    this._cognome = cognome;
    this._indirizzoStudio = indirizzoStudio;
    this._numCivico = numCivico;
    this._numTelefonoStudio = numTelefonoStudio;
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

  public get indirizzoStudio(): string {
    return this._indirizzoStudio;
  }

  public set indirizzoStudio(indirizzoStudio: string) {
    this._indirizzoStudio = indirizzoStudio;
  }

  public get numTelefonoStudio(): string {
    return this._numTelefonoStudio;
  }

  public set numTelefonoStudio(numTelefonoStudio: string) {
    this._numTelefonoStudio = numTelefonoStudio;
  }

  public get numCivico(): number {
    return this._numCivico;
  }

  public set numCivico(numCivico: number) {
    this._numCivico = numCivico;
  }

  public get citta(): string {
    return this._citta;
  }

  public set citta(citta: string) {
    this._citta = citta;
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
