const Contato = require('../models/contato');

exports.contato = (req, res) => {

    res.render('newContato', {
        contato: {}                                 //envia um contato vazio
    });

    /*
    if(req.session.user) return res.render('newContato');
    return res.redirect('/');
    //possibilidade de rederização sem middlewares 
    */
};

exports.registre = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.registre();
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucess', 'Contato cadastrado com sucesso');
        req.session.save(() => { return res.redirect(`/novoContato/${contato.contato._id}`) }); //objeto.atributo.chaveAtributo
        return;
    } catch (e) {
        console.log(e);
        return res.render('404');
    }

};


exports.editContato = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404'); //verifica se foi enviado o parâmetro "id" na URL
        const contato = await Contato.buscarId(req.params.id);  //busca o contato por parâmetro do ID
        if (!contato) return res.render('404');
        res.render('newContato', { contato });                  //manda o contato buscado
    } catch (error) {
        console.log(error);
        return res.render('404');
    }

};

exports.edit = async (req, res) => {
    try {
        if (!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }
        req.flash('sucess', 'Contato editado com sucesso');
        req.session.save(() => { res.redirect(`/novoContato/${contato.contato._id}`) }); //objeto.atributo.chaveAtributo
        return;

    } catch (error) {
        console.log(error);
        res.render('404');
    }
};

exports.deletarContanto = async (req, res) => {

    try {
        if (!req.params.id) return res.render('404');                               
        const contato = await Contato.deletar(req.params.id);
        if (!contato) return res.render('404');

        req.flash('success', 'Contato apagado com sucesso.');
        req.session.save(() => res.redirect('back'));
        return;

    } catch (error) {
        console.log(error);
        return res.render('404');
    }

};

