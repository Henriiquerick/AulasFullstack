const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    },
    familia: {
        pai: {
            nome: 'paulo',
            familia: {
                pai: 'odin',
                familia: {
                    pai: 'thor',

                },
                endereco: {
                    rua: 'macacolandia2',
                    numero: '001'
                }
            },
            endereco: {
                rua: 'macacolandia',
                numero: '123'
            }
        }
    }
};

const {nome, sobrenome, ...rest} = pessoa;

console.log(rest);
