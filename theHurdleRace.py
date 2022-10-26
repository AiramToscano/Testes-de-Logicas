def hurdleRace(k, height):
    maximoValor = max(height)
    if(maximoValor - k >= 0):
        return maximoValor - k
    return 0


print(hurdleRace(4, [1, 6, 3, 5, 2]))