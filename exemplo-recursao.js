n= 10


function testerecursao () {
  if(n === 0 ) {
    console.log("Chegou a zero")
  }
  if(n > 0 ) {
    console.log('Não chegou a zero')
    n -=1;
    testerecursao()
  }
}

testerecursao()