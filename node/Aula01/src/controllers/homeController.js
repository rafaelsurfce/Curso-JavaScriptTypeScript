exports.paginaInicial = function (req, res){
    res.render('index')
}

exports.cadastre = function (req, res){
    res.send('Rota post');
}