import geraSenha from './modules/geradores';
import './assets/css/style.css';

document.getElementById('geraSenhaForm').addEventListener('submit', (e) =>{
    e.preventDefault();

    const resultado = document.querySelector('.result');
    const tamanho = document.getElementById('caracteresLength');
    const maiuscula = document.getElementById('letrasMaiusculas');
    const minuscula = document.getElementById('letrasMinusculas');
    const numero = document.getElementById('letrasNumeros');
    const simbolo = document.getElementById('letrasSimbolos');
    const senhaGerada = geraSenha(
        tamanho.value, 
        maiuscula.checked, 
        minuscula.checked, 
        numero.checked, 
        simbolo.checked);
        resultado.innerText =  senhaGerada || 'Nada Selecionado';
    });





