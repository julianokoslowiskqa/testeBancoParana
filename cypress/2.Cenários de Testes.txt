Funcionalidade: PageChallengingDOM
CT_001 : Acessar a aplicação e clicar nos botões da tela.

DADO que o usuário/automação acesse a página "https://the-internet.herokuapp.com/challenging_dom"
QUANDO a mesma carregar por completo os componentes
ENTÂO a automação/usuário deverá clicar nos três botões apresentados na tela.

Funcionalidade: PageChallengingDOM
CT_002: Acessar a aplicação e clicar em todos os botões "Edit" apresentados na tela.

DADO que o usuário/automação acesse a página "https://the-internet.herokuapp.com/challenging_dom"
QUANDO a mesma carregar por completo os componentes
ENTAO a automação/usuário deverá efetuar clique em todos os botões "Edit" da tela.

Funcionalidade: PageChallengingDOM
CT_003: Acessar a aplicação e clicar em todos os botões "Delete" apresentados na tela.

DADO que o usuário/automação acesse a página "https://the-internet.herokuapp.com/challenging_dom"
QUANDO a mesma carregar por completo os componentes
ENTAO a automação/usuário deverá efetuar clique em todos os botões "Delete" da tela.

Funcionalidade: APIjsonplaceholderUsers
CT_004: Acessar o endereço e realiza busca "GET" de um usuário na api

DADO que o usuário/automação acesse a página "https://jsonplaceholder.typicode.com/users"
QUANDO o usuário realizar a requisição de método "GET" para um userId específico
ENTÂO a automação deverá confirmar status 200 da request e validar os dados do user obtidos na consulta.


Funcionalidade: APIjsonplaceholderUsers
CT_005: Acessar o endereço e realizar requisições "POST" de um novo usuário na api.

DADO que o usuário/automação acesse a página "https://jsonplaceholder.typicode.com/users"
QUANDO o mesmo realizar uma requisição de método "POST"  para um userId específico
ENTÂO a automação deverá verificar o status 201 da ação e verificar se os dados ficaram corretos.

Funcionalidade: APIjsonplaceholderUsers
CT_006: Acessar o endereço e realizar requisições "PUT" em algum usuário da API.

DADO que o usuário acesse a página "https://jsonplaceholder.typicode.com/users"
QUANDO o usuário realizar a requisição de método "PUT"  para um userId específico
ENTÂO a automação deverá alterar as informações, conferir o status 200 e verificar se os dados ficaram corretos.

Funcionalidade: APIjsonplaceholderUsers
CT_007: Acessar o endereço e realizar requisições "DELETE" em algum usuário da API.

DADO que o usuário acesse a página "https://jsonplaceholder.typicode.com/users"
QUANDO o usuário realizar a requisição de método "DELETE" para um userId específico
ENTÂO a automação deverá deletar as informaçõese  e conferir o status 200 da requisição.