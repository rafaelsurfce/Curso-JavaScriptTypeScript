class ValidaCpf{
    constructor (cpf){
        this.cpf = cpf.replace(/\D+/g, '');
    }

    checkCpf(){
        if(this.cpf.length !== 11) {
            result.style.color = 'red';
            return result.innerText = 'CPF INVÁLIDO';
        }
        else if(this.cpf.charAt(0).repeat(11) === this.cpf){
            result.style.color = 'red';
            return result.innerText = 'CPF INVÁLIDO';
        }
        let digito1 = ValidaCpf.calculaDigito(this.cpf.slice(0, 9));
        let digito2 = ValidaCpf.calculaDigito(this.cpf.slice(0, 10));
        if((this.cpf.slice(0, 9) + digito1 + digito2) === this.cpf){
            result.style.color = 'green';
            return result.innerText = 'CPF válido';
        }
        else{
            result.style.color = 'red';
            return result.innerText = 'CPF INVÁLIDO';
        }
    }
    static calculaDigito(cpf){
        let result = 0;
        let indice = (cpf.length+1);
        for(let digito of cpf){
            result += digito * indice;
            indice--;
        };
        return (11 - (result % 11)) > 9 ? '0': String(11 - (result % 11)); 
    }
}

export default ValidaCpf;