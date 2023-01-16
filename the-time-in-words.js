function timeInWords(h, m) {
    // Write your code here
const minutes = ['zero','one','two','three','four','five',
           'six','seven','eight','nine','ten',
           'eleven','twelve','thirteen','fourteen',
           'fifteen','sixteen','seventeen','eighteen',
           'nineteen','twenty','twenty one', 'twenty two',
           'twenty three','twenty four','twenty five',
           'twenty six','twenty seven','twenty eight',
           'twenty nine', 'thirty']
const hours = ['zero','one','two','three','four','five',
         'six','seven','eight','nine','ten','eleven','twelve']

if (m == 0) return `${hours[h]} o' clock`
if (m == 15) return `quarter past ${hours[h]}`
if (m == 30) return `half past ${hours[h]}`
if (m== 45){
    if (m== 12) return `quarter to ${hours[1]}`
    else {
        return `quarter to ${hours[h+1]}`
    }
}
if(m > 0 && m < 30) {
    if(m > 1) return `${minutes[m]} minutes past ${hours[h]}`
    else return`${minutes[m]} minute past ${hours[h]}`
}
if (m > 30 && m < 60){
    if (h == 12) return `${minutes[60-m]} minutes to ${hours[1]}`
    else return `${minutes[60-m]} minutes to ${hours[h+1]}`
}
    

}

console.log(timeInWords(1,1))