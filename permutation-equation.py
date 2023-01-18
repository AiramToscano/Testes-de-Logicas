def permutationEquation(p):
    lista = []
    lista2 = []
    for i in range(len(p)):
        for j in range(len(p)):
            if((i+1) == p[j]):
                lista.append(j+1)
    for i in lista:
        for j in range(len(p)):
            if(i == p[j]):
                lista2.append(j+1)
    return lista2

array = [4,3,5,1,2]

# Sample Input 1

# 5
# 4 3 5 1 2
# Sample Output 1

# 1
# 3
# 5
# 4
# 2