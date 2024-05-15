const numeros = [10, 20, 30, 40, 11, 2, 13, 14, 50, 60, 70, 80,];

//
const maiorQueDez = numeros.filter((valor) => {
    return valor > 10;
});

//console.log(maiorQueDez);





const pessoas = [
    {nome: 'Rafael', idade: 26},
    {nome: 'Mercia', idade: 29},
    {nome: 'Diego', idade: 31},
    {nome: 'Lourdes', idade: 54},
    {nome: 'Antonio', idade: 64},
];

const pessoasComNomeGrande = pessoas.filter((valor)=>{
    return valor.nome.length >= 6;
});



console.log(pessoasComNomeGrande);


const idadeMaiorQue50 = pessoas.filter((valor)=>{
    return valor.idade > 50;
});

console.log(idadeMaiorQue50);


const terminaComA = pessoas.filter((valor)=>{
    return valor.nome[valor.nome.length - 1] === 'a';
    // valor.nome.toLowerCase().endsWith('a');
})

console.log(terminaComA);