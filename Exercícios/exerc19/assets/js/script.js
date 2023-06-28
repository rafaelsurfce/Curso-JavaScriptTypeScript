class ValidForm{
    constructor(form){
        this.form = form;
    }
    isSubmit(){
        this.form.addEventListener('submit', (e) =>{
            e.preventDefault();
            this.validCampos() ? this.form.submit():console.log("Form invalido");
        });
    }
    validCampos(){
        let valid = true;
        for( let erro of this.form.querySelectorAll('.alert')){
            erro.remove();
        }
        for( let campo of this.form.querySelectorAll('.valid')){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                valid = ValidForm.criaErro(campo, `Campo "${label}" não pode está em branco`);
            }
            if(campo.classList.contains('input-cpf')){
                const cpf = new ValidaCpf(campo.value);
                const result = cpf.checkCpf();
                if(result !== true) valid = ValidForm.criaErro(campo, result);
                
            }
            if(campo.classList.contains('input-usuario')){
                if(campo.value.length < 3 || campo.value.length > 12){
                    valid = ValidForm.criaErro(campo, `Usuário precisa ter entre 3 a 12 caracteres`);
                }
                if(!campo.value.match(/^[a-zA-Z0-9]+$/g)){
                    valid = ValidForm.criaErro(campo, `Usuário só poderá conter letras e/ou números`);
                }
            }
            if(campo.classList.contains('input-senha')){
                if(campo.value.length < 6 || campo.value.length > 12){
                    valid = ValidForm.criaErro(campo, `Senha precisa ter entre 3 a 12 caracteres`);
                }
                if(campo.value !== this.form.querySelector('#repeatSenha').value){
                    valid = ValidForm.criaErro(campo, `Campo senha e repeti senha devem ser iguais`);
                    ValidForm.criaErro(this.form.querySelector('#repeatSenha'), `Campo senha e repeti senha devem ser iguais`);
                }
            }
        }
        return valid;
    }
    static criaErro(campo, msg){
        const elemento = document.createElement('p');
        elemento.classList.toggle('alert');
        elemento.innerText = msg;
        campo.parentNode.insertBefore(elemento, campo.nextSibling);
        return false;
    }

}

const form = new ValidForm(document.getElementById('formulario')).isSubmit();




