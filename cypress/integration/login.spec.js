/// <reference types="cypress" />

describe('The Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  context('When page is initially opened', () => {
    it('should page is activated', () => {
      cy.location('pathname').should('equal', '/login');
    });
  });
});
