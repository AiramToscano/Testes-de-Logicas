let vet = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function scores(vet) {

    let maior = 0;
    let Nummenor = vet[0];
    let Nummaior = vet[0];
    let menor = 0;
    let vetScores = []
    vet.forEach((e) => {
        if(Nummenor > e) {
            Nummenor = e
            menor += 1;
        }
        if(Nummaior < e) {
            Nummaior = e
            maior += 1;
        }
    })
    vetScores.push(maior)
    vetScores.push(menor)
    return vetScores
}


console.log(scores(vet));
//saida [ 2, 4]

