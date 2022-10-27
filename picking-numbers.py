def pickingNumbers(a):
    newset = list(set(a))
    count = 0
    for i in range(len(newset) -1):
        if newset[i + 1] - newset[i] <= 1:
            curr = a.count(newset[i+1]) + a.count(newset[i])
            print(curr)
            if curr > count:
                count = curr
    return count


vet =[4,6,5,3,3,1]
vet2 = [4 ,97 ,5 ,97 ,97 ,4 ,97 ,4 ,97 ,97 ,97 ,97 ,4 ,4 ,5 ,5 ,97 ,5 ,97 ,99 ,4 ,97 ,5 ,97 ,97 ,97 ,5 ,5 ,97 ,4 ,5 ,97 ,97 ,5 ,97 ,4 ,97 ,5 ,4 ,4 ,97 ,5 ,5 ,5 ,4 ,97 ,97 ,4 ,97 ,5 ,4 ,4 ,97 ,97 ,97 ,5 ,5 ,97,4,97,97,5,4,97,97,4,97,97,97,5,4,4,97,4,4,97,5,97,97,97,97,4,97,5,97,5,4,97,4,5,97,97,5,97,5,97,5,97,97,97]

print(pickingNumbers(vet))