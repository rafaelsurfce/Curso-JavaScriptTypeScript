// objeto literal
const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Lima',
};
console.log(pessoa.nome);//notação ponto
console.log(pessoa['sobrenome']); //notação colchetes

new Object();
const animal = new Object();
animal.nome = 'Thor';
animal.tipo = 'Cachorro';
animal.idade = 4;

animal.dataDeNascimento = function(){
    dataAtual = new Date(); 
    return dataAtual.getFullYear() - this.idade;
}
console.log(animal.nome);
console.log(animal.tipo);
console.log(animal.dataDeNascimento());
delete animal.tipo; //deleta um atributo

//Factory Functions
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${nome} ${sobrenome}`;
        }
    };
}

const pessoa2 = criaPessoa('José', 'Lima');
console.log(pessoa2.nomeCompleto());


//Conscructor functions
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa3 = new Pessoa('Renata', 'Cavalcante');
Object.freeze(pessoa3); //trava o objeto contra alterações
console.log(pessoa3);



