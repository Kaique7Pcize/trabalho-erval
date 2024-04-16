# Função para ler um vetor de 5 números reais
def ler_vetor():
    vetor = []
    print("Digite 5 números reais:")
    for _ in range(5):
        numero = float(input("Digite um número real: "))
        vetor.append(numero)
    return vetor

# Função para mostrar o vetor na ordem direta
def mostrar_ordem_direta(vetor):
    print("Vetor na ordem direta:", vetor)

# Função para mostrar o vetor na ordem inversa
def mostrar_ordem_inversa(vetor):
    print("Vetor na ordem inversa:", vetor[::-1])

# Lendo o vetor de 5 números reais
vetor = ler_vetor()

while True:
    # Lendo o código inteiro
    codigo = int(input("Digite o código (0 para finalizar, 1 para ordem direta, 2 para ordem inversa): "))
    
    if codigo == 0:
        print("Programa finalizado.")
        break
    elif codigo == 1:
        mostrar_ordem_direta(vetor)
    elif codigo == 2:
        mostrar_ordem_inversa(vetor)
    else:
        print("Código inválido. Por favor, digite 0, 1 ou 2.")

