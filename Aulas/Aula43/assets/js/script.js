/*fetch('pessoas.json').then((response) =>{
    return response.json();
}).then(json => carregaDados(json));
*/

axios('pessoas.json').then(response => carregaDados(response.data))

function carregaDados(json){
    const table = document.createElement('table');
    const resultado = document.querySelector('.resultado');

    for(let pessoa of json){
        const tr = document.createElement('tr');
        const tdNome = document.createElement('td');
        tdNome.innerHTML = pessoa.nome;
        tr.appendChild(tdNome);
        const tdIdade = document.createElement('td');
        tdIdade.innerHTML = pessoa.idade;
        tr.appendChild(tdIdade);

       /* const tdSalario = document.createElement('td');
        tdSalario.innerHTML = pessoa.salario;
        tr.appendChild(tdSalario);*/

        table.appendChild(tr);
    }
    resultado.appendChild(table);
}