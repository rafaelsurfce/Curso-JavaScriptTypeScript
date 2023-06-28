function rand(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

const geraMaiuscula = () => {return String.fromCharCode(rand(65, 91))}; 
const geraMinuscula = () => {return String.fromCharCode(rand(97, 123))}; 
const geraNumero = () => {return String.fromCharCode(rand(48, 58))};
const geraSimbolos = () => {return String.fromCharCode(rand(33, 48))};


export default function geraSenha(tamanho, maiuscula, minuscula, numero, simbolos){
    const senha = [];
    for(let i = 1; i <= Number(tamanho); i++){
        maiuscula && senha.push(geraMaiuscula());
        minuscula && senha.push(geraMinuscula());
        numero && senha.push(geraNumero());
        simbolos && senha.push(geraSimbolos());
    }
    return senha.join('').slice(0, tamanho);
}

