const form = document.querySelector('form');
const result = document.querySelector('.resultado');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    
    
    const cpf = new ValidaCpf(document.getElementById('cpf').value);
    return checkCpf();
    if(document.getElementById('cpf').value.replace(/\D+/g, '').charAt(0).repeat(document.getElementById('cpf').value.replace(/\D+/g, '').length) === document.getElementById('cpf').value.replace(/\D+/g, '')){
        result.style.color = 'red';
        return result.innerText = 'CPF INVÁLIDO';
    }
    
    else if(document.getElementById('cpf').value.length < 11){
        result.style.color = 'red';
        return result.innerText = 'CPF INVÁLIDO';
    }
    else if(primeiroDigito(document.getElementById('cpf').value) === document.getElementById('cpf').value.replace(/\D+/g, '')){
        result.style.color = 'green';
        return result.innerText = 'CPF VÁLIDO';
    }
    else{
        result.style.color = 'red';
        return result.innerText = 'CPF INVÁLIDO';
    }
     


});

function primeiroDigito(cpf){
    let result = 0;
    let indice = 0;
    let newCpf = cpf.replace(/\D+/g, '');
    
    for(i=10; i>=2; i--){
        result += Number(newCpf[indice]) * i;
        indice++;
    };
    return segundoDigito((11 - (result % 11)) > 9 ? newCpf.slice(0, 9) + '0': newCpf.slice(0, 9) + String(11 - (result % 11))); 

}

function segundoDigito(cpf){
    let result = 0;
    let indice = 0;

    for(i=11; i>=2; i--){
        result += Number(cpf[indice]) * i;
        indice++;
    };
    return (11 - (result % 11)) > 9 ? cpf.slice(0, 10) + '0': cpf.slice(0, 10) + String(11 - (result % 11));
}

class ValidaCpf{
    constructor (cpf){
        this.cpf = cpf;
    }

    checkCpf(){
        if(this.cpf.replace(/\D+/g, '').length !== 11) {
            result.style.color = 'red';
            return result.innerText = 'CPF INVÁLIDO';
        }
        else if(this.cpf.replace(/\D+/g, '').charAt(0).repeat(11) === this.cpf ){
            result.style.color = 'red';
            return result.innerText = 'CPF INVÁLIDO';
        }
    }
}