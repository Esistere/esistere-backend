/**
 * Represents a Medico entity.
 */
export class Medico {
  /**
   * The unique identifier of the Medico.
   */
  private _codiceIdentificativo: number | undefined;

  /**
   * The first name of the Medico.
   */
  private _nome: string;

  /**
   * The last name of the Medico.
   */
  private _cognome: string;

  /**
   * The address of the Medico's studio.
   */
  private _indirizzoStudio: string;

  /**
   * The street number of the Medico's studio.
   */
  private _numCivico: string;

  /**
   * The telephone number of the Medico's studio.
   */
  private _numTelefonoStudio: string;

  /**
   * The city of the Medico's studio.
   */
  private _citta: string;

  /**
   * The email address of the Medico.
   */
  private _email: string;

  /**
   * The password of the Medico.
   */
  private _passwd: string;

  /**
   * Creates an instance of Medico.
   * @param nome - The first name of the Medico.
   * @param cognome - The last name of the Medico.
   * @param indirizzoStudio - The address of the Medico's studio.
   * @param numCivico - The street number of the Medico's studio.
   * @param numTelefonoStudio - The telephone number of the Medico's studio.
   * @param citta - The city of the Medico's studio.
   * @param email - The email address of the Medico.
   * @param passwd - The password of the Medico.
   * @param codiceIdentificativo - The unique identifier of the Medico. (optional)
   */
  constructor(
    nome: string,
    cognome: string,
    indirizzoStudio: string,
    numCivico: string,
    numTelefonoStudio: string,
    citta: string,
    email: string,
    passwd: string,
    codiceIdentificativo?: number
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

  /**
   * Gets the unique identifier of the Medico.
   * @returns The unique identifier of the Medico.
   */
  public get codiceIdentificativo(): number | undefined {
    return this._codiceIdentificativo;
  }

  /**
   * Sets the unique identifier of the Medico.
   * @param codiceIdentificativo - The unique identifier of the Medico.
   */
  public set codiceIdentificativo(codiceIdentificativo: number | undefined) {
    this._codiceIdentificativo = codiceIdentificativo;
  }

  /**
   * Gets the first name of the Medico.
   * @returns The first name of the Medico.
   */
  public get nome(): string {
    return this._nome;
  }

  /**
   * Sets the first name of the Medico.
   * @param nome - The first name of the Medico.
   */
  public set nome(nome: string) {
    this._nome = nome;
  }

  /**
   * Gets the last name of the Medico.
   * @returns The last name of the Medico.
   */
  public get cognome(): string {
    return this._cognome;
  }

  /**
   * Sets the last name of the Medico.
   * @param cognome - The last name of the Medico.
   */
  public set cognome(cognome: string) {
    this._cognome = cognome;
  }

  /**
   * Gets the address of the Medico's studio.
   * @returns The address of the Medico's studio.
   */
  public get indirizzoStudio(): string {
    return this._indirizzoStudio;
  }

  /**
   * Sets the address of the Medico's studio.
   * @param indirizzoStudio - The address of the Medico's studio.
   */
  public set indirizzoStudio(indirizzoStudio: string) {
    this._indirizzoStudio = indirizzoStudio;
  }

  /**
   * Gets the telephone number of the Medico's studio.
   * @returns The telephone number of the Medico's studio.
   */
  public get numTelefonoStudio(): string {
    return this._numTelefonoStudio;
  }

  /**
   * Sets the telephone number of the Medico's studio.
   * @param numTelefonoStudio - The telephone number of the Medico's studio.
   */
  public set numTelefonoStudio(numTelefonoStudio: string) {
    this._numTelefonoStudio = numTelefonoStudio;
  }

  /**
   * Gets the street number of the Medico's studio.
   * @returns The street number of the Medico's studio.
   */
  public get numCivico(): string {
    return this._numCivico;
  }

  /**
   * Sets the street number of the Medico's studio.
   * @param numCivico - The street number of the Medico's studio.
   */
  public set numCivico(numCivico: string) {
    this._numCivico = numCivico;
  }

  /**
   * Gets the city of the Medico's studio.
   * @returns The city of the Medico's studio.
   */
  public get citta(): string {
    return this._citta;
  }

  /**
   * Sets the city of the Medico's studio.
   * @param citta - The city of the Medico's studio.
   */
  public set citta(citta: string) {
    this._citta = citta;
  }

  /**
   * Gets the email address of the Medico.
   * @returns The email address of the Medico.
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Sets the email address of the Medico.
   * @param email - The email address of the Medico.
   */
  public set email(email: string) {
    this._email = email;
  }

  /**
   * Gets the password of the Medico.
   * @returns The password of the Medico.
   */
  public get passwd(): string {
    return this._passwd;
  }

  /**
   * Sets the password of the Medico.
   * @param passwd - The password of the Medico.
   */
  public set passwd(passwd: string) {
    this._passwd = passwd;
  }
}
