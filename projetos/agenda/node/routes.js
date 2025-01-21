const express = require('express');
const route = express.Router();
const paginaInicial = require('./src/controllers/paginaInicial');
const cadastro = require('./src/controllers/cadastro');
const home = require('./src/controllers/home');
const newContato = require('./src/controllers/newContato')

//rota index
route.get('/', paginaInicial.index);
route.post('/autenticacao', paginaInicial.autenticacao);




route.get('/cadastro', cadastro.paginaInicial);
route.post('/cadastro/cadastrarUser', cadastro.cadastraUser);


route.get('/home', home.paginaHome);
route.get('/novoContato', newContato.contato);
route.post('/cadastrarContato', newContato.cadastraContato);



module.exports = route;
