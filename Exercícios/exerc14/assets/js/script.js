const tarefa = document.querySelector(".tarefa");
const button = document.querySelector(".btn-tarefa");
const list = document.querySelector(".list");


document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    if(tarefa.value){
        return criaTarefa(tarefa.value); 
    }
    
});



document.addEventListener('click', (e) => {
    const btNe = e.target;
    if(btNe.classList.contains('btn-apagar')){
       btNe.parentElement.remove();
       salvaTarefas();
    }
});


function criaTarefa(texto){
    let li = document.createElement('li');
    li.innerHTML = `${texto} <button class='btn-apagar'>Apagar</apagar>`
    list.appendChild(li);
    salvaTarefas();
    tarefa.value = '';
    tarefa.focus();
}

function salvaTarefas(){
    const tarefas = list.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of tarefas){
        let textoTarefa= tarefa.innerText;
        listaTarefas.push(textoTarefa.replace('Apagar', '').trim());
    }
    const tarefasJson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function carregarTarefas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    for (let tarefa of listaTarefas){
        criaTarefa(tarefa);
    }
}

carregarTarefas();