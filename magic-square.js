function formingMagicSquare(s) {
    const vet1 = [1,2,3,4,5,6,7,8,9]
    const vetauxiliar = []
    const vetorrepetido = []
    s.forEach((e)=> {
     e.forEach((arr) => {
         vetauxiliar.push(arr)
     })
    })
    const arrayFilter = vetauxiliar.filter((item, index, array) => array.indexOf(item) !== index)
    const difference = vet1.filter(x => vetauxiliar.indexOf(x) === -1);
    console.log(difference)
    console.log(arrayFilter)
    if(arrayFilter.length > 1) {
        const sum = (arrayFilter[0] - difference[0]) + (difference[1] - arrayFilter[1])     
        return sum
    }
    if(arrayFilter.length <= 1) {
        const sum = difference[0] - arrayFilter[0] 
        return sum
    }
    
}

console.log(formingMagicSquare([[4,1,5], [7,6,4], [7,2,2]]))