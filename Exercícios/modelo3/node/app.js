const express = require('express');
const app = express();
const route = require('./routes');
const path = require('path')


app.use(express.urlencoded({extended:true})); //tratar body da requisições
app.use(route);
app.use(express.static(path.resolve(__dirname, 'public')));        
app.set('views', path.resolve(__dirname, 'src', 'views'));     
app.set('view engine', 'ejs');

app.listen(3000,()=>{
    console.log("Acesse: http://localhost:3000");
});