class ValidForm{
    constructor(){
        this.form = document.querySelector('.formulario');
        this.eventos();
    }


    eventos(){
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const camposValidos = this.validaCampos();
            const senhasValidas = this.senhasSaoValidas();
            if(camposValidos && senhasValidas) {
                alert('Formulário Enviado');
                this.form.submit();
            }
            
        });
    }

    validaCampos(){
        let valid = true;
        for (let error of this.form.querySelectorAll('.alert')){
            error.remove();
        }
        for(let campo of this.form.querySelectorAll('.valid')){
            if(!campo.value) {
                const label = campo.previousElementSibling.innerText;
                this.createErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }
            if(campo.classList.contains('input-cpf')) {
                if(!this.validCPF(campo)) valid = false;
            }
            if(campo.classList.contains('input-usuario')) {
                if(!this.validUsuario(campo)) valid = false;
            }

        }
        return valid;

    }

    validCPF(campo){
            const cpf = new ValidaCpf(campo.value);
            if(!cpf.checkCpf()){
                this.createErro(campo, `Digite um CPF válido`);
                return false;
            }
            return true;
    }

    validUsuario(campo){
        const usuario = campo.value;
        let valid = true
        if(usuario.length < 3 || usuario.length > 12){
            this.createErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.createErro(campo, 'Nome de usuário precisa conter apenas letras e números');
            valid = false;
        }
        return valid;
    }

    senhasSaoValidas(){
        let valid = true;
        const senha = this.form.querySelector('.input-senha');
        const repetirSenha = this.form.querySelector('.input-repeatSenha ');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.createErro(senha, `Campos senha e repetir senha precisam ser iguais`);
            this.createErro(repetirSenha, `Campos senha e repetir senha precisam ser iguais`);
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.createErro(senha, `Senha precisa ta entre 6 e 12 caracteres`);
        }
        return valid;

    }
    createErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('alert');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valid = new ValidForm();