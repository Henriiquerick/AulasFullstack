const frame = (x, y) => {
    var line = '+';
    var middleLine = '-';
    if(x > 0 && y > 0){
        for(var i = 0; i < x - 2; i++){
            line = line + "-";
            middleLine = middleLine + ' ';
        }
        middleLine = middleLine + '-';
        line = line + '+'
        x = line;
        console.log(x)

        for(var i = 0; i < y - 2; i++){
            console.log(middleLine)
        }
        console.log(x)
    }
}
frame(3, 5)