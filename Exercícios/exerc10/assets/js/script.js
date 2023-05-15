const elementos = [
    {tag: 'p', texto:' Frase1'},
    {tag: 'div', texto:' Frase2'},
    {tag: 'footer', texto:' Frase3'},
    {tag: 'section', texto:' Frase4'}
];

let container = document.querySelector('.container');



for(i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    console.log(tag);
    let elemento = document.createElement(tag);
    elemento.innerText = texto;
    container.appendChild(elemento); 
}