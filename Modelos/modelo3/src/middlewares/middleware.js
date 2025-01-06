module.exports.middlewareGlobal = (req, res, next) =>{
    console.log('Middleware Global');
    next();
}

module.exports.checkCsurfError = (error, req, res, next) => {
        if(error && error.code === 'EBADCSRFTOKEN'){
            return res.send('Error BAD CRSF.'); 
        }
}

module.exports.csrfMiddleware = function (req, res, next){
    res.locals.csrfToken = req.csrfToken();
    next();
}