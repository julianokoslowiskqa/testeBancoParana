// Arquivo: seu_teste_spec.js

describe("Testes na API JSONPlaceholder", () => {
  it("Deve realizar operações CRUD em usuários", () => {
    // GET
    cy.customGetUsers().then((users) => {
      expect(users.length).to.be.greaterThan(0);
    });

    // POST
    const newUser = {
      name: "Novo Usuário",
      email: "novousuario@example.com",
    };
    cy.customPostUser(newUser).then((user) => {
      expect(user.id).to.exist;
    });

    // PUT
    const updatedUser = {
      name: "Usuário Atualizado",
      email: "atualizado@example.com",
    };
    cy.customPutUser(1, updatedUser).then((user) => {
      expect(user.name).to.equal(updatedUser.name);
      expect(user.email).to.equal(updatedUser.email);
    });

    // DELETE
    cy.customDeleteUser(1);

    // Verifica se o usuário foi excluído com sucesso
    cy.customGetUsers().then((users) => {
      const deletedUser = users.find((user) => user.id === 1);
      expect(deletedUser).to.be.undefined;
    });
  });
});
