require('dotenv').config();                                             //variáveis de ambiente localizado no arquivo .env
const express = require('express');
const app = express();
const mongoose = require('mongoose');                                   //
const route = require('./routes');
const path = require('path');
const session = require('express-session');                             //identificar o navegador do user
const MongoStore = require('connect-mongo');                            //salvar seções em base de dados
const flash = require('connect-flash');
//const helmet = require('helmet');
const csrf = require('csurf');                                          //token para forms
const {checkCsrf, crsfMiddleware, middlewareGlobal} = require('./src/middlewares/middleware');



mongoose.connect(process.env.CONNECTIONBD).then(() => {
    console.log("Conectado ao DB");
    app.emit('pronto');
}).catch((e) => {
    console.log("falha na conexão");
    console.log(e);
});


//app.use(helmet());
app.use(express.urlencoded({extended:true}));                           //tratar body da requisições
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));


const sessionOptions = session({
    secret: 'nfneunf52954egseg',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONBD}),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 30,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));     
app.set('view engine', 'ejs');



app.use(middlewareGlobal);
app.use(route);

app.use(csrf());
app.use(checkCsrf);
app.use(crsfMiddleware);

app.on('pronto', ()=>{
    app.listen(2453,()=>{
        console.log("Acesse: http://localhost:2453");
    });
});
