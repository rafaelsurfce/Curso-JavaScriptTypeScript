const express = require('express');
const mongoose = require('mongoose');                //
const route = require('./routes');
const path = require('path');
const dotenv = require('dotenv/config');                                //variáveis ambientes do sistema
const session = require('express-session');                             //identificar o navegador do user
const MongoStore = require('connect-mongo');                            //salvar seções em base de dados
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');                                          //token para forms
const {checkCsrf, crsfMiddleware} = require('./src/middlewares');

const app = express();
app.use(csrf());
app.use(helmet);
app.use(sessionOptions);
app.use(flash());
app.use(express.urlencoded({extended:true}));                           //tratar body da requisições
app.use(express.json());
app.use(route);
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(checkCsrf);
app.use(crsfMiddleware);        
app.set('views', path.resolve(__dirname, 'src', 'views'));     
app.set('view engine', 'ejs');

mongoose.connect(process.env.CONNECTIONBD).then(() => {
    console.log("Conectado ao DB");
    app.emit('pronto');
}).catch((e) => {
    console.log("falha na conexão");
});

const sessionOptions = session({
    secret: 'Session Inicial',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONBD}),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 30,
        httpOnly: true
    }
});


app.on('pronto', ()=>{
    app.listen(3000,()=>{
        console.log("Acesse: http://localhost:3000");
    });
});
