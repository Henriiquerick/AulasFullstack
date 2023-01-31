//For clássico = Utilizado com iteráveis(arrays ou strings)
//For In = Retorna o índice ou chave (string, array ou objetos)
//For of = Retorna o valor em si (iteráveis, arrays ou strings)


//For In
const frutas = ['Pera', 'Maçã', 'Uva', 'Maracuja'];

for (let i in frutas) {
    console.log(frutas[i]);
}

console.log('######')

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 20
};


for(let i in pessoa){
    console.log(pessoa[i])
}

console.log('######')

//For of

const nome = 'Luiz Otavio';

for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('######')

for (let valor of nome){
    console.log(valor)
}

console.log('######')

frutas.forEach(function(el, indice, array) {
    console.log(el, indice, array)
})








