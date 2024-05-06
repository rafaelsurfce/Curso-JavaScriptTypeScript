const timer = document.querySelector('.time');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector(' .pausar');
const zerar = document.querySelector('.zerar');

let relogio;
let hora = 0;
let minuto = 0;
let segundo = 0;

iniciar.addEventListener('click', () => {
    relogio = setInterval(function(){
            segundo++;
         if(segundo === 60){
            minuto++;
            segundo = 0;
         }
         if(minuto === 60){
            hora++;
            minuto = 0
         }
         atualizaTimer();
         
    }, 1000)
    pausar.disabled = false;
    iniciar.disabled = true;
    zerar.disabled = true;
    timer.style.color = 'black';

});


pausar.addEventListener('click', () =>{
    clearInterval(relogio);
    zerar.disabled = false;
    iniciar.disabled = false;
    pausar.disabled = true;
    timer.style.color = 'red';
});


zerar.addEventListener('click', () =>{
    hora = 0;
    minuto = 0;
    segundo = 0;
    iniciar.disabled = false;
    zerar.disabled = true;
    pausar.disabled = true;
    timer.style.color = 'black';
    atualizaTimer();
});



function atualizaTimer(){
    timer.innerHTML = '';
    let horas = hora >=10 ? hora:`0${hora}`;
    let minutos = minuto >=10 ? minuto:`0${minuto}`
    let segundos = segundo >=10 ? segundo:`0${segundo}`;
    timer.innerHTML = `${horas}:${minutos}:${segundos}`;
}
