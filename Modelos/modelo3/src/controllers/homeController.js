const HomeModel = require('../models/homeModels');


exports.paginaInicial = function (req, res){
    res.render('index', {
        titulo: 'Esse é o título da página'
    });    //renderiza os views
}

exports.cadastre = function (req, res){
    res.send('Rota post');
}