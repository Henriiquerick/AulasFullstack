function soma(x = 1, y = 0){
    const resultado = x + y;
    return resultado;
}

console.log(soma());

function criaPessoa(nome, idade, sexo){
    return {
        nome: nome,
        idade: idade,
        sexo: sexo
    };
};

const pessoa1 = criaPessoa('Luiz', 14, 'Masculino');
console.log(pessoa1.nome);

let a = 'A';
let b = 'B';
let c = 'C';

let letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c)