function pageCount(n, p) {
    let cont1dif =  (p - 1) / 2
    let cont2dif = (n - p) / 2
    if(cont1dif % 2 ==0 ) {
        let real = Math.ceil(cont2dif)
        let real2 = Math.ceil(cont1dif)
        if(real2 < real) return real2
        if(real < real2) return real
        return real
    }
    if(cont1dif % 2 !=0 ) {
        let real = Math.floor(cont2dif)
        let real2 = Math.ceil(cont1dif)
        if(real2 < real) return real2
        if(real < real2) return real
        return real
    }
}


console.log(pageCount(6,5))