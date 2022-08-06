let vet2 = [2,6]
let vet4 = [24, 36]
let soma = 0

for(let i =1 ; i <= 100 ; i++) {
    if(vet2.every((num1) => i % num1 ===0)) {
        if(vet4.every((num2) => num2 % i ===0)) {
            soma +=1
        }
    }
}

console.log(soma)

