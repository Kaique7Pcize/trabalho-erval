# Função para ler um vetor de 10 posições
def ler_vetor():
    vetor = []
    for i in range(10):
        elemento = int(input(f"Digite o valor para a posição {i+1}: "))
        vetor.append(elemento)
    return vetor

# Função para contar quantos valores pares há no vetor
def contar_pares(vetor):
    contador_pares = 0
    for elemento in vetor:
        if elemento % 2 == 0:
            contador_pares += 1
    return contador_pares

# Lendo o vetor de 10 posições
print("Digite os valores para o vetor:")
vetor = ler_vetor()

# Contando quantos valores pares o vetor possui
pares = contar_pares(vetor)

# Escrevendo a quantidade de valores pares no vetor
print(f"O vetor possui {pares} valor(es) par(es).")
