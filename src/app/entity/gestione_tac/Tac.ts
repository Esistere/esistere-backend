import { TacFile } from 'app/adapter/gestione_tac/tacAdapter';

export class Tac {
  private _id: number | undefined;
  private _stadio: string;
  private _medico: number;
  private _paziente: string;
  private _allegato: TacFile;

  constructor(
    stadio: string,
    medico: number,
    paziente: string,
    allegato: TacFile,
    id?: number
  ) {
    this._id = id;
    this._stadio = stadio;
    this._allegato = allegato;
    this._medico = medico;
    this._paziente = paziente;
  }

  public get id(): number | undefined {
    return this._id;
  }

  public set id(id: number | undefined) {
    this._id = id;
  }

  public get stadio(): string {
    return this._stadio;
  }

  public set stadio(stadio: string) {
    this._stadio = stadio;
  }

  public get allegato(): TacFile {
    return this._allegato;
  }

  public set allegato(allegato: TacFile) {
    this._allegato = allegato;
  }

  public get medico(): number {
    return this._medico;
  }

  public set medico(medico: number) {
    this._medico = medico;
  }

  public get paziente(): string {
    return this._paziente;
  }

  public set paziente(paziente: string) {
    this._paziente = paziente;
  }
}
