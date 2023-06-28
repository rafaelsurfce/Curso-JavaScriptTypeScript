const request = (obj) =>{
    return new Promise((sucess, error) => {
        const xhr = new XMLHttpRequest();
            xhr.open(obj.method, obj.url, true);
            xhr.send();
    
            xhr.addEventListener('load', () => {
                if(xhr.status >= 200 && xhr.status < 300){
                    sucess(xhr.responseText);
                }
                else{
                    error(xhr.statusText);
                }
            });
    });

};

document.addEventListener('click', (e) =>{

    if(e.target.tagName.toLowerCase() === 'a'){
        e.preventDefault();
        carregaPagina(e.target);
    }
});

async function carregaPagina(tag){
    const href = tag.getAttribute('href');

    const obj = {
        method: 'GET',
        url: href
    };
    try {
        carregaResultado( await request(obj));
    } catch (error) {
        console.log(error);
    }
}

function carregaResultado(response){
    document.querySelector('.result').innerHTML = response;
}


