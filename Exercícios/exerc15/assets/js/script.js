function calculadoraFunction(){
    return {
        display: document.querySelector('.visor'),

        inicia(){
            this.cliqueBotoes();
        },
        cliqueBotoes(){
            //Arrow fuction não mudam o comportamento do "this"
            document.addEventListener('click', (e) => {
                const el = e.target;
                if(el.classList.contains('num')){
                    this.displayContent(el.innerText);
                }
                if(el.classList.contains('clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('delete')){
                    this.deletarChar();
                }
                if(el.classList.contains('equ')){
                    this.calcular();
                }
            });
        },

        calcular(){
            try {
                this.display.value = eval(this.display.value);
                //não recomendado
            } catch (error) {
                this.display.value = 'Syntax ERROR';
            }
        },
        deletarChar(){
            this.display.value = this.display.value.slice(0, -1);
        },
        clearDisplay(){
            this.display.value = '';
        },

        displayContent(valor){
            this.display.value += valor;
        },

    };

}
const calculadora = calculadoraFunction();
calculadora.inicia();