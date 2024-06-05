class ValidaCpf{
    constructor(cpf){
        this.cpf = cpf;
    }
    calcular(){
        let cpfLimpo = this.cpf.replace(/\D+/g, '');
        
        if(this.primeiroDigito(cpfLimpo.slice(0, 9)) === cpfLimpo[0].repeat(cpfLimpo.length)){
            console.log('CPF inválido');
            
        }
        else if((this.primeiroDigito(cpfLimpo.slice(0, 9))) === cpfLimpo){
            console.log('CPF Válido');
        }
        else{
            console.log('CPF inválido');
            
        }
    }

    primeiroDigito(cpf){
        let acumulador = 0;
        let indice = 0;
        for(let i = 10; i >= 2; i--){
            acumulador += (cpf[indice] * i);
            indice++;
        }
        acumulador = (11 - (acumulador % 11)) > 9 ? 0:(11 - (acumulador % 11));
        
        return this.segundoDigito(cpf + acumulador.toString());
    
    }
    
    segundoDigito(cpf){    
        let acumulador = 0;
        let indice = 0;
        for(let i = 11; i >= 2; i--){
            acumulador += (cpf[indice] * i);
            indice++;
        }
    
        acumulador = acumulador = (11 - (acumulador % 11)) > 9 ? 0:(11 - (acumulador % 11));
        return cpf + acumulador.toString();
    }


}


const validaCpf = new ValidaCpf('070.178.283-80');

validaCpf.calcular();
