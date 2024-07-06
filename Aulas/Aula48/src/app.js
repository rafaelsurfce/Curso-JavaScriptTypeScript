import './assets/css/style.css';
import geraSenha from "./modules/geradores";



const form = document.querySelector('.content-form');

form.addEventListener('submit', e =>{
    e.preventDefault();
    const qtd = document.querySelector('#caracteres');
    const numeros = document.querySelector('#numeros');
    const maisculas = document.querySelector('#maiusculas');
    const minusculas = document.querySelector('#minusculas');
    const simbolos = document.querySelector('#simbolos');

    const senha = geraSenha(qtd.value, numeros.checked, maisculas.checked, minusculas.checked, simbolos.checked);
    result(senha);
});

export default function result(senha){
    const result = document.querySelector('.content-title');
    result.innerHTML = senha || 'Nada selecionado';
};