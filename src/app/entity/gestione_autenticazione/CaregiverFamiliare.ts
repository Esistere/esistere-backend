/**
 * Represents a caregiver familiare.
 */
export class CaregiverFamiliare {
  /**
   * The unique identifier of the caregiver familiare.
   */
  private _codiceIdentificativo: number | undefined;

  /**
   * The first name of the caregiver familiare.
   */
  private _nome: string;

  /**
   * The last name of the caregiver familiare.
   */
  private _cognome: string;

  /**
   * The address of the caregiver familiare.
   */
  private _indirizzo: string;

  /**
   * The house number of the caregiver familiare.
   */
  private _numCivico: string;

  /**
   * The date of birth of the caregiver familiare.
   */
  private _dataDiNascita: Date;

  /**
   * The phone number of the caregiver familiare.
   */
  private _numeroTelefono: string;

  /**
   * The city of residence of the caregiver familiare.
   */
  private _citta: string;

  /**
   * The email address of the caregiver familiare.
   */
  private _email: string;

  /**
   * The password of the caregiver familiare.
   */
  private _passwd: string;

  /**
   * Creates an instance of CaregiverFamiliare.
   * @param nome - The first name of the caregiver familiare.
   * @param cognome - The last name of the caregiver familiare.
   * @param indirizzo - The address of the caregiver familiare.
   * @param numCivico - The house number of the caregiver familiare.
   * @param dataDiNascita - The date of birth of the caregiver familiare.
   * @param numeroTelefono - The phone number of the caregiver familiare.
   * @param citta - The city of residence of the caregiver familiare.
   * @param email - The email address of the caregiver familiare.
   * @param passwd - The password of the caregiver familiare.
   * @param codiceIdentificativo - The unique identifier of the caregiver familiare.
   */
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
    codiceIdentificativo?: number
  ) {
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

  /**
   * Gets the unique identifier of the caregiver familiare.
   * @returns The unique identifier of the caregiver familiare.
   */
  public get codiceIdentificativo(): number | undefined {
    return this._codiceIdentificativo;
  }

  /**
   * Sets the unique identifier of the caregiver familiare.
   * @param codiceIdentificativo - The unique identifier of the caregiver familiare.
   */
  public set codiceIdentificativo(codiceIdentificativo: number | undefined) {
    this._codiceIdentificativo = codiceIdentificativo;
  }

  /**
   * Gets the first name of the caregiver familiare.
   * @returns The first name of the caregiver familiare.
   */
  public get nome(): string {
    return this._nome;
  }

  /**
   * Sets the first name of the caregiver familiare.
   * @param nome - The first name of the caregiver familiare.
   */
  public set nome(nome: string) {
    this._nome = nome;
  }

  /**
   * Gets the last name of the caregiver familiare.
   * @returns The last name of the caregiver familiare.
   */
  public get cognome(): string {
    return this._cognome;
  }

  /**
   * Sets the last name of the caregiver familiare.
   * @param cognome - The last name of the caregiver familiare.
   */
  public set cognome(cognome: string) {
    this._cognome = cognome;
  }

  /**
   * Gets the address of the caregiver familiare.
   * @returns The address of the caregiver familiare.
   */
  public get indirizzo(): string {
    return this._indirizzo;
  }

  /**
   * Sets the address of the caregiver familiare.
   * @param indirizzo - The address of the caregiver familiare.
   */
  public set indirizzo(indirizzo: string) {
    this._indirizzo = indirizzo;
  }

  /**
   * Gets the house number of the caregiver familiare.
   * @returns The house number of the caregiver familiare.
   */
  public get numCivico(): string {
    return this._numCivico;
  }

  /**
   * Sets the house number of the caregiver familiare.
   * @param numCivico - The house number of the caregiver familiare.
   */
  public set numCivico(numCivico: string) {
    this._numCivico = numCivico;
  }

  /**
   * Gets the city of residence of the caregiver familiare.
   * @returns The city of residence of the caregiver familiare.
   */
  public get citta(): string {
    return this._citta;
  }

  /**
   * Sets the city of residence of the caregiver familiare.
   * @param citta - The city of residence of the caregiver familiare.
   */
  public set citta(citta: string) {
    this._citta = citta;
  }

  /**
   * Gets the date of birth of the caregiver familiare.
   * @returns The date of birth of the caregiver familiare.
   */
  public get dataDiNascita(): Date {
    return this._dataDiNascita;
  }

  /**
   * Sets the date of birth of the caregiver familiare.
   * @param dataDiNascita - The date of birth of the caregiver familiare.
   */
  public set dataDiNascita(dataDiNascita: Date) {
    this._dataDiNascita = dataDiNascita;
  }

  /**
   * Gets the phone number of the caregiver familiare.
   * @returns The phone number of the caregiver familiare.
   */
  public get numTelefono(): string {
    return this._numeroTelefono;
  }

  /**
   * Sets the phone number of the caregiver familiare.
   * @param numTelefono - The phone number of the caregiver familiare.
   */
  public set numTelefono(numTelefono: string) {
    this._numeroTelefono = numTelefono;
  }

  /**
   * Gets the email address of the caregiver familiare.
   * @returns The email address of the caregiver familiare.
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Sets the email address of the caregiver familiare.
   * @param email - The email address of the caregiver familiare.
   */
  public set email(email: string) {
    this._email = email;
  }

  /**
   * Gets the password of the caregiver familiare.
   * @returns The password of the caregiver familiare.
   */
  public get passwd(): string {
    return this._passwd;
  }

  /**
   * Sets the password of the caregiver familiare.
   * @param passwd - The password of the caregiver familiare.
   */
  public set passwd(passwd: string) {
    this._passwd = passwd;
  }
}
