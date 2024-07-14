const express = require('express');
const route = express.Router();
const home = require('./src/controllers/homeController');
const contato = require('./src/controllers/contatoController');

route.get('/', home.paginaInicial);
route.post('/', home.cadastre);


route.get('/contato', contato.paginaInicial);


module.exports = route;
