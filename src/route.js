// importando o express para esse arquivo 
const express = require('express');

// Importando o controller RoomControler
const RoomController = require('./controllers/RoomController');

// Importando nosso controller Question Controller 
const QuestionController = require('./controllers/QuestionController');

// Criando a rota também para o envio das informações de marcar como lida e excluir
const route = express.Router();

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/createPass', (req, res) => res.render('index', {page: 'createPass'}));
route.get('/room/:room', (req, res) => res.render('room'));



// Formato que o formulário de dentro da modal tem que passar a informação;
route.post('/question/:room/:question/:action', QuestionController.index);
route.post('/create-room', RoomController.create);

// Exportando as routes
module.exports = route;
