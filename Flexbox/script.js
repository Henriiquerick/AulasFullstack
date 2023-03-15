let inputEmail = document.querySelector('#email');
let inputSenha = document.querySelector('#password');
let inputSenha2 = document.querySelector('#confirmPassword');
let inputNome = document.querySelector('#nome');

const loginValidator = () => {
    let email = inputEmail.value;
    let nome = inputNome.value;
    let senha = inputSenha.value;
    let senha2 = inputSenha2.value;
    if(senha == senha2){
        console.log('Your name: ', nome, " your email: ", email);
    }else{
        alert('Senhas não correspondem');
    }
}