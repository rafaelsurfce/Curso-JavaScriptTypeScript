const mongoose = require('mongoose');
const validator = require('validator');

const contatoSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    sobrenome: { type: String, require: false, default: "" },
    email: { type: String, require: false, default: "" },
    tipoEmail: { type: String, require: false },
    telefone: { type: String, require: false, default: "" },
    tipoTelefone: { type: String, require: false },
    ruaEndereco: { type: String, require: false, default: "" },
    numeroEndereco: { type: String, require: false, default: "" },
    bairroEndereco: { type: String, require: false, default: "" },
    cidadeEndereco: { type: String, require: false, default: "" },
    cidadeUF: { type: String, require: false, default: "" },
    criadoEm: { type: Date, default: Date.now },
});

const cadastroContato = mongoose.model('contato', contatoSchema);

class Contato {
    constructor(data) {
        this.data = data;
        this.errors = [];
        this.contato = null;
    };

    async registre() {
        this.valida();
        if (this.errors.length > 0) return;
        this.contato = await cadastroContato.create(this.data);
    };

    async edit(id) {
        if (typeof id !== 'string') return;
        this.valida();
        if (this.errors.length > 0) return;
        this.contato = await cadastroContato.findByIdAndUpdate(id, this.data, { new: true });               //faz uma atualização a partir do ID do dado
    };

    valida() {
        for (const key in this.data) {
            if (typeof this.data[key] !== 'string') {                                                       //verifica se o dados recebido é do tipo string, caso não seja é resetado
                this.data[key] = '';
            }
        }

        if (this.data.email && !validator.isEmail(this.data.email)) this.errors.push('E-mail inválido');   //verifica se o email foi enviado e se foi um válido  
        if (!this.data.nome) this.errors.push('É necessário informar o nome do Contato');
        if (!this.data.email && !this.data.telefone) {
            this.errors.push('Pelo menos um contato precisa ser enviado, e-mail ou telefone.');
        }

        this.data = {
            nome: this.data.nome,
            sobrenome: this.data.sobrenome,
            email: this.data.email,
            tipoEmail: this.data.tipoEmail,
            telefone: this.data.telefone,
            tipoTelefone: this.data.tipoTelefone,
            ruaEndereco: this.data.rua,
            numeroEndereco: this.data.numero,
            bairroEndereco: this.data.bairro,
            cidadeEndereco: this.data.cidade,
            cidadeUF: this.data.estado
        }

    }

    //método estático(não precisa instanciar o objeto)
    static async buscarId(id) {
        if (typeof id !== 'string') return;
        const contato = await cadastroContato.findById(id); //consulta contato por ID
        return contato;
    };

    static async listar(){
        const contatos = await cadastroContato.find().sort({ criadoEm: -1});
        return contatos;
    };

    static async deletar(id){
        if(typeof id !== 'string' ) return;
        const contato = await cadastroContato.findOneAndDelete({_id: id});
        return contato;
    }
}



module.exports = Contato;