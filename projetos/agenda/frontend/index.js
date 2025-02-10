import 'core-js/stable';                                                                //execução para navegadores antigos
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

const form = document.querySelector('form');


form.addEventListener('submit', e =>{
    e.preventDefault();
    if(validCampos()) return form.submit();  
});



function validCampos(){
    let valid = true;
    for(let error of form.querySelectorAll('.alert')) error.remove();                   //remove os campos de erros
    for(let campo of form.querySelectorAll('.valid')){                                  //seleciona todos os campos com a class valid
        if(!campo.value){                                                               //verifica se o campo é null
            const label = campo.previousElementSibling.innerText;                             //seleciona label anterior do input
            createErro(campo, `Campo "${label}" não pode estar em branco.`);            //cria o erro 
            valid = false;                                                              //declara a flag como invalida
        }
    }
    return valid;
}

function createErro(campo, msg){
    const div = document.createElement('div');                                          //cria um elemento dentro do documento
    div.innerHTML = msg;                                                                //adiciona texto ao elemento
    div.classList.add('alert');                                                         //adiciona class ALERT ao elemento
    campo.insertAdjacentElement('afterend', div);                                       //insere o elemento criado após o campo de verificação 
}