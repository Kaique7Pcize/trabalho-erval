# Função para ler um vetor de 8 posições
def ler_vetor():
    vetor = []
    for i in range(8):
        elemento = float(input(f"Digite o valor para a posição {i}: "))
        vetor.append(elemento)
    return vetor

# Função para ler dois valores X e Y
def ler_posicoes():
    x = int(input("Digite a posição X: "))
    y = int(input("Digite a posição Y: "))
    return x, y

# Função para calcular a soma dos valores nas posições X e Y
def calcular_soma(vetor, x, y):
    soma = vetor[x] + vetor[y]
    return soma

# Lendo o vetor de 8 posições
print("Digite os valores para o vetor:")
vetor = ler_vetor()

# Lendo as posições X e Y
x, y = ler_posicoes()

# Verificando se as posições estão dentro do intervalo válido
if 0 <= x < 8 and 0 <= y < 8:
    # Calculando a soma dos valores nas posições X e Y
    soma = calcular_soma(vetor, x, y)
    print(f"A soma dos valores nas posições {x} e {y} é: {soma}")
else:
    print("Posições inválidas. As posições devem estar entre 0 e 7.")
