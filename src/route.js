// importando o express para esse arquivo 
const express = require('express');

// Importando nosso controller Question Controller 
const QuestionController = require('./controllers/QuestionController');

// Importando o controller RoomControler
const RoomController = require('./controllers/RoomController');

// Criando a rota também para o envio das informações de marcar como lida e excluir
const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/createPass', (req, res) => res.render('index', {page: 'createPass'}));

route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open);

route.post('/question/create', QuestionController.create);
route.post('/question/:room/:question/:action', QuestionController.index);

// Exportando as routes
module.exports = route;
