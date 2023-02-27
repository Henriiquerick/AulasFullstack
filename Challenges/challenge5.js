function ifNull(){
    const person = {
        name: "Leonardo",
        surname: null,
        age: 23
    }

    for(i in person){
        if(person[i] == null){
           delete person[i];
        }
    }
    console.log(person)
}
ifNull()