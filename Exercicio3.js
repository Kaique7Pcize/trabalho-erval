# Definindo a função para calcular o quadrado dos elementos de um vetor
def calcular_quadrado(vetor):
    quadrados = [x ** 2 for x in vetor]
    return quadrados

# Função para ler um conjunto de números reais e armazená-los em um vetor
def ler_vetor(tamanho):
    vetor = []
    for i in range(tamanho):
        elemento = float(input(f"Digite o {i+1}º número real: "))
        vetor.append(elemento)
    return vetor

# Função para imprimir um vetor
def imprimir_vetor(vetor):
    print("[", end="")
    for i in range(len(vetor)):
        print(vetor[i], end="")
        if i != len(vetor) - 1:
            print(", ", end="")
    print("]")

# Lendo o primeiro conjunto de números reais
print("Digite os 10 números do primeiro conjunto:")
conjunto1 = ler_vetor(10)

# Calculando o quadrado dos elementos do primeiro conjunto
quadrados_conjunto1 = calcular_quadrado(conjunto1)

# Imprimindo o primeiro conjunto e seus quadrados
print("\nPrimeiro conjunto:")
imprimir_vetor(conjunto1)
print("Quadrados do primeiro conjunto:")
imprimir_vetor(quadrados_conjunto1)

# Lendo o segundo conjunto de números reais
print("\nDigite os 10 números do segundo conjunto:")
conjunto2 = ler_vetor(10)

# Calculando o quadrado dos elementos do segundo conjunto
quadrados_conjunto2 = calcular_quadrado(conjunto2)

# Imprimindo o segundo conjunto e seus quadrados
print("\nSegundo conjunto:")
imprimir_vetor(conjunto2)
print("Quadrados do segundo conjunto:")
imprimir_vetor(quadrados_conjunto2)
