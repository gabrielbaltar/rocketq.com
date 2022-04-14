
// Importando o express do módulo 
const express = require('express');
// Importando o caminho do arquivo das rotas
const route = require('./route');
// modulo de caminho path para o EJS
const path = require('path');

// Iniciar o express e salvando na variável server OBS: devemos declarar as variáveis antes de usa-las para não dar erro no node
 
const server = express();

// Configurando o EJS 

server.set('view engine', 'ejs');

// Usar pasta public para conteudos que serao acessados de qualquer arquivo do projeto

server.use(express.static('public'));

server.set('views', path.join(__dirname, 'views'));

// Declarando o arquivo rotas 

server.use(route);

// Salvando o server na porta 3000

server.listen(3000, () => console.log("Rodando"));


