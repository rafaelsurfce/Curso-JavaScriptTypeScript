const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');


const documentBody = getComputedStyle(document.body); //recupera o style do body
const fundoColor = documentBody.backgroundColor;



for(let vec of ps){
    vec.style.backgroundColor = fundoColor;
    vec.style.color = 'white'
}