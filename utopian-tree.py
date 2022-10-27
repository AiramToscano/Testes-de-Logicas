def utopianTree(n):
    period = dict()
    if( n == 0):
        return 1
    for i in range(60):
        if(i % 2 != 0 and i > 4):
            period[i] =  period[i - 1] *  2
        if(i % 2 != 0 and i != 0 and i <= 4):
            period[i] =  i * 2
        if(i % 2 == 0 and i != 0):
            period[i] = period[i - 1] + 1
    return period[n]
    # Write your code


print(utopianTree(4))