/// <reference types="Cypress" />



Cypress.Commands.add('acessaPagina', () => {
  cy.visit('/challenging_dom')
})