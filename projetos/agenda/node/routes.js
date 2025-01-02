const express = require('express');
const route = express.Router();
const index = require('./src/controllers');
const cadastro = require('./src/controllers/cadastro');
const home = require('./src/controllers/home');

route.get('/', index.paginaInicial);
route.get('/cadastro', cadastro.paginaInicial);
route.get('/home', home.paginaHome);
//route.get('/home', home)


module.exports = route;
