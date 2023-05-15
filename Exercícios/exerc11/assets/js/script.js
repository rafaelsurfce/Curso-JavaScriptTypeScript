const paragrafos = document.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);


for(let i of paragrafos){
    i.style.background = styleBody.backgroundColor;
    i.style.color = 'white';
};