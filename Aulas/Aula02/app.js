/* Não podemos criar variáveis com palavras reservadas
    Exemplo:
        if
        for
        alert
    Orienta-se a utilizar nomes significativos para se usar boas práticas
*/
/*
    tipos de variáveis: 
        LET: possibilita alterar o valor da variável, entretanto não pode redeclarar.
        VAR: PALAVRA ANTIGA PROCURE SUBSTITUIR POR LET, possibilita redeclarar a variável em escopos diferentes.
        CONST: não pode ser redeclarada ou mudar o seu valor. Ela precisa ser já ser criada e inicializada 
*/
var nomeCliente = "Thor";
let nomeProduto = "shampoo";
console.log(nomeCliente);
console.log(nomeProduto);
var nomeCliente = "MANI";
nomeProduto = 'coleira';
console.log(nomeCliente);
console.log(nomeProduto);
const nomeLoja = 'servVet';
console.log(nomeLoja);