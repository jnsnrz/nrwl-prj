import { getGreeting } from '../support/app.po';

describe('dating-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to dating-app!');
  });
});
