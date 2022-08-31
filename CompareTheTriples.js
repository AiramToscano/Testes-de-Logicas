function compareTriplets(a, b) {
    let suma = 0;
    let sumb = 0;
    let vet = []
    a.forEach((e,index1) => {
        b.forEach((i,index2) => {
            if(index1 === index2) {
                if(e > i) {
                    suma += 1;
                }
                if(i > e) {
                    sumb += 1;
                }
            }
        })
    })
    vet.push(suma)
    vet.push(sumb)
  return vet
}

const result = compareTriplets([2,3,5], [1,5,3])

console.log((result.join(' ') + '\n'))
