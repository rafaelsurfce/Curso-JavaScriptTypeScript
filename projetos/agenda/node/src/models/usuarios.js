const mongoose = require('mongoose');
const validator = require('validator'); //utilizado para validar dados de entrada;
const bcryptjs = require('bcryptjs'); //usado para criptografar dados

const usuarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}   
});

const cadastroUsuario = mongoose.model('usuario', usuarioSchema);   //Criando a tabela de usuarios


class Usuario {
    constructor(data){
        this.data = data;
        this.errors = [];
        this.user = null;
    }

    async cadastraUsuario(){
        await this.validar();
        if(this.errors.length > 0) return; //verifica se não tem erros nos dados
        const salt = bcryptjs.genSaltSync();
        this.data.password = bcryptjs.hashSync(this.data.password, salt); //criptografa a senha
        this.user = await cadastroUsuario.create(this.data);    //adiciona os dados a tabela
    }

    async autenticar(){
        const{email, password} =  this.data;
        this.user = await cadastroUsuario.findOne({email: email});
        if(!this.user){
            this.errors.push('Usuário não encontrado')
            return;
        };
        if(!bcryptjs.compareSync(password, this.user.password)){
            this.errors.push('Senha incorreta');
            return;
        }
    }

    async validar(){
        for(const key in this.data){
            if(typeof this.data[key] !== 'string'){     //verifica se o dados recebido é do tipo string, caso não seja é resetado
                this.data[key] = '';
            }
        }

        this.data = {                                   //limpa os dados para retirar o token
            nome: this.data.nome,
            sobrenome: this.data.sobrenome,
            email: this.data.email,
            username: this.data.username,
            password: this.data.password
        }

        if(!validator.isEmail(this.data.email)) this.errors.push('E-mail inválido');
        if(this.data.password.length < 3 || this.data.password < 50) this.errors.push("Senha precisa ter entre 3 a 50 caracteres");
        const user = await cadastroUsuario.findOne({username: this.data.username});
        if(user) this.errors.push('Usuário já existe');
    }
}

module.exports = Usuario;