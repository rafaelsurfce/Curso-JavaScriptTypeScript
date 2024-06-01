const form = document.querySelector('form');
const resultado = document.querySelector('.resultado');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const cpf = document.getElementById('cpf');
    if(cpf.value === ''){ 
        resultado.innerHTML = 'Digite um número de CPF'
        resultado.style.color = 'red';
        return;
    };
    let cpfLimpo = cpf.value.replace(/\D+/g, '');
    
    if(primeiroDigito(cpfLimpo.slice(0, 9)) === cpfLimpo[0].repeat(cpfLimpo.length)){
        resultado.innerHTML = 'CPF inválido'
        return resultado.style.color = 'red';
    }
    if((primeiroDigito(cpfLimpo.slice(0, 9))) === cpfLimpo){
        resultado.innerHTML = 'CPF Válido'
        return resultado.style.color = 'green';
    }
    else{
        resultado.innerHTML = 'CPF inválido'
        return resultado.style.color = 'red';
    }
    
    
});


function primeiroDigito(cpf){
    let acumulador = 0;
    let indice = 0;
    for(i = 10; i >= 2; i--){
        acumulador += (cpf[indice] * i);
        indice++;
    }
    acumulador = (11 - (acumulador % 11)) > 9 ? 0:(11 - (acumulador % 11));
    
    return segundoDigito(cpf + acumulador.toString());

}

function segundoDigito(cpf){    
    let acumulador = 0;
    let indice = 0;
    for(i = 11; i >= 2; i--){
        acumulador += (cpf[indice] * i);
        indice++;
    }

    acumulador = acumulador = (11 - (acumulador % 11)) > 9 ? 0:(11 - (acumulador % 11));
    return cpf + acumulador.toString();
}