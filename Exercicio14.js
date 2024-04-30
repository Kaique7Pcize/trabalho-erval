# Função para ler um vetor de 10 posições do usuário
def ler_vetor():
    vetor = []
    for i in range(10):
        valor = int(input(f"Digite o valor para a posição {i+1}: "))
        vetor.append(valor)
    return vetor

# Função para verificar se existem valores iguais no vetor e escrevê-los na tela
def verificar_valores_iguais(vetor):
    valores_iguais = set()  # Usando um conjunto para armazenar valores únicos
    valores_repetidos = set()
    for valor in vetor:
        if valor in valores_iguais:
            valores_repetidos.add(valor)
        else:
            valores_iguais.add(valor)
    return valores_repetidos

# Lendo o vetor de 10 posições
vetor = ler_vetor()

# Verificando e escrevendo na tela os valores iguais
valores_iguais = verificar_valores_iguais(vetor)
if valores_iguais:
    print("Valores iguais encontrados:", valores_iguais)
else:
    print("Não há valores iguais no vetor.")

