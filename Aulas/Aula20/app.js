//Array Literal
const nomes = ['Thor', 'Mani', 'Pit'];
console.log(nomes);


delete nomes[2]; //deleta um dado do array, mas não perde o indice
console.log(nomes);
console.log(nomes.length); //tamanho do array

//Array construtor
const nomes2 = new Array('Beatriz', 'Camile', 'Adriele');
console.log(nomes2);
nomes2.pop(); //remove o último valor do array
nomes2.shift(); //remove o primeiro elemento do array
nomes2.push('Carla'); //Adiciona um elemento ao final do array
nomes2.unshift('Natália'); //Adiciona elemento no começo do array
console.log(nomes2);
console.log(nomes2.slice(0, 1));//fatia o array 


const name = 'Rafael Lima Pereira';
console.log(name);

console.log(name.split(' ')); //converte a string em array
console.log(nomes2.join(' ')); //transforma array em String