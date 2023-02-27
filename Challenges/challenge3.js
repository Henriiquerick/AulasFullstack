searchLetter = (letter, string) => {
    i = 0;
    letterAccount = 0;
    for(i in string){
        if(string[i] == letter){
            letterAccount += 1;
        }
    }
    console.log("Essa letra aparece um total de " + letterAccount + (letterAccount === 1 ? " vez" : ' vezes'));
}

searchLetter('o', 'Leonardo');