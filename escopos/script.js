// if(true){
//     var mensagem = "Olá"
// };
// console.log(mensagem)

var pais;
const paises = ['Argentina', 'Brasil', 'França'];
for(i = 0; i < paises.length; i++){
    pais = paises[i];
    if(paises[i] == 'Brasil'){
        paises.push('Alemanha')
    }
    if(paises[i] == 'Alemanha'){
        delete paises[0];
        console.log(paises)
    }
    console.log(pais)
}