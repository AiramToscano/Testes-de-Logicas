function squares(a, b) {
    let sum = 0
    const vet = []
    for(let i = 1 ; i < 100000; i++) {
        let num = i ** 2
          vet.push(num)
    }
    vet.forEach((e) => {
        if(e >= a && e <= b) {
            sum +=1
        }
    })
    return sum

}

console.log(squares(465868129,988379794))