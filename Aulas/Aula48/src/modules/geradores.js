function rand(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.~^[]{}!@#$%*()-+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];


export default function geraSenha(qtd, numeros, maiusculas, minusculas, simbolos){
    const senhaArray = [];

    for(let i = 0; i < Number(qtd); i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero()); 
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd);
}