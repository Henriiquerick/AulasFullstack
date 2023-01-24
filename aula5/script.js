//Atribuição via desestruturação Array
let a = 'A';
let b = 'B';
let c = 'C';

let letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);

//Exemplo com "Rest" operator
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...resto] = numeros;
const [un, , trres, , cinco, ...rest] = numeros;
console.log(um, dois, tres);
console.log(resto);
console.log(un, trres, cinco);
console.log(rest);