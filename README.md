# Desafio Banco Paraná
Projeto de automação de teste Web com Javscript e Cypress

## Descrição
Este projeto é uma estrutura de teste automatizado com o objetivo feito para testar aplicação Web. O objetivo deste projeto é garantir as funcionalidades da página esteja funcionando corretamente e de acordo com as especificações.

## Pré-requisitos
* Baixar as ferramentas que serão necessárias para rodar o framweork
* `Node.js` [Link para download](https://nodejs.org/pt-br/download)
* `Vscode  `[Link para download](https://code.visualstudio.com/download)


## Instalação
* Clone / Baixe o projeto em seu diretório local.
* Abra o prompt de comando e navegue até o local do projeto baixado.
* Execute os seguintes comandos npm para instalar o cypress 
* `npm install cypress` :- Para instalar o cypress na máquina juntamente com as dependências.

## Executando os testes
* Execute o comando `npm run cypress:open` no seu prompt de comando. Este comando executará os testes localmente abrindo o browser. Como será primeira vez ele pode demorar um pouquinho pois ele vai criar alguns arquivos internos.

* Execute o comando `npm run cypress:run ` no seu prompt de comando. Este executará os testes localmente em modo headless (sem interação visual). Essa execução tende a ser mais rápida pois é feita de forma interna, nao tendo necessidade de abrir o navegador.


## Verificar o report gerado dos testes
* Execute o comando `npm run cypress:report` no seu prompt de comando. Executará os testes localmente em modo headless. E irá exportar os relatórios para nuvem, para visualizar o histórico das execuções entre no link a seguir.

* `Relatório Cloud `[Link do relatório](https://cloud.cypress.io/projects/9cpkcx/runs)

* Dentro do repositório na aba "Actions" foi feito a configuração CI/CD dos testes, usando paralelismo (executando os testes simultaneamente em "três" navegadores), a cada atualização de código essa esteira será ativada.

### Observações
1. Foi usado o plugin "cypress-plugin-api" que mostra com maior clareza quais requisições foram feitas nos testes de APIS
2. O Arquivo "1.Cenários de Testes_RespostasCase" contém alguns casos de testes iniciais + as resposta de 1 a 5 escritas . 
3. O Arquivo "2.Cenários de Testes_Automatizados" contém os cenários que foram automatizados.

## Autor
Juliano Koslowisk Martins dos Reis