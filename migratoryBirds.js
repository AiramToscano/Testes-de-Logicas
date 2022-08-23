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


// em baixo é um exemplo de tabela hash, quando voce da chave e valor para o programa,
//ele fica muito mais rapido

let vet1 = [1,2,3,4,5,4,3,2,1,3,4]

 function migratoryBirds2(arr) {
    let array = []
    let cont1 = 0;
    let cont2 = 0;
    let cont3 = 0;
    let cont4 = 0;
    let cont5 = 0;
    const vet2ord = arr.sort((a,b) => a-b);
    vet2ord.forEach((e) => {
        if(e == 1) {
            cont1 += 1;
        }
        if(e == 2) {
            cont2 += 1;
        }
        if(e == 3) {
            cont3 += 1;
        }
        if(e == 4) {
            cont4 += 1;
        }
        if(e == 5) {
            cont5 += 1;
        }
    })
    array.push(
        {
            chave: 1,
            valor: cont1,
        },
        {
            chave: 2,
            valor: cont2,
        },
        {
            chave: 3,
            valor: cont3,
        },
        {
            chave: 4,
            valor: cont4,
        },
        {
            chave: 5,
            valor: cont5,
        }
        )
    const vet2ord2 = array.sort((a,b) => {
        if(a.valor > b.valor) return -1
        if(a.chave < b.chave) return -1;
        return 0
    })

    return vet2ord2[0].chave
}

 console.log(migratoryBirds2(vet1))