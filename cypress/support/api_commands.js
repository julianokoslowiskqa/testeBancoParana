// Arquivo: commands.js
Cypress.Commands.add("customGetUsers", () => {
    cy.api("GET", "https://jsonplaceholder.typicode.com/users")
      .its("body")
      .then((response) => {
        return response;
      });
  });

  