const numeros = [10, 20, 30, 40, 11, 2, 13, 14, 50, 60, 70, 80,];

const numerosEmDobro = numeros.map((valor)=>{
    return valor * 2;
});

console.log(numerosEmDobro);

const pessoas = [
    {nome: 'Rafael', idade: 26},
    {nome: 'Mercia', idade: 29},
    {nome: 'Diego', idade: 31},
    {nome: 'Lourdes', idade: 54},
    {nome: 'Antonio', idade: 64},
];


const nomes = pessoas.map((valor)=>{
    return valor.nome;
});

console.log(nomes);

const idades = pessoas.map((valor)=>{
    return valor.idade;
});

console.log(idades);

const iDs = pessoas.map((valor, indice) =>{
    valor.id = indice * valor.idade;
    return valor;
});

//console.log(iDs);
console.log(pessoas);
