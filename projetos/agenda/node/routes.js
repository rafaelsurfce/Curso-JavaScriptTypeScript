const express = require('express');
const route = express.Router();
const paginaInicial = require('./src/controllers/paginaInicial');
const cadastro = require('./src/controllers/cadastro');
const home = require('./src/controllers/home');
const newContato = require('./src/controllers/newContato')
const {loginRequired} = require('./src/middlewares/middleware');


//rota index
route.get('/', paginaInicial.index);
route.post('/autenticacao', paginaInicial.autenticacao);




route.get('/cadastro', cadastro.paginaInicial);
route.post('/cadastro/cadastrarUser', cadastro.cadastraUser);

//Rotas home
route.get('/home', loginRequired, home.paginaHome);
route.get('/home/logout', home.logout);

//Rotas de Contato
route.get('/novoContato', loginRequired, newContato.contato);
route.post('/cadastrarContato', newContato.registre);
route.get('/novoContato/:id', loginRequired, newContato.editContato);
route.post('/novoContato/edit/:id', loginRequired, newContato.edit);
route.get('/deletarContato/:id', loginRequired, newContato.deletarContanto);


module.exports = route;
