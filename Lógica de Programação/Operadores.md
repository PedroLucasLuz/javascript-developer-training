# OPERADORES

## OPERADORES ARITIMÉTICOS

- Realizam operações matemáticas com números.

```python
soma = 5 + 3  # Adição
subtracao = 7 - 2  # Subtração
multiplicacao = 4 * 6  # Multiplicação
divisao = 10 / 2  # Divisão
resto = 10 % 3  # Resto da divisão
```

## OPERADORES DE COMPARAÇÃO

• Comparam dois valores e retornam um resultado booleano (**`True`** ou **`False`**).

```python
igualdade = (5 == 5)  # Igualdade
desigualdade = (3 != 7)  # Desigualdade
maior_que = (8 > 3)  # Maior que
menor_que_ou_igual = (4 <= 4)  # Menor que ou igual
```

## OPERADORES LÓGICOS

- Realizam operações lógicas entre valores booleanos.

```python
and_logico = True and False  # E lógico
or_logico = True or False  # Ou lógico
not_logico = not True  # Negação lógical
```

## OPERADORES DE ATRIBUIÇÃO

- Atribuem valores a variáveis.

```python
x = 10  # Atribuição simples
y += 5  # Atribuição com adição (y = y + 5)
z -= 3  # Atribuição com subtração (z = z - 3)
```

## EXEMPLO DE USO COMBINADO

- Vamos criar um exemplo que utiliza vários operadores em conjunto. Suponha que estamos calculando o custo total de um produto com base na quantidade e no preço unitário, aplicando um desconto de 10%.

```python
# Dados do produto
quantidade = 20
preco_unitario = 50.0
desconto = 0.10

# Cálculos
subtotal = quantidade * preco_unitario
desconto_total = subtotal * desconto
total_com_desconto = subtotal - desconto_total

# Exibição dos resultados
print("Quantidade:", quantidade)
print("Preço Unitário: R$", preco_unitario)
print("Subtotal: R$", subtotal)
print(f"Desconto ({desconto*100}%): R$", desconto_total)
print("Total com Desconto: R$", total_com_desconto)
```

Neste exemplo:

- Usamos operadores aritméticos para calcular o subtotal e o desconto total.
- Aplicamos um operador de atribuição para calcular o total com desconto.

<aside>
📢 Entender como esses operadores funcionam e como podem ser combinados é essencial para a construção de lógica em programas Python.

</aside>
