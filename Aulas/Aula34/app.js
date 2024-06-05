class Caneta{
    constructor(cor, ponta){
        this.cor = cor;
        this.ponta = ponta;
        this.tampa = true;
        this.carga = 10;
    }

    tampado(){
        this.tampa === true ? this.tampa = false: this.tampa = true;
    }

    escreva(){
        if(this.tampa === true)  return console.log('ERROR!!!! CANETA ESTÁ TAMPADA, OU SEM TINTA');
        console.log('Caneta está escrevendo');
        this.carga -= 1;
    }
    static recarregar(){
        console.log("Caneta Recarregada");
    }

}


const caneta = new Caneta ('preta', 0.7);
caneta.tampado();

for(i = 5; i > 0; i--){
    caneta.escreva();
}
Caneta.recarregar();
for(i = 5; i > 0; i--){
    caneta.escreva();
}

