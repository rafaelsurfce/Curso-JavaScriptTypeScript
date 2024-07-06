import ValidaCpf from "./script";
console.log('Funcionando Bem');

export default class GeraCPF{
    rand(min = 100000000, max=999999999){
        return String(Math.floor(Math.random()* (max - min) + min));
    }
    geraNovoCpf() {
        const CpfSemDigito = this.rand();
        const digito1 = ValidaCpf.calculaDigito(CpfSemDigito);
        const digito2 = ValidaCpf.calculaDigito(CpfSemDigito+digito1);
        return this.formatado(CpfSemDigito + digito1 + digito2);
    }

    formatado(cpf){
        return (
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11)
        );
    }
}