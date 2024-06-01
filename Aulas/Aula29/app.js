//metodos úteis em objetos 

const produto = {nome: 'produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: true,
    configurable: false,
});
produto.nome = 'rodo';
console.log(produto);