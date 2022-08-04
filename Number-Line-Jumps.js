function kangaroo(x1, v1, x2, v2) {
    return v2 < v1 && (x2 - x1) % (v1 - v2) === 0 ? "YES" : "NO";
}

// x1 + k*v1 == x2 + k*v2 a formula do problema
// (x1 - x2) == k*(v2 - v1) 
// e isso k deve ser um inteiro sem sinal, ou seja, 
// devemos verificar que (x1 - x2)é um múltiplo de (v2 - v1). 
// Além disso, seus sinais devem ser os mesmos, 
// e o resto após a divisão deve ser 0 -- podemos usar o %operador para isso.


console.log(kangaroo(28,8,96,2))


