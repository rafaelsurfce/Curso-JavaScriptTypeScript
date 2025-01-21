const Usuario = require('../models/usuarios');


exports.index = (req, res) => {
    res.render('login');
};

exports.autenticacao = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.autenticar();
        if (usuario.errors.length > 0) {
            req.flash('errors', usuario.errors);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }
        req.flash('sucess', 'Usuário logado com sucesso.');
        req.session.user = usuario.user;
        req.session.save(function () {
            return res.redirect('/home');
        });
    } catch (error) {
        console.log(error);
    }
};