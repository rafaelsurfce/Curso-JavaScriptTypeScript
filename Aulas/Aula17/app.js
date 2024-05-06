// Tratamento de Erros


//Tenta executar um treço de código - se positivo executa o código, se negativo pul pro catch
try{
    //executa quando não há erros 
    console.log(naoExisto);
} catch(erro){
    //executa quando não há erros 
    console.log('Variável Inexistente ')
} finally{
    //executado sempre(opcional)
}


let num = 'A';
let num2;


if(typeof num !== 'number'){
    // throw new ReferenceError = usado para criar um erro desejado pelo usuário
    throw new ReferenceError(`${num} precisa ser número`);
}else{
    console.log(num);
}

