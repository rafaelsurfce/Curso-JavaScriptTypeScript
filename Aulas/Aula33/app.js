class Pessoa {
    constructor(nome, sobronome){
        this._nome = nome;
        this.sobrenome = sobronome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

    
    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this.nome = nome;
    }

}

class Funcionario extends Pessoa{
    constructor(nome, sobrenome, cpf){
        super(nome, sobrenome);
        this.cpf = cpf;

    }

}



const p1 = new Funcionario('Rafael', 'Lima', '07017828380');

console.log(p1.nome);