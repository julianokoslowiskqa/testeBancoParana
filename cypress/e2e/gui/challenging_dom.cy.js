/// <reference types="Cypress" />

describe('Primeira parte do desafio', () => { 
  beforeEach(() => {
    cy.visit('/challenging_dom')})

  it('efetuar u m clique em todos os 3 botões apresentados em tela.', () =>{
    cy.clickbuttons()   
  })  


  it('deve clicar em todos os botões EDIT da grid apresentada.', () => {
    for (let rowIndex = 1; rowIndex < 10; rowIndex++) {
      cy.clickEditButtonInRow(rowIndex);
    }
  }) 


  it('deve clicar em todos os botões DELETE da grid apresentada.', () => {
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      cy.clickDeleteButtonInRow(rowIndex);
    }
  })
})