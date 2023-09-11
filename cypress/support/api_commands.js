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


  