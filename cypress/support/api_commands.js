// Arquivo: commands.js
const API_URL = Cypress.env('API_BASE_URL')

Cypress.Commands.add("customGetUsers", (userId) => {
    cy.api({
        method: 'GET',
        url: `${API_URL}/${userId}`,
        failOnStatusCode: false,
    }).as('response')   
})


Cypress.Commands.add('createUser', (userData) => {    
    cy.api({
      method: 'POST',
      url: `${API_URL}`,
      body: userData,
    });
  });

  Cypress.Commands.add('updateUser', (userId, userData) => {
    cy.api({
      method: 'PUT',
      url: `${API_URL}/${userId}`,
      body: userData,
    });
  });

  Cypress.Commands.add("deleteUserById", (userId) => {
    cy.api({
      method: "DELETE",
      url: `${API_URL}/${userId}`,
    })
  }); 