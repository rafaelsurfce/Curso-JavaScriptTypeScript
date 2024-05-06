/*
    LAÇOS FOR

*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const nome = 'Rafael Lima';
const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Lima',
    idade: 26
};
//for classico - utilizar com interáveis 
for(i = 0; i < numeros.length; i++){
    //console.log(numeros[i]);
}

//for - ler indices ou chaves do objeto ou array
for(let i in numeros){
    //console.log(numeros[i]);
} 
//ideal para objetvos interáveis, arrays, vetores e strings 
//acessa o valor diretamente sem índice 
for(let valor of nome){
    console.log(valor)
}

