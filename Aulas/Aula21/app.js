
const nomes = ['Regilane', 'Jaiane', 
'Amanda', 'Carla', 'Caroline', 'Edinusia', 
'Thayanne', 'Natalia', 'Renata'];

const nomes2 = ['Beatriz', 'Adriele', 'Camile', 'Nayara', 'Mara', 'Catarina', 'Viviane', 'Rayanne', 'Thais'];
//concatenação de arrays
console.log(`Junção de Dois Arrays: ${nomes.concat(nomes2)}`);
console.log([...nomes, ...nomes2, ...['Mayka', 'Viviane', 'Dayane']]);

//nomes.splice(indice, quantidade delete, newElement1, newElement2, newElement3);

console.log(nomes);
//exclui todos os indices e adiciona outros
console.log(nomes.splice(0, 9, 'Beatriz', 'Adriele', 'Camile', 'Nayara', 'Mara', 'Catarina', 'Viviane', 'Rayanne', 'Thais'));
console.log(nomes);
//exclui dois indices a partir do indice 7 pra frente
console.log(nomes.splice(7, 2));


