let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let operator = document.querySelector('#operator');
let button3 = document.getElementById('#result');



console.log('Hello world');
function hellow(operador1, operador2, sinal){
    let res;
    switch (sinal){
        case '-':
            res = operador1 - operador2;
            console.log(res);
            break;
        case '+':
            res = operador1 + operador2;
            console.log(res);
            break;
        case '*' || 'x':
            res = operador1 * operador2;
            console.log(res);
            break;
        case '/' || '%':
            res = operador1 / operador2;
            console.log(res);
            break;
    }
}
