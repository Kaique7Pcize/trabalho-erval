# Função para ler 5 valores do usuário
def ler_valores():
    valores = []
    for i in range(5):
        valor = float(input(f"Digite o {i+1}º valor: "))
        valores.append(valor)
    return valores

# Função para encontrar a posição do maior valor na lista
def encontrar_posicao_maior(valores):
    maior = max(valores)
    return valores.index(maior)

# Função para encontrar a posição do menor valor na lista
def encontrar_posicao_menor(valores):
    menor = min(valores)
    return valores.index(menor)

# Lendo os 5 valores
valores = ler_valores()

# Encontrando a posição do maior e do menor valor
posicao_maior = encontrar_posicao_maior(valores)
posicao_menor = encontrar_posicao_menor(valores)

# Mostrando a posição do maior e do menor valor
print("Posição do maior valor:", posicao_maior)
print("Posição do menor valor:", posicao_menor)

