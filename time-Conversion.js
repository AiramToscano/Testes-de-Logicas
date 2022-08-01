
function timer(s) {
    const time = String(s)
    let teste = time.split(':');
    let teste15 = teste[2].split('')
    if(teste15[2] == 'P') {
       let teste1 = time.split(':')
       let teste2 = teste1[0].split('0')
       if( teste2.length > 1) {
        if(Number(teste2[1]) < 12) {
            let test5 = teste1[2].split('PM')
            const saida = `${Number(teste2[1]) + 12}:${teste1[1]}:${test5[0]}`;
            return saida
           }
       }
       if( teste2.length == 1) {
        if(Number(teste2[0]) < 12) {
            let test5 = teste1[2].split('PM')
            const saida = `${Number(teste2[0]) + 12}:${teste1[1]}:${test5[0]}`;
            return saida
           }
       }
       if( teste2.length == 1) {
        let teste3 = time.split('P');
       if(Number(teste1[1]) >= 12 || Number(teste1[1]) <= 23) {
        const saida =  teste3[0];
        return saida;
       }
       }
    }
    if(teste15[2] == 'A') {
        let teste1 = time.split(':')
        let teste2 = teste1[0].split('0')
        if( teste2.length > 1) {
            let teste3 = time.split('A');
            if(Number(teste1[0]) < 12) {
                const saida =  teste3[0]
                return saida;
               }
        }
        if( teste2.length == 1) {
        if(Number(teste2[0]) >= 12 || Number(teste2[0]) <= 23 ) {
            let test5 = teste1[2].split('AM')
            const saida = `0${Number(teste2[0]) - 12}:${teste1[1]}:${test5[0]}`
            return saida
           }
        }
     }
}

console.log(timer('11:59:59PM'))