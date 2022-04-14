// importando o express para esse arquivo 

const express = require('express');

// Criando a rota

const route = express.Router();

route.get('/', (req, res) => res.render("index"));

// Exportando as routes

module.exports = route;