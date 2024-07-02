
function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function espera(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject('ERRO!! NÃO É STRING');
        setTimeout(()=>{
            resolve(msg);
        },tempo);

    });
}

espera('Frase 1', aleatorio(1, 3)).then((resposta) =>{
    console.log(resposta);
    return espera('Frase 2', aleatorio(1, 3)).then((resposta) =>{
        console.log(resposta);
        return espera(00000000000, aleatorio(1, 3)).then((resposta) => {
            console.log(resposta);
            return;
        }).catch((resposta) => {
            console.log("ERRO DE TIPAGEM");
        });
    }).catch((resposta) => {
        console.log("ERRO DE TIPAGEM");
    });
}).catch((resposta) => {
    console.log("ERRO DE TIPAGEM");
});
