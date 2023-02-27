function solution(n) {
    nLenght = n.toString();
    if(nLenght.length > 1){
        let numberString = n.toString();
        let digitOne = numberString[0];
        let digitTwo = numberString[1];
        let numberOne = parseInt(digitOne);
        let numberTwo = parseInt(digitTwo);
        let sum = numberOne + numberTwo;
        console.log(sum)
    }
   
   }
   solution(29);