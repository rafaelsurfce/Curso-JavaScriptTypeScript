function Calculadora(){
    
    this.display = document.querySelector('.visor');

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            //botão que ta sendo clicado
            const el = e.target;
            if(el.classList.contains('num'))this.displayContent(el.innerText);
            if(el.classList.contains('clear'))this.clearDisplay();
            if(el.classList.contains('delete'))this.deletarChar();
            if(el.classList.contains('equ'))this.calcular();
            });
    }

    this.calcular = () => {
        try {
            this.display.value = eval(this.display.value);
        } catch (error) {
            this.display.value = 'Syntax ERROR';
        }
        }
    this.deletarChar = () => this.display.value = this.display.value.slice(0, -1);
    this.clearDisplay = () => this.display.value = '';
    this.displayContent = (valor) => this.display.value += valor;

    

};
const calculadora = new Calculadora ();
calculadora.cliqueBotoes();
