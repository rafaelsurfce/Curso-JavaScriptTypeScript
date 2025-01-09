const express = require('express');
const route = express.Router();
const index = require('./src/controllers');
const cadastro = require('./src/controllers/cadastro');
const home = require('./src/controllers/home');
const newContato = require('./src/controllers/newContato')

route.get('/', index.paginaInicial);
route.post('/authentication', index.autenticacao)
route.get('/cadastro', cadastro.paginaInicial);
route.post('cadastrarUser', cadastro.cadastraUser);
route.get('/home', home.paginaHome);
route.get('/novoContato', newContato.contato);
route.post('/cadastrarContato', newContato.cadastraContato);



module.exports = route;
