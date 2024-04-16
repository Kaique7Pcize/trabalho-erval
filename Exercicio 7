# Função para ler 10 números inteiros e armazená-los em um vetor
def ler_vetor():
    vetor = []
    for i in range(10):
        numero = int(input(f"Digite o {i+1}º número inteiro: "))
        vetor.append(numero)
    return vetor

# Função para encontrar o maior elemento e sua posição no vetor
def encontrar_maior(vetor):
    maior = vetor[0]
    posicao = 0
    for i in range(1, len(vetor)):
        if vetor[i] > maior:
            maior = vetor[i]
            posicao = i
    return maior, posicao

# Lendo os números inteiros e armazenando-os em um vetor
vetor = ler_vetor()

# Imprimindo o vetor
print("Vetor:", vetor)

# Encontrando o maior elemento e sua posição no vetor
maior_elemento, posicao = encontrar_maior(vetor)

# Imprimindo o maior elemento e sua posição
print(f"O maior elemento do vetor é {maior_elemento} e está na posição {posicao}.")

