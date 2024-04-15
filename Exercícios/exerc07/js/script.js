

function cadastrar(){
    const form = document.querySelector('.form');
    let resultado = document.querySelector('.resultados');
    const pessoas = [];
    //captura o evento de SUBMIT do form
    form.addEventListener('submit', function(event){
        //previne o que é para acontecer por padrão quando o form é enviado
        event.preventDefault();                          
        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        let pessoa = {
            Nome: nome.value,
            Sobrenome: sobrenome.value,
            Peso: peso.value,
            Altura: altura.value
        };
    
        pessoas.push(pessoa);
        resultado.innerHTML = ""
        for(i = 0; i < pessoas.length; i++){
            resultado.innerHTML += ` ${pessoas[i].Nome}  ${pessoas[i].Sobrenome} ${pessoas[i].Peso} ${pessoas[i].Altura} <br>` 
        }

    });

}

cadastrar();

 
