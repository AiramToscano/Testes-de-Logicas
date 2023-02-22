def Moedafalsa(array):
    maior = 0
    cont = 0
    for i in array:
        if(i > maior):
            maior = i
    for i in array:
        if(i < maior):
            cont += 1
    mensagem = "O numero de moedas falsas presentes são: " + str(cont)
    print(mensagem)






array = [1,3,4,4,4,4]

Moedafalsa(array)
