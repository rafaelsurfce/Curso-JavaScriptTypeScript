// intervalo e time



//função é executada a cada intervalo definido na função
const relogio = setInterval(() => {
    let data = new Date();
    let horAtual = data.toLocaleTimeString('pt-BR', {
        hour12:false
    });
    console.log(horAtual)
}, 1000);
// executa uma ação uma única vez após determinado período de tempo
setTimeout(function() {
    clearInterval(relogio);
}, 5000);