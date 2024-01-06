// medico.test.ts

import { Medico } from 'app/entity/gestione_autenticazione/Medico';

describe('Medico', () => {
  it('should create a Medico instance', () => {
    const medico = new Medico(
      'Nome',
      'Cognome',
      'Indirizzo Studio',
      123,
      'Telefono Studio',
      'Città',
      'email@example.com',
      'password',
      456
    );

    expect(medico).toBeInstanceOf(Medico);
    expect(medico.codiceIdentificativo).toBe(456);
  });

  it('should correctly set and get properties', () => {
    const medico = new Medico(
      'Nome',
      'Cognome',
      'Indirizzo Studio',
      123,
      'Telefono Studio',
      'Città',
      'email@example.com',
      'password'
    );

    // Verifica che le proprietà siano impostate correttamente
    expect(medico.nome).toBe('Nome');
    expect(medico.cognome).toBe('Cognome');
    expect(medico.indirizzoStudio).toBe('Indirizzo Studio');
    expect(medico.numCivico).toBe(123);
    expect(medico.numTelefonoStudio).toBe('Telefono Studio');
    expect(medico.citta).toBe('Città');
    expect(medico.email).toBe('email@example.com');
    expect(medico.passwd).toBe('password');
    expect(medico.codiceIdentificativo).toBeUndefined();

    // Verifica che le proprietà possano essere modificate correttamente
    medico.nome = 'Nuovo Nome';
    expect(medico.nome).toBe('Nuovo Nome');

    medico.cognome = 'Nuovo Cognome';
    expect(medico.cognome).toBe('Nuovo Cognome');

    medico.codiceIdentificativo = 456;
    expect(medico.codiceIdentificativo).toBe(456);

    // Continua a testare le altre proprietà...
  });

  // Aggiungi altri test in base alle tue esigenze
});
