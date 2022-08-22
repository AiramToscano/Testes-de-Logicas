const vet = [1,3,2,6,1,2];
const n = 6;
const k = 3;
let sum = 0;

for(let i = 0; i < n ; i ++) {
   for(let j = 0; j < n ; j ++) {
      if ((vet[i] + vet[j]) % k ===0 && i !== j) {
         sum += 1;

      }
   }
}


console.log(sum/2);