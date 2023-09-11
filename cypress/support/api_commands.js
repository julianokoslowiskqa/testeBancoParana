// Arquivo: commands.js
const API_URL = Cypress.env('API_BASE_URL')

Cypress.Commands.add("customGetUsers", () => {
    cy.api({
        method: 'GET',
        url: `${API_URL}/1`,
        failOnStatusCode: false,
    }).as('response')
    cy.get('@response').should((response)=>{
        expect(response.status).to.equal(200),        
        expect(response.body.name).to.equal('Leanne Graham')    
        expect(response.body.username).to.equal('Bret')
        expect(response.body.email).to.equal('Sincere@april.biz')    
  })
})


Cypress.Commands.add('createUser', (userData) => {    
    cy.api({
      method: 'POST',
      url: `${API_URL}`,
      body: userData,
    });
  });


  Cypress.Commands.add('updateUser', (userId, updatedUserData) => {
    cy.api({
      method: 'PUT',
      url: `${API_URL}/2`,
      body: updatedUserData,
    });
  });


  Cypress.Commands.add('deleteUser', (userId) => {
    // Envie uma solicitação DELETE para o endpoint com o ID do usuário
    cy.api({
      method: 'DELETE',
      url: `${API_URL}/2`
    }).then((response) => {
      // Verifique se a solicitação foi bem-sucedida (status 200)
      expect(response.status).to.equal(200);
    });
  });  