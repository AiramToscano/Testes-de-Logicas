
def saveThePrisoner(n, m, s):
    # cont = s
    # cont2 =1
    # while cont2 <= m:
    #     if(cont == n):
    #         cont=0
    #     cont2 +=1
    #     cont +=1
    #     if(cont2 == m):
    #         return cont
    # for i in range(1,m+1):
    #     if(i >= m):
    #         return s
    #     if(s==n):
    #         s=0
    #     s+=1
    ans = (s+m-1)%n
    if ans==0:
        return n

    return ans





print(saveThePrisoner(3,7,3))
# saida é 2,3,4,1,2,3
# return 3