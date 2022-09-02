function sockMerchant(n, ar) {
    // Write your code here
    let sum = 0;
    let vet1 = []
    ar.forEach((e) => {
        const teste2 = vet1.some((j) => e === j)
        if(!teste2) {     
            vet1.push(e);
            const teste = ar.filter((i) => i === e)
            if(teste.length % 2 === 0) {
                sum += (teste.length / 2)
            }
            if(teste.length % 2 !== 0) {
                sum += ((teste.length - 1) / 2)
            }
        }
       
    })
return sum
}

let vet = [10, 20, 20, 10, 10, 30, 50, 10, 20];



console.log(sockMerchant(5, vet))