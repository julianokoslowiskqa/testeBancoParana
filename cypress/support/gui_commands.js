/// <reference types="Cypress" />



Cypress.Commands.add('acessaPagina', () => {
  cy.visit('/challenging_dom')
 
})


Cypress.Commands.add('clicarbotoes', () => {
  cy
  .get('.button')
  .not('.alert,.success')

  cy
  .get('.button')
  .filter('.alert') 

  cy
  .get('.button')
  .filter('.success')

//cy.get('#\37 b6c2160-2ee6-013c-9447-3e264f052d07')//botão azul

})
//cy.get('#\39 8693460-2ede-013c-42eb-3e264f052d07') vermelho
//cy.get('#ea36cca1-2ede-013c-4314-3e264f052d07') verde

Cypress.Commands.add('editDelete', () => {
 // cy.get('[data-test=[href="#edit"]').click()
  //  .should('be.visible')

 // cy.get(':nth-child(1) > :nth-child(7) > [href="#edit"]').click()
 //   .should('be.visible')

 // cy.get(':nth-child(1) > :nth-child(7) > [href="#delete"]')
 //    .should('be.visible')

//cy.get(".large-10")
      //.eq(1) // Pega a segunda célula (índice 1)
      //.should("contain", "Apeirian2")  // Verifique o conteúdo da célula
})