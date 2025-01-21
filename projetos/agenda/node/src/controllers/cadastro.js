const Usuario = require('../models/usuarios');

exports.paginaInicial = (req, res) => {
    res.render('userCadastro');
};

exports.cadastraUser = async (req, res)=>{

    try{
        const usuario = new Usuario(req.body);
        await usuario.cadastraUsuario();
    
        if(usuario.errors.length > 0){
            req.flash('errors', usuario.errors);
            req.session.save(function(){
                return res.redirect('back');
            });
            return;
        }
        req.flash('sucess', 'Usuário criado com sucesso.');
        req.session.save(function(){
            return res.redirect('back');
        });
        


        
    }catch(e){
        console.log(e);
        return res.render('404');
    }

};