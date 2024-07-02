//Promise.all


function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function espera(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') {reject('ERRO!! NÃO É STRING')
            return;
        };
        setTimeout(()=>{
            resolve(msg);
        },tempo);

    });
}

const promises = [
    espera('Promise1', aleatorio(1, 5)),
    espera('Promise2', aleatorio(1, 5)),
    espera('Promise3', aleatorio(1, 5)),
];

/*Promise.all(promises).then(function(valor){
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
});*/


/*Promise.race(promises).then(function(valor){
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
});*/

Promise.race(promises).then(function(valor){
    console.log(valor);
}).catch(function(erro){
    console.log(erro);
});


function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.reject('Página em cache');
    } else{
        return espera('Baixei a página', aleatorio(1, 5));
    }
}

baixaPagina().then(dadosPagina =>{
    console.log(dadosPagina);
}).catch(error => console.log(error));

