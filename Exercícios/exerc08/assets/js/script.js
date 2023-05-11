const form = document.querySelector('.form-imc');


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const resultado = document.querySelector('.resultado');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    
    let p = Number(peso.value);
    let a = Number(altura.value);

    if(isNaN(p)){
        resultado.style.backgroundColor = '#f4998d';
        resultado.innerHTML = 'Peso Invalido';
        return;
    }
    else if (isNaN(a)){
        resultado.style.backgroundColor = '#f4998d';
        resultado.innerHTML = 'Altura Invalida';
        return
    }
    else if (a === 0 || p === 0){
        resultado.style.backgroundColor = '#f4998d';
        resultado.innerHTML = 'Preencha todos os campos';
    }
    else{
        const imc = p/(a * 2);
        
        if(imc < 18.5){
            resultado.style.backgroundColor = '#499c70';
            resultado.innerHTML = `Abaixo do Peso (IMC = ${imc.toFixed(2)})`;
        }
        else if(imc >= 18.5 && imc <= 24.9){
            resultado.style.backgroundColor = '#499c70';
            resultado.innerHTML = `Peso Normal (IMC = ${imc.toFixed(2)})`;
        }
        else if(imc >= 25 && imc <= 29.9){
            resultado.style.backgroundColor = '#f4998d';
            resultado.innerHTML = `sobre peso (IMC = ${imc.toFixed(2)})`;
        }
        else if (imc >= 30 && imc <= 34.9){
            resultado.style.backgroundColor = '#f4796b';
            resultado.innerHTML = `Obesidade Grau 1 (IMC = ${imc.toFixed(2)})`;
        }
        else if(imc >= 35 && imc <= 39.9){
            resultado.style.backgroundColor = '#f44e3f';
            resultado.innerHTML = `Obesidade Grau 2 (IMC = ${imc.toFixed(2)})`;
        }
        else if(imc > 40){
            resultado.style.backgroundColor = '#f40000';
            resultado.innerHTML = `Obesidade Grau 3 (IMC = ${imc.toFixed(2)})`;
        }
    }  
});


