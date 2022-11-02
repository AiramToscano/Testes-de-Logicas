def angryProfessor(k, a):
    cont = 0
    for i in a:
        if(i < 2):
            cont += 1
    if(cont >= k):
        return 'NO'
    return 'YES'

vet = [-1,-3,5,2]
print(angryProfessor(3,vet))


print(type(1.5))