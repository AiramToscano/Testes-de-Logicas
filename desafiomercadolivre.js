let n = 6;
let max = 9999;
let sum = 0;
let array = []

for(let min = 1000; min <= max ; min ++) {
     let parse = String(min);
     let parsearray = parse.split('');
     sum = parsearray.reduce((arr,prox) => {
        return Number(arr) + Number(prox);
     })
     if(sum == 21) {
        const teste = parsearray.every((e) => e <= n);
        if(teste) {
           
            array.push(parsearray)
        }
     }
}
if(array.length > 0) {
array.forEach((e) => {
   console.log(e.join(''));
})
// const stringArrat2 = array[1].join('')
// console.log(`${stringArrat}, ${stringArrat2}`)
}

if(array.length <= 0) {
 console.log('Nenhum valor foi encontrado')
   }

