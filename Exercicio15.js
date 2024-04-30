# Função para ler um vetor de 20 números inteiros e eliminar elementos repetidos
def ler_vetor_sem_repeticao():
    vetor = []
    conjunto = set()  # Usando um conjunto para evitar elementos repetidos
    print("Digite 20 números inteiros:")
    for _ in range(20):
        numero = int(input("Digite um número inteiro: "))
        if numero not in conjunto:
            vetor.append(numero)
            conjunto.add(numero)
    return vetor

# Lendo o vetor de 20 números inteiros e eliminando elementos repetidos
vetor_sem_repeticao = ler_vetor_sem_repeticao()

# Escrevendo os elementos do vetor sem repetição
print("\nElementos do vetor sem repetição:")
for elemento in vetor_sem_repeticao:
    print(elemento, end=" ")

