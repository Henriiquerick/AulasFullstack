function ifNull(originalObject){

    for(i in originalObject){
        if(originalObject[i] == null){
           delete originalObject[i];
        }
    }
    console.log(originalObject)
}
ifNull({name: "Leonardo", surname: null, age: 23});