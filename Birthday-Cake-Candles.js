const vet = [4,4,1,3];
const vet1= [ 10,10,10,10]
let sum = 0
// esse desafio é ver quantas vezes o maior valor do vetor se repete.
const vet2ord = vet1.sort((a,b) => a-b);
 vet2ord.forEach((num1) => {
    if(vet2ord[vet2ord.length - 1] === num1) {
     sum+=1;
    }
 })
console.log(sum)