const nomes = ['Mercia', ' Diego', ' Rafael',];


console.log(`Tamanho do Array ${nomes.length}`);
console.log(nomes);
nomes.push('Thor'); //Adiciona um elemento ao final do Array
console.log(`Tamanho do Array ${nomes.length}`);
console.log(nomes);
nomes.unshift('Lurdinha'); // Adiciona ao começo do array
console.log(`Tamanho do Array ${nomes.length}`);
console.log(nomes);
nomes.pop(); //remove o último elemento do array
console.log(`Tamanho do Array ${nomes.length}`);
console.log(nomes);
nomes.shift()//remove o primeiro elemento da lista
console.log(`Tamanho do Array ${nomes.length}`);
console.log(nomes);
delete nomes [1]; //remove o conteúdo de determinado índicem, substítui para vazio
console.log(`Tamanho do Array ${nomes.length}`);
console.log(nomes);
