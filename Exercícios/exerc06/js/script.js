let div = document.querySelector('.resultado'); //seleciona o elemento div
let title = document.getElementById('resultado-título');
const num =  Number(prompt("Digite um numero: "));


title.innerHTML = `<h2>seu numero é ${num}</h2>`
div.innerHTML += `Raiz quadrada: <span> ${Math.sqrt(num)} </span> <br>`;
div.innerHTML += `${num} é inteiro: <span> ${Number.isInteger(num)} </span> <br>`;
div.innerHTML += `é NaN: <span> ${Number.isNaN(num)} </span> <br>`;
div.innerHTML += `Arredondando para baixo: <span> ${Math.floor(num)} </span> <br>`;
div.innerHTML += `Arredondando para cima: <span> ${Math.ceil(num)} </span> <br>`;
div.innerHTML += `Com duas casas decimais: <span> ${num.toFixed(2)} </span> <br>`;