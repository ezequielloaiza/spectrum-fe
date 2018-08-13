import { PasswordTemporalsModule } from './password-temporals.module';

describe('PasswordTemporalsModule', () => {
  let passwordTemporalsModule: PasswordTemporalsModule;

  beforeEach(() => {
    passwordTemporalsModule = new PasswordTemporalsModule();
  });

  it('should create an instance', () => {
    expect(passwordTemporalsModule).toBeTruthy();
  });
});
