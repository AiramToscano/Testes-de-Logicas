let vet = [1,2,1,3,2]
let vet0 = [4]
let s = 3;
let d = 2;
let soma = 0

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.

// sample INput 0 
// 5
// 1 2 1 3 2
// 3 2

// sample Output0

// 2


vet.forEach((_e, index) => {
        let teste = vet.slice(index, index+d);
        let teste2 = teste.reduce((arr, prev) => {
         return arr + prev
        })
      if(teste2 === s) {
        soma+=1
      }
})

console.log(soma)