exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.sucess = req.flash('sucess');
    res.locals.user = req.session.user;
    next();
};


exports.checkCsrf = (error, req, res, next) => {
    if(error){
        console.log(error);
        return res.render('404');
    }
    next();
    
};

exports.crsfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = (req, res, next) => {
    if(!req.session.user){
        req.flash('errors', 'Você precisa fazer login');
        req.session.save(() =>{
            res.redirect('/');
        });
        return;
    }
    next();

}
