const time = document.querySelector(".time");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");


let segundos = 0;
let minutos = 0;
let horas = 0;

let timer;



iniciar.addEventListener('click', ()=>{
    clearInterval(timer);
    timer = setInterval(function(){
        segundos++;
        if(segundos === 60){
            minutos++;
            segundos = 0;
        }
        if(minutos === 60){
            hora++;
            minutos = 0;
        }
        if(horas === 24){
            hora = 0;
        }
        time.innerText = formataHora(horas, minutos, segundos)
    }, 1000)
});

pausar.addEventListener('click', () =>{
    clearInterval(timer);
    iniciar.disabled = false;
});

zerar.addEventListener('click', () =>{
    clearInterval(timer);
    segundos = 0;
    minutos = 0;
    horas = 0;
    time.innerText = formataHora(horas, minutos, segundos)
});



function formataHora(hora, minuto, segundo){
    hora = hora < 10 ? `0${hora}:`:`${hora}:`;
    minuto = minuto < 10 ? `0${minuto}:`:`${minuto}:`;
    segundo = segundo < 10 ? `0${segundo}`:`${segundo}`;

    return `${hora}${minuto}${segundo}`;
}
