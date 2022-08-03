let s = 7
let t = 11
let a = 5
let b = 15;
const apples = [-2,2,1]
const oranges = [5, -6]
let totalapples = 0
let totaloranges = 0

const sumApple = apples.map((e) => {
   return e + a;
})

sumApple.forEach((e)=> {
    if(e >= s && e <= t) {
        totalapples += 1
    }
})

const sumOrange = oranges.map((e) => {
    return e + b;
 })
 
 sumOrange.forEach((e)=> {
     if(e >= s && e <= t) {
        totaloranges += 1
     }
 })

console.log(totalapples)
console.log(totaloranges)

//saida 1 e 1
