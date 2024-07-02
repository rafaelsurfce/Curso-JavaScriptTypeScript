


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

/*
espera('Fase 1', aleatorio(0,5)).then( result => {
    console.log(result);
    return espera('Fase 2', aleatorio());
}).then(result => {
    console.log(result);
    return espera('Fase 2', aleatorio());
}).then(result => {
    console.log(result);
}).catch( e => console.log(e));
*/

async function executa(){
    try{
        const fase1 = await espera('Fase 1', aleatorio());
        console.log(fase1);
        const fase2 = await espera('Fase 2', aleatorio());
        console.log(fase2);
        const fase3 = await espera(0, aleatorio());
        console.log(fase3);
    }catch(e){
        console.log("ERRO DE PROMISSE");
    }


}

executa();