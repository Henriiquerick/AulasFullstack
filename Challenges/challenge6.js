var persons = [
    {itsMe: true, admin: true, name: 'Rickson'},
    {itsMe: false, admin: false, name: 'Jorge'},
    {itsMe: false, admin: true, name: 'Fernanda'},
    {itsMe: false, admin: false, name: 'Nathan'},
    {itsMe: false, admin: true, name: 'Biris'},
];

function organizator(list){
    //se return < 0 então A vem primeiro que o B
    //se return > 0 então B vem primeiro que o A
    list.sort((a, b) => {
        if(a.itsMe == true){
            return -1;
        };
    });
    list.sort((a, b) => {
        if(a.admin == true && b.admin == false){
            return -1;
        }
    })
    console.log(list)
}

organizator(persons)