//defineProperty - defineProperties


function Pessoa(nome, sobrenome, cpf){
    //define visibilidade das propriedades
    Object.defineProperty(this, 'cpf', {
        enumerable: false, //mostra a chave
        value: cpf, // valor
        writable: false, //NÃO PODER SER ALTERADO
        configurable: false //PODE APAGAR OU RECONFIGURAR A CHAVE
    });
    //define todas as propriedades de várias chaves
    Object.defineProperties(this, {
        nome: {
            enumerable: false, //mostra a chave
            value: cpf, // valor
            writable: false, //NÃO PODER SER ALTERADO
            configurable: false //PODE APAGAR OU RECONFIGURAR A CHAVE
        },
        sobrenome: {
            enumerable: false, //mostra a chave
            value: cpf, // valor
            writable: false, //NÃO PODER SER ALTERADO
            configurable: false //PODE APAGAR OU RECONFIGURAR A CHAVE
        },

    });
}

const pessoa3 = new Pessoa('Renata', 'Cavalcante', '01234679815');
pessoa3.cpf = '10987654321';
console.log(pessoa3);


