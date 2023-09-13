// Arquivo: seu_teste_spec.js

describe("Segunda Parte do desafio com cenários de uma API", () => {
  it('CT_004: Acessa o endereço e realiza busca "GET" de um usuário na api', () => {  
    // Escolha o id de usuário que deseja consultar
    const userIdToGet = 1;
    cy.customGetUsers(userIdToGet)
    cy.get('@response').should((response)=>{
      expect(response.status).to.equal(200),        
      expect(response.body.name).to.equal('Leanne Graham')    
      expect(response.body.username).to.equal('Bret')
      expect(response.body.email).to.equal('Sincere@april.biz')    
    })    
  });
  

  it('CT_005: Acessar o endereço e realizar requisições "POST" de um novo usuário na api.', () => {
    const newUser = {
      name: 'Juliano Koslowisk',
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
    });
  });

  it('CT_006: Acessar o endereço e realizar requisições "PUT" em algum usuário da API.', () => {
    const userId = 5; // ID do usuário que você deseja atualizar
    const updatedUserData = {
      id: userId,
      name: 'NovoNome',
      username: 'novo_username',
      email: 'novo_email@example.com',
    }; 
      
    cy.updateUser(userId, updatedUserData)
      .then((response) => {
        expect(response.status).to.equal(200); 
        expect(response.body).to.be.an('object');
        expect(response.body.name).to.equal(updatedUserData.name);
        expect(response.body.username).to.equal(updatedUserData.username);
        expect(response.body.email).to.equal(updatedUserData.email); 
      });
  });

  
    it('CT_007: Acessar o endereço e realizar requisições "DELETE" em algum usuário da API.', () => {
      // Escolha o id de usuário que deseja deletar
            const userIdToDelete = 5;
      // Comando personalizado para deletar o usuário
      cy.deleteUserById(userIdToDelete)
      .then((response) => {
        expect(response.status).to.equal(200); // Verifica se a deleção foi bem-sucedida
      });     
    });  
});