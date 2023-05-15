const resultado = document.querySelector('.container');
/*
function formataHora(hora, minuto){
    let h =  hora < 10 ? `0${hora}` : `${hora}`;
    let m =  minuto < 10 ? `0${minuto}` : `${minuto}`;
    return `${h}:${m}`
}

function mes(mes){
    switch(mes){
        case 0:
            return "Janeiro";
            
        case 1:
            return "Fevereiro";
            
        case 2:
            return "Março";
            
        case 3:
            return "Abril";
            
        case 4:
            return "Maio";
            
        case 5:
            return "Junho";
            
        case 6:
            return "Julho";
            
        case 7:
            return "Agosto";
            
        case 8:
            return "Setembro";

        case 9:
            return "Outubro";

        case 10:
            return "Novembro";

        case 11:
            return "Dezembro";

        Default:
            return '';
            
    }
}

function diaSemana(diaSemana){
    switch(diaSemana){
        case 0:
            return "Domingo";
            
        case 1:
            return "Segunda-Feira";
            
        case 2:
            return "Terça-Feira";
            
        case 3:
            return "Quarta-Feira";
            
        case 4:
            return "Quinta-Feira";
            
        case 5:
            return "Sexta-Feira";
            
        case 6:
            return "Sábado";

        Default:
            return '';
    }

}

const data = new Date();

resultado.innerHTML = `${diaSemana(data.getDay())}, 
${data.getDate()} de ${mes(data.getMonth())} de ${data.getFullYear()} ${formataHora(data.getHours(), data.getMinutes())}`

*/



// correção 

const data = new Date();
resultado.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
