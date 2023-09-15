/// <reference types="Cypress" />

describe('Primeira parte do desafio automação de interface web', () => { 
  beforeEach(() => {
    cy.visit('/challenging_dom')})

  it('CT_001 : Acessar a aplicação e clicar nos botões da tela.', () =>{
    cy.clickbuttons()   
  })  


  it('CT_002: Acessar a aplicação e clicar em todos os botões "Edit" apresentado na tela', () => {
    for (let rowIndex = 1; rowIndex < 11; rowIndex++) {
      cy.clickEditButtonInRow(rowIndex);
    }
  })

  it('CT_003 deve clicar em todos os botões DELETE da grid apresentada apresentados na tela', () => {
    for (let rowIndex = 0; rowIndex < 10; rowIndex++) {
      cy.clickDeleteButtonInRow(rowIndex);
    }
  })
})