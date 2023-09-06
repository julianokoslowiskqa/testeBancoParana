/// <reference types="Cypress" />

Cypress.Commands.add('clickbuttons', () => {
  cy
  .get('.button')
  .not('.alert,.success')
  .click()

  cy
  .get('.button')
  .filter('.alert')
  .click()

  cy
  .get('.button')
  .filter('.success')
  .click()
})

//Função personalizada para clicar no botão "edit" em uma linha específica
Cypress.Commands.add("clickEditButtonInRow", (rowIndex) => {
  cy.get('tr').eq(rowIndex).contains('edit').click();
});

//Função personalizada para clicar no botão "delete" em uma linha específica

Cypress.Commands.add("clickDeleteButtonInRow", (rowIndex) => {
  cy.get('tbody tr').eq(rowIndex).contains('delete').click();
});