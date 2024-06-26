const express = require('express');
const route = express.Router();
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');

route.get('/', home.paginaInicial);
route.get('/cadastro', cadastro.paginaInicial);


module.exports = route;
