import { InitialSessionsModule } from './initial-sessions.module';

describe('InitialSessionsModule', () => {
  let initialSessionsModule: InitialSessionsModule;

  beforeEach(() => {
    initialSessionsModule = new InitialSessionsModule();
  });

  it('should create an instance', () => {
    expect(initialSessionsModule).toBeTruthy();
  });
});
