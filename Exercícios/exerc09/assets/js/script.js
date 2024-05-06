
function geraDiaSemana(dia) {
    switch (dia) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda - Feira';
        case 2:
            return 'Domingo';
        case 3:
            return 'Domingo';
        case 4:
            return 'Domingo';
        case 6:
            return 'Domingo';
        default:
            return 'ERRO';
    }
}

function geraMes(mes){
    switch (mes) {
        case 0:
            return 'janeiro';
        case 1:
            return 'fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'julho';
        case 7:
            return 'agosto';
        case 8:
            return 'setembro';
        case 9:
            return 'outubro';
        case 10:
            return 'novembro';
        case 11:
            return 'dezembro';
        default:
            return 'ERRO M';
    }
}

function formataHora(hora, minuto){
    const hora1 = hora < 10 ? `0${hora}`:hora;
    const minuto1 = minuto < 10 ? `0${minuto}`:minuto;
    return `${hora1}:${minuto1}`
}



function geraResultado(){
    const data = new Date();
    const resultado = document.querySelector('.container');
    const p = document.createElement('p');
    p.innerHTML = `${geraDiaSemana(data.getDay())}, ${data.getDate()} de ${geraMes(data.getMonth())} de ${data.getFullYear()}  ${formataHora(data.getHours(), data.getMinutes())}`;
    resultado.appendChild(p);
}

geraResultado();


/*1º RESOLUÇÃO DO CURSO

const resultado = document.querySelector('.container');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short',
};

resultado.innerHTML = data.toLocaleString('pt-BR', opcoes);
*/