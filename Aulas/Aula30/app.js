//Prototypes

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
};

const pessoa1 = new Pessoa('Diego', 'Lima');
const pessoa2 = new Pessoa('Mercia', 'Lima');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa1.nomeCompleto());
