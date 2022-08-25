function bonAppetit(bill, k, b) {
    
    const somaTotal = bill.reduce((arr, prox) => {
        return arr + prox;
    })
    let valorsub = somaTotal - bill[k]
    let media = valorsub / 2;
    let valorFinal = b - media;
    if(valorFinal === 0) {
    console.log("Bon Appetit")
        
    } else{
         console.log(valorFinal)
    }
    // Write your code here

}

bonAppetit([3,10,2,9], 1, 12);