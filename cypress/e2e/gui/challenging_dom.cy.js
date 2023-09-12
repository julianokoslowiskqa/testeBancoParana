/// <reference types="Cypress" />

describe('Primeira parte do desafio', () => { 
  beforeEach(() => {
    cy.visit('/challenging_dom')})

  it('CT_001 efetuar um clique em todos os 3 botões apresentados em tela.', () =>{
    cy.clickbuttons()   
  })  


  it('CT_002 deve clicar em todos os botões EDIT da grid apresentada.', () => {
    for (let rowIndex = 1; rowIndex < 10; rowIndex++) {
      cy.clickEditButtonInRow(rowIndex);
    }
  })

  it('CT_003 deve clicar em todos os botões DELETE da grid apresentada.', () => {
    for (let rowIndex = 0; rowIndex < 10; rowIndex++) {
      cy.clickDeleteButtonInRow(rowIndex);
    }
  })
})