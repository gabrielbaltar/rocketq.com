// importando o express para esse arquivo 

const express = require('express');

// Importando nosso controller Question Controller 

const QuestionController = require('./controllers/QuestionController');

// Criando a rota também para o envio das informações de marcar como lida e excluir

const route = express.Router();

route.get('/', (req, res) => res.render("index"));
route.get('/room', (req, res) => res.render('room'));
route.get('/createPass', (req, res) => res.render('createPass'));



// Formato que o formulário de dentro da modal tem que passar a informação;
route.post('/room/:room/:question/:action', QuestionController.index);

// Exportando as routes

module.exports = route;
