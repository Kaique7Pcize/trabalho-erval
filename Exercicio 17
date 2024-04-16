# Função para ler um vetor de 10 números inteiros
def ler_vetor():
    vetor = []
    print("Digite 10 números inteiros:")
    for _ in range(10):
        numero = int(input("Digite um número inteiro: "))
        vetor.append(numero)
    return vetor

# Função para atribuir valor 0 a elementos negativos no vetor
def atribuir_zero_negativos(vetor):
    for i in range(len(vetor)):
        if vetor[i] < 0:
            vetor[i] = 0

# Lendo o vetor de 10 números inteiros
vetor = ler_vetor()

# Atribuindo valor 0 aos elementos negativos no vetor
atribuir_zero_negativos(vetor)

# Mostrando o vetor após a modificação
print("Vetor após atribuir valor 0 a elementos negativos:", vetor)

