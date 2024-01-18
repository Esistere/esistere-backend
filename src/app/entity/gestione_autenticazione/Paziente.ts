/**
 * Represents a Paziente (patient) entity.
 */
export class Paziente {
  /**
   * The codice fiscale (tax code) of the patient.
   */
  private _codiceFiscale: string;
  /**
   * The first name of the patient.
   */
  private _nome: string;
  /**
   * The last name of the patient.
   */
  private _cognome: string;
  /**
   * The date of birth of the patient.
   */
  private _dataDiNascita: Date;
  /**
   * The ID of the medico (doctor) associated with the patient.
   */
  private _medico: number;
  /**
   * The ID of the caregiver familiare (family caregiver) associated with the patient.
   */
  private _caregiverFamiliare: number;

  /**
   * Creates an instance of Paziente.
   * @param codiceFiscale - The codice fiscale of the patient.
   * @param nome - The first name of the patient.
   * @param cognome - The last name of the patient.
   * @param dataDiNascita - The date of birth of the patient.
   * @param medico - The ID of the medico associated with the patient.
   * @param caregiverFamiliare - The ID of the caregiver familiare associated with the patient.
   */
  constructor(
    codiceFiscale: string,
    nome: string,
    cognome: string,
    dataDiNascita: Date,
    medico: number,
    caregiverFamiliare: number
  ) {
    this._codiceFiscale = codiceFiscale;
    this._nome = nome;
    this._cognome = cognome;
    this._dataDiNascita = dataDiNascita;
    this._medico = medico;
    this._caregiverFamiliare = caregiverFamiliare;
  }

  /**
   * Gets the codice fiscale of the patient.
   * @returns The codice fiscale of the patient.
   */
  public get codiceFiscale(): string {
    return this._codiceFiscale;
  }

  /**
   * Sets the codice fiscale of the patient.
   * @param codiceFiscale - The codice fiscale of the patient.
   */
  public set codiceFiscale(codiceFiscale: string) {
    this._codiceFiscale = codiceFiscale;
  }

  /**
   * Gets the first name of the patient.
   * @returns The first name of the patient.
   */
  public get nome(): string {
    return this._nome;
  }

  /**
   * Sets the first name of the patient.
   * @param nome - The first name of the patient.
   */
  public set nome(nome: string) {
    this._nome = nome;
  }

  /**
   * Gets the last name of the patient.
   * @returns The last name of the patient.
   */
  public get cognome(): string {
    return this._cognome;
  }

  /**
   * Sets the last name of the patient.
   * @param cognome - The last name of the patient.
   */
  public set cognome(cognome: string) {
    this._cognome = cognome;
  }

  /**
   * Gets the date of birth of the patient.
   * @returns The date of birth of the patient.
   */
  public get dataDiNascita(): Date {
    return this._dataDiNascita;
  }

  /**
   * Sets the date of birth of the patient.
   * @param dataDiNascita - The date of birth of the patient.
   */
  public set dataDiNascita(dataDiNascita: Date) {
    this._dataDiNascita = dataDiNascita;
  }

  /**
   * Gets the ID of the medico associated with the patient.
   * @returns The ID of the medico associated with the patient.
   */
  public get medico(): number {
    return this._medico;
  }

  /**
   * Sets the ID of the medico associated with the patient.
   * @param medico - The ID of the medico associated with the patient.
   */
  public set medico(medico: number) {
    this._medico = medico;
  }

  /**
   * Gets the ID of the caregiver familiare associated with the patient.
   * @returns The ID of the caregiver familiare associated with the patient.
   */
  public get caregiverFamiliare(): number {
    return this._caregiverFamiliare;
  }

  /**
   * Sets the ID of the caregiver familiare associated with the patient.
   * @param caregiverFamiliare - The ID of the caregiver familiare associated with the patient.
   */
  public set caregiverFamiliare(caregiverFamiliare: number) {
    this._caregiverFamiliare = caregiverFamiliare;
  }
}
