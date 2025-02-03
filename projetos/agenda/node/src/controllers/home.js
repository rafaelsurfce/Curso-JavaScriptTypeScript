const contato = require('../models/contato');

exports.paginaHome = async (req, res) =>{
    try {
        const contatos = await contato.listar();
        res.render('home', {contatos});
        //if(req.session.user) return res.render('home');
        //return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.render('404');
    }


}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}
