function Pessoa(nome, sobrenome, cpf){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //define visibilidade da propriedade
    Object.defineProperty(this, 'cpf', {
        enumerable: false, //mostra a chave
        configurable: true, //PODE APAGAR OU RECONFIGURAR A CHAVE
        get: function(){
            return cpf;
        },
        set: function(newValor){
            cpf = newValor;
        }
    });
}

const pessoa3 = new Pessoa('Renata', 'Cavalcante', '01234679815');
pessoa3.cpf = 33344455579;
console.log(pessoa3.cpf);
console.log(pessoa3);
