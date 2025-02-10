const Usuario = require('../models/usuarios');

exports.paginaInicial = (req, res) => {
    res.render('userCadastro');
};

exports.cadastraUser = async (req, res) => {

    try {
        const usuario = new Usuario(req.body);
        await usuario.cadastraUsuario();

        if (usuario.errors.length > 0) {                                            //verifica se não possui erros na array de erros
            req.flash('errors', usuario.errors);                                    //cria a msg de erro do array nas flash msgs
            req.session.save(function () {                                          //salva a session 
                return res.redirect('back');
            });
            return;
        }
        req.flash('sucess', 'Usuário criado com sucesso.');                        //cria a msg de erro do array nas flash msgs 
        req.session.save(function () {                                              //salva a session
            return res.redirect('back');
        });




    } catch (e) {
        console.log(e);
        return res.render('404');
    }

};