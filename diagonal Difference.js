const vet = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
let sum1= 0
let sum2 = 0
vet.forEach((array1, index) => {
    array1.forEach((e, index2) => {
     if(index === index2) {
        return sum1+= e
     }
    })
})

const vet2 = vet.reverse();

vet2.forEach((array1, index) => {
    array1.forEach((e, index2) => {
     if(index === index2) {
        return sum2+= e
     }
    })
})

const dif = sum1 - sum2;

const resultado = Math.abs(dif);

console.log(resultado)