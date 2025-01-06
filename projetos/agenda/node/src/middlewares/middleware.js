exports.checkCsrf = (error, req, res, next) => {
    if(error && 'EBADCSRFTOKEN' === error.code){
        return res.render('404');
    }
    next();
    
};

exports.crsfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};