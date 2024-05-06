const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');

for(i = 0; i < elementos.length; i++){
    const newElement = document.createElement(elementos[i].tag);
    newElement.innerHTML = elementos[i].texto;
    container.appendChild(newElement);
}

/*
    SOLUÇÃO CURSO
    const div = document.createElement('div'); criar um elemento pra jogar os demais dentro

    for(let i = < elementos.length; i++){
        let {tag, texto} = elementos[i];
        let tagCriada = document.createElement(tag);
        tagCriada.innerText = texto;
        div.appendChild(tagCriada);
    }


        for(let i = < elementos.length; i++){
        let {tag, texto} = elementos[i];
        let tagCriada = document.createElement(tag);
        let textoCriado = document.createTextNode(texto);


        tagCriada.appendChild(textoCriado);
        div.appendChild(tagCriada);
    }


    container.appendChild(div);




*/
