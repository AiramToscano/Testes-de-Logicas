let vet = [1,1,2,2,2,5,6,6,6,6,6]

 function migratoryBirds(arr) {
    let largest = 1;
    let counter = largest;
    let type = 0;
    const vet2ord = arr.sort((a,b) => a-b);
    vet2ord.forEach((e, index) => {
        if(index < 50000) {
            largest = (vet2ord.lastIndexOf(e) - vet2ord.indexOf(e)) + 1;
            if (largest > counter) {
                counter = largest;
                type = e;
            }
        }
    })
return type;
}

// dica, quando for trabalhar com posiçoes de array, tentar usar o indexOF e o LastIndexOf

 console.log(migratoryBirds(vet))