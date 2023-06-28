import ValidaCpf from "./ValidaCpf";

export default class GeraCpf{
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max-min) + min));
    }

    geraNovoCpf(){
        const cpfLimpo = this.rand();
        const digito1 = ValidaCpf.calculaDigito(cpfLimpo);
        const digito2 = ValidaCpf.calculaDigito(cpfLimpo + digito1);
        return cpfLimpo + digito1 + digito2;
    }
}