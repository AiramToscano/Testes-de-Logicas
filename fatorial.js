function recursao(x) {
if(x===1) return 1;
return x * recursao(x-1)
}

console.log(recursao(7))