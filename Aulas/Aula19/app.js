


//declaração comum de função
function funcaoTeste(){
    console.log("Teste");
}

funcaoTeste();

// Function expression
const funcao = function(){
    console.log("Função expressa");
};

funcao();

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();



// Dentro de um objeto 

const obj = {
    falar(){
        console.log("Estou Falando");
    }
};

obj.falar();


function* geradora(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}



