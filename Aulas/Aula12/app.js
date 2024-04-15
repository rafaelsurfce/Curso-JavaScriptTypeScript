/*
    Função utiliza a palavra reservada FUNCTION 

*/


//função comum
function qualquer(){ 
    console.log("Função Executada");
}

qualquer();

//função anônima 
const num = function (){

}

num(5);


//Arrow Function
const num2 = (n1, n2) =>{
    return n1 + n2;
}


console.log(num2(2, 2));
