def isPower(arr):
    potencia = []
    todospotencia = []
    for i in range(100):
        num = 2 ** i
        todospotencia.append(num)
    for i in arr:
        if (i in todospotencia):
            potencia.append(1)
        if (i not in todospotencia):
            potencia.append(0)
    return potencia


print(isPower([2, 2, 44, 137, 2, 512]))