module.exports.middlewareGlobal = (req, res, next) =>{
    console.log('Middleware Global');
    next();
}

module.exports.checkCsurfError = (error, req, res, next) => {
        if(error && error.code === 'EBADCSRFTOKEN'){
            res.send('Error CRSF.');
            next();
        }
}

module.exports.csrfMiddleware = function (req, res, next){
    res.locals.csrfToken = req.csrfToken();
    next();
}