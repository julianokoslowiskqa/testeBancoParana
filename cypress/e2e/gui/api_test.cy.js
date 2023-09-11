// Arquivo: seu_teste_spec.js

describe("Fazer requisições Get Post Put e Delete e verificar as informações ", () => {
  it("Faz uma requisição GET em um usuário e verifica os dados obtidos", () => {
    // GET
    cy.customGetUsers()
  });
  

  it('Faz uma requisisão POST com dados do usuário', () => {
    const newUser = {
      name: 'Juliano Koslowi',
      username: 'julianokoslowisk',
      email: 'juliano@example.com',
    };

    cy.createUser(newUser)
      .then((response) => {
      expect(response.status).to.equal(201); 
      expect(response.body).to.be.an('object'); 
      expect(response.body.name).to.equal(newUser.name);
      expect(response.body.username).to.equal(newUser.username);
      expect(response.body.email).to.equal(newUser.email);
    })
}) 

})