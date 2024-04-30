# Função para receber um vetor com 10 posições do usuário
def receber_vetor():
    vetor = []
    for i in range(10):
        elemento = float(input(f"Digite o valor para a posição {i+1}: "))
        vetor.append(elemento)
    return vetor

# Função para encontrar o maior elemento do vetor
def encontrar_maior(vetor):
    maior = vetor[0]
    for elemento in vetor:
        if elemento > maior:
            maior = elemento
    return maior

# Função para encontrar o menor elemento do vetor
def encontrar_menor(vetor):
    menor = vetor[0]
    for elemento in vetor:
        if elemento < menor:
            menor = elemento
    return menor

# Recebendo o vetor com 10 posições do usuário
print("Digite os valores para o vetor:")
vetor = receber_vetor()

# Encontrando o maior e o menor elemento do vetor
maior = encontrar_maior(vetor)
menor = encontrar_menor(vetor)

# Imprimindo o maior e o menor elemento do vetor
print(f"O maior elemento do vetor é: {maior}")
print(f"O menor elemento do vetor é: {menor}")
