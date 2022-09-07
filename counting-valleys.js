function countingValleys(steps, path) {
    let cont = 0;
    let total = 0;
   let teste = path.split('')
   for(let i = 0; i <= teste.length; i++) {
    if(String(teste[i]) === 'U') {
        cont += 1;
    }
     if(String(teste[i])  === 'D') {
        cont -= 1;
    }
    console.log(teste[i-1],cont, teste[i]);
    if(teste[i] == "D" && teste[i-1] !== "U" && cont === 0){
        total += 1;
    }
    if(teste[i] == "U" && teste[i-1] == "U" && cont === 0) {
        total += 1;
    }
    if(teste[i] == "D" && teste[i-1] == "D" && cont === 0) {
        total -= 1;
    }
    if(teste[i] == "U" && teste[i-1] == "D" && cont === 0) {
        total += 1;
    }
   }
   return total;
}

console.log(countingValleys(8, "DUDDDUUDUU"))