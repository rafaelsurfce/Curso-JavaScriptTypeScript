//Prototypes

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;


}

Produto.prototype.aumento = function(valor){
    return this.preço += valor;
};

Produto.prototype.desconto = function(valor){
    return this.preço -= valor;
};

function Camisa(nome, preco, cor){
    this.cor = cor;
    Produto.call(this, nome, preco);
}

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco)
    this.material = material;
}

Caneca.prototype.constructor = Object.create(Produto.prototype);
Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;
Caneca.prototype.constructor = Caneca


Caneca.prototype.taxa = function(taxa){
    this.valor += (taxa*valor) / 100
}

const produto1 = new Camisa('Regata', '10', 'azul');
const produto2 = new Produto('Lápis', '2');
const produto3 = new Caneca('Mágica', 40, 'porcelana');


console.log(produto1);
console.log(produto2);
console.log(produto3);
