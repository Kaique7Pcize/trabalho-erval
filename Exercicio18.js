# Função para ler um vetor de 10 números inteiros
def ler_vetor():
    vetor = []
    print("Digite 10 números inteiros:")
    for _ in range(10):
        numero = int(input("Digite um número inteiro: "))
        vetor.append(numero)
    return vetor

# Função para contar e mostrar os múltiplos de x no vetor
def contar_e_mostrar_multiplos(vetor, x):
    multiplos = []
    for numero in vetor:
        if numero % x == 0:
            multiplos.append(numero)
    return multiplos

# Lendo o vetor de 10 números inteiros
vetor = ler_vetor()

# Lendo o número x
x = int(input("Digite um número inteiro para encontrar seus múltiplos no vetor: "))

# Contando e mostrando os múltiplos de x no vetor
multiplos = contar_e_mostrar_multiplos(vetor, x)

if multiplos:
    print(f"Os múltiplos de {x} no vetor são:", multiplos)
else:
    print(f"Não há múltiplos de {x} no vetor.")

