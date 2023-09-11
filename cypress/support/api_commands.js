// Arquivo: commands.js
const API_URL = Cypress.env('API_BASE_URL')


Cypress.Commands.add("customGetUsers", () => {
    cy.api("GET", "https://jsonplaceholder.typicode.com/users")
      .its("body")
      .then((response) => {
        return response;
      });
  });

  