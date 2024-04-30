# Função para preencher um vetor com 10 números reais
def preencher_vetor():
    vetor = []
    for i in range(10):
        numero = float(input(f"Digite o {i+1}º número real: "))
        vetor.append(numero)
    return vetor

# Função para calcular a quantidade de números negativos e a soma dos números positivos
def calcular_negativos_e_soma_positivos(vetor):
    quantidade_negativos = 0
    soma_positivos = 0
    for numero in vetor:
        if numero < 0:
            quantidade_negativos += 1
        else:
            soma_positivos += numero
    return quantidade_negativos, soma_positivos

# Preenchendo o vetor com 10 números reais
vetor = preencher_vetor()

# Calculando a quantidade de números negativos e a soma dos números positivos
negativos, soma_positivos = calcular_negativos_e_soma_positivos(vetor)

# Mostrando a quantidade de números negativos e a soma dos números positivos
print(f"Quantidade de números negativos: {negativos}")
print(f"Soma dos números positivos: {soma_positivos}")

