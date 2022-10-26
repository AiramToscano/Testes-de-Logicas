def designerPdfViewer(h, word):
    tamanhoword = len(word)
    lista = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
             "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    dict = {}
    valores = []
    maior = 0
    for i, j in zip(lista, h):
        dict[i] = j
    for i in word:
        if i in dict:
            valores.append(dict[i])
    maiorvalor = max(valores)
    valorFinal = tamanhoword * maiorvalor
    return valorFinal


h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5,
     5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
print(designerPdfViewer(h, "abc"))
