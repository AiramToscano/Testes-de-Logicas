function dayOfProgrammer(year) {
    if(year % 4 === 0 && year % 100 !== 0) {
         return `12.09.${year}`
    }
    if(year % 400 === 0) {
        return `12.09.${year}`
    }
    if(year % 4 === 0 && year < 2000) {
        return `12.09.${year}`
    }
    if(year === 1918) {
        return `26.09.${year}`
    }
 return `13.09.${year}`
}

console.log(dayOfProgrammer(2000))