const vet = [1, 3, 5, 7, 9];

const vet2 = [5, 5, 5, 5, 5]
const vet2ord = vet.sort((a,b) => a-b);

let sumMin = 0;
let sumMax = 0;

vet2ord.forEach((e, index) => {
  if(index !== 0 ) {
    sumMin += e;
  }
  if(index != vet2ord.length - 1){
    sumMax += e;
    }
})

console.log(sumMax, sumMin)

// saida é 20/20
// saida é 16/24