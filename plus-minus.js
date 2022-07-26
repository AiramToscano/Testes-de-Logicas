const vet = [1,1,0,-1,-1]
let sumpositivo = 0;
let sumnegativo = 0;
let sumzero = 0;
vet.forEach((e) => {
   if( e < 0) return sumnegativo += 1;
   if( e > 0) return sumpositivo += 1;
   sumzero += 1;
})

const resultpositivo = sumpositivo / vet.length;
const resultnegativo = sumnegativo / vet.length;
const resultzero = sumzero / vet.length;

console.log(resultpositivo.toFixed(6), resultnegativo.toFixed(6), resultzero.toFixed(6))