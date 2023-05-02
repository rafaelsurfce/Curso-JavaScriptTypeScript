let num1 = 'a';
let num2 = 2.57
let num3 = num2 * num1;
console.log(Number.isInteger(num1)); //verifica se uma variável é do tipo number
console.log(num2.toString()); //transforma de number para string
console.log(num2.toFixed(1)); /*se o numero possuí ponto flutuante, expecifica quantas casas após o ponto vai imprimir. 
No nosso caso será 1 casa decimal*/
console.log(Number.isNaN(num3)); //verifica se é um note a number