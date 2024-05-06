const form = document.getElementById('formulario');




form.addEventListener('submit', (event) => {
    event.preventDefault();
    const peso = event.target.querySelector('#peso'); //pega a altura do evento
    const altura = event.target.querySelector('#altura');

    if ( peso.value == '' || !Number(peso.value))return resultado('Peso Inválido', false);
    
    if (altura.value == '' || !Number(altura.value))return resultado('Altura Inválida', false);
    

    calculaIMC(Number(peso.value), Number(altura.value));
});



function resultado(msg, valid){
    const resultado = document.querySelector('#result');
    resultado.innerHTML = '';
    const p = document.createElement('p'); //cria um elemento
    p.classList.add('paragrafo-result'); //adiciona uma classe ao elemento criado
    p.innerHTML = `${msg}`;
    resultado.appendChild(p); //adiciona o elemento dentro do elemento RESULTADO

    if(valid) {
        return p.classList.add('paragrafo-true'); //adiciona uma classe ao elemento criado
    }else{
        return  p.classList.add('paragrafo-false'); //adiciona uma classe ao elemento criado
    }

}
function calculaIMC(peso, altura){
    return geraResultado(peso/(altura*altura));

}


function geraResultado(imc){
    if(imc < 18.5) return resultado(`Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`, true);
    if(imc >= 18.5 && imc <= 24.9) return resultado(`Seu IMC é ${imc.toFixed(2)} (Peso normal)`, true);
    if(imc >= 25 && imc <= 29.9) return resultado(`Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`, true);
    if(imc >= 30 && imc <= 34.9) return resultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`, true);
    if(imc >= 35 && imc <= 39.9) return resultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`, true);
    else return resultado(`Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`, true);
}
