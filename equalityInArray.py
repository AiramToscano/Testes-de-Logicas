def equalizeArray(arr):
    cont = 0
    maior = 1
    for i in range(len(arr)):
        contador = arr.count(arr[i])
        if(contador > maior):
            maior = contador
    cont = len(arr) - maior
    return cont

array =  [10,27, 9, 10, 100, 38, 30, 32, 45, 29, 27, 29, 32, 38, 32, 38, 14, 38, 29, 30, 63, 29, 63, 91, 54, 10, 63]
print(equalizeArray(array))