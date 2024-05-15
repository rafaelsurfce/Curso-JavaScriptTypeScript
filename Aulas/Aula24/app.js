const numeros = [10, 20, 30, 40, 11, 2, 13, 14, 50, 60, 70, 80,];

const total = numeros.reduce((acumulador, valor, indice, array) =>{
    acumulador += valor;
    return acumulador;
});

console.log(total);

const pessoas = [
    {nome: 'Rafael', idade: 26},
    {nome: 'Mercia', idade: 29},
    {nome: 'Diego', idade: 31},
    {nome: 'Lourdes', idade: 54},
    {nome: 'Antonio', idade: 64},
];



