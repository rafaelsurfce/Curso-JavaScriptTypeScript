exports.checkCsrf = (error, req, res, next) => {
    if(error && 'EBADCSRFTOKEN' === error.code){
        res.render('404');
    }
};

exports.crsfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};