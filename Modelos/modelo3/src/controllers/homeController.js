const HomeModel = require('../models/homeModels');


exports.paginaInicial = function (req, res){
    res.render('index');    //renderiza os views
}

exports.cadastre = function (req, res){
    res.send('Rota post');
}