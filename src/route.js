// importando o express para esse arquivo 

const express = require('express');

// Criando a rota

const route = express.Router();

route.get('/', (req, res) => res.render("index"));
route.get('/room', (req, res) => res.render('room'));
route.get('/createPass', (req, res) => res.render('createPass'));

// Exportando as routes

module.exports = route;