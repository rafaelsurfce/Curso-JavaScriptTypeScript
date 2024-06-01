function ContaBancaria(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}


ContaBancaria.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();

};

ContaBancaria.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();

};
ContaBancaria.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite){
    ContaBancaria.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(ContaBancaria.prototype); //herda os prototype das heranças 
ContaCorrente.prototype.constructor = ContaCorrente; //define o construtor como o da conta corrente


ContaCorrente.prototype.sacar = function (valor) {
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca(agencia, conta, saldo){
    ContaBancaria.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(ContaBancaria.prototype); //herda os prototype das heranças 
ContaPoupanca.prototype.constructor = ContaPoupanca; //define o construtor como o da conta corrente


const cc = new ContaCorrente(735, 12120, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

const cp = new ContaPoupanca(800, 11230, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);