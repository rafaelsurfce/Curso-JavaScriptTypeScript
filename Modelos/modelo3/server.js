require('dotenv').config();            //variáveis de ambiente localizado no arquivo .env
const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); //conexão e modelagem com o banco de dados
const route = require('./routes');    // rotas da aplicação
const path = require('path');         // trabalhar com caminhos
const helmet = require('helmet');     // recomendação express
const csurf = require('csurf');       // tokens para forms

const session = require('express-session'); //identifica navegador de um user
const MongoStore = require('connect-mongo'); //sessões serão salvas no BD
const flash = require('connect-flash');      // mensagens autodestrutivas de seção

//Middleware são funções executadas nas rotas antes, durante e depois
const {meuMiddleware, checkCsurfError, csrfMiddleware} = require ('./src/middlewares/middleware');

//conexão de banco de dados MONGODB
mongoose.connect(process.env.CONNECTIONSTRING).then(()=>{
    console.log("BD conectado!");  //conexão realizada
    app.emit('pronto');            //emite um 'pronto' ao app
}).catch(e => console.log(e));



app.use(express.urlencoded({extended: true})); //pode postar formularios para dentro da aplicação
app.use(express.json());                       //permite trabalhar com formulários em JSON     
app.use(helmet());                             
app.use(csurf());

app.use(express.static(path.resolve(__dirname, 'public'))); //arquivos estaticos (imagens, etc)
app.set('views', path.resolve(__dirname, 'src', 'views'));  //
app.set('view engine', 'ejs');

//configurações de sessões
const sessionOptions = session({
    store: MongoStore.create({mongoUrl:process.env.CONNECTIONSTRING}),
    secret: 'wfsfqgytafca25149fsw',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7, //tempo de duração do cookie = 7 dias
        httpOnly: true
    },
});

app.use(sessionOptions);
app.use(flash());


//minhas middlewares 
//app.use(meuMiddleware);
//app.use(checkCsurfError);
//app.use(csrfMiddleware);

app.use(route);             //usa as rotas declaradas no arquivo routes

// aplicativo escuta o pronto e executa o servidor express
app.on('pronto', ()=>{
    app.listen(3000, () => {
        console.log('Servidor executando');
        console.log('http://localhost:3000')
    });
})
