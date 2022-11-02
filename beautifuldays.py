def beautifulDays(i, j, k):
    cont= 0
    for num in range(i,j+1):
        numero = str(num)
        numerolist = list(numero)
        numerolist.reverse()
        reverserd_num = ''.join(numerolist)
        total = (num - int(reverserd_num))
        tst = total % k
        if(tst == 0):
            cont+=1
    return cont


print(beautifulDays(20, 23, 6))