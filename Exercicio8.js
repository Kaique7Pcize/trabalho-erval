# Função para ler 6 valores inteiros do usuário
def ler_valores():
    valores = []
    for i in range(6):
        valor = int(input(f"Digite o {i+1}º valor inteiro: "))
        valores.append(valor)
    return valores

# Função para mostrar os valores na ordem inversa
def mostrar_na_ordem_inversa(valores):
    print("Valores na ordem inversa:")
    for valor in reversed(valores):
        print(valor)

# Lendo os 6 valores inteiros
valores = ler_valores()

# Mostrando os valores na ordem inversa
mostrar_na_ordem_inversa(valores)

