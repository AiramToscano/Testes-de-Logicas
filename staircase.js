n=4;
let symbol = "#";
let inputline = "";
let inputposition = n

for(let i= 0; i <= n ; i ++) {
    for(let colun = 0 ; colun < n; colun ++) {
        if (colun < inputposition) {
            inputline = inputline + " ";
        } 
        if(colun >= inputposition) {
            inputline = inputline + symbol;
        }
    }
    if( i !== 0) { // para não imprimir espaço na ultima linha
        console.log(inputline);
    }
    inputline = "";
    inputposition = inputposition - 1;
}

// saida é 
//    *
//   **
//  *** 
// ****
