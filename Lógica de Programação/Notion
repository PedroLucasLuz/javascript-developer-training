# INTRODUÇÃO AO PYTHON

## **O QUE É LINGUAGEM DE PROGRAMAÇÃO?**

- As linguagens de programação para **solucionar qualquer tipo de problema** na área tecnológica computacional.
- Cada linguagem possui suas **particularidades**.
- Permite que um programador crie programas a partir de um **conjunto de ordens, ações consecutivas, dados e  algoritmos.**
- **Python** é uma linguagem de script de alto nível, de tipagem forte e dinâmica.

## **A LINGUAGEM PYTHON**

- Criado no ínicio dos anos 1990 por Guido van Rossum no Stichting Mathematisch Centrum (CWI), na Holanda, foi sucessor de uma linguagem chamada ABC.
- Em 2001, a Python Software Foundation (PSF) foi formada, uma organização sem fins lucrativos criada especificamente para possuir a propriedade intelectual relacionada ao Python.

## **PORQUE PYTHON?**

- **Python** é uma linguagem de programação clara e poderosa
- Usa uma **sintaxe clara**, facilitando a leitura dos programas que você escreve;
- Linguagem fácil, ideal para o desenvolvimento de protótipos e outras tarefas de programação;
- Grande biblioteca padrão, suporta muitas tarefas de programação
- Possui inúmeras bibliotecas que estendem seu poder de atuação.
- Linguagem interpretada, ou seja, uma vez escrito o código, este não precisa ser convertido em linguagem de máquina por um processo de compilação;
- Permite atribuição múltipla;
- O interpretador Python 3 utiliza unicode por padrão, o que torna possível usar nomes de variáveis com acento e até outros caracteres especiais, porém não é uma boa prática.
- Códigos em Python pode ser feito tanto em local quanto em nuvem.

# SINTAXE BÁSICA

## DECLARAÇÃO DE VARIÁVEIS

- Em **Python**, você pode criar variáveis atribuindo valores a elas. O tipo da variável é inferido automaticamente.

```python
nome = "Alice"  # Uma variável de string
idade = 25      # Uma variável de inteiro
altura = 1.75   # Uma variável de ponto flutuante
```

## PRINT PARA EXIBIR INFORMAÇÕES

- A função **`print()`** é usada para exibir informações no console.

```python
print("Olá, Python!")
print(nome)
print("Idade:", idade)
```

## COMENTÁRIOS

- Comentários são anotações no código que não são executadas. Eles começam com o caractere **`#`**.

```python
# Este é um comentário
nome = "Bob"  # Comentário ao lado de uma linha de código
```

## EXEMPLO DE PROGRAMA SIMPLES

- Vamos criar um programa simples que solicita ao usuário que insira seu nome e idade, e depois imprime uma mensagem com essas informações.

```python
# Solicitar ao usuário que insira seu nome
nome = input("Digite seu nome: ")

# Solicitar ao usuário que insira sua idade
idade = int(input("Digite sua idade: "))  # Convertemos a entrada para um número inteiro

# Imprimir uma mensagem com o nome e a idade
print("Olá, " + nome + "! Você tem", idade, "anos.")
```

Neste exemplo:

- **`input()`** é usado para obter entradas do usuário.
- **`int()`** é usado para converter a entrada para um número inteiro.
- A função **`print()`** é usada para exibir mensagens no console.

Python usa a indentação para definir blocos de código, não utilizando chaves como algumas outras linguagens. A indentação padrão é de quatro espaços, mas é crucial manter a consistência.

# TIPOS DE DADOS BÁSICOS

## NÚMEROS

• **Inteiros (`int`):** Números inteiros sem parte fracionária.

• **Ponto Flutuante (`float`):** Números com parte fracionária.

```python
idade = 25 # Inteiros
altura = 1.75 # Ponto Flutuante
```

- Python suporta operações aritméticas padrão como adição (**`+`**), subtração (**`-`**), multiplicação (**`*`**), e divisão (**`/`**) com números.

## BOOLEANOS

- Representam valores lógicos **`True`** (verdadeiro) ou **`False`** (falso).

```python
tem_idade_para_votar = True
```

- Resultado de operações de comparação e lógicas.

```python
resultado = 5 > 3  # Resultado será True
```

- Operadores lógicos como **`and`**, **`or`** e **`not`**.

```python
maior_de_idade = idade >= 18
pode_dirigir = maior_de_idade and tem_idade_para_votar
```

## STRINGS

- Sequências de caracteres.
- Podem ser definidas usando aspas simples (**`'`**) ou duplas (**`"`**).

```python
nome = "Alice"
mensagem = 'Olá, Python!'
```

- Operações com strings, como concatenação e formatação.

```python
cumprimento = "Olá, " + nome + "!"
print(cumprimento)
```

- Indexação e fatiamento de strings.

```python
primeira_letra = nome[0]
parte_do_nome = nome[1:4]
```

<aside>
📢 Esses são os tipos de dados básicos em Python que você provavelmente encontrará com mais frequência. Ao manipular esses tipos de dados, você terá uma base sólida para trabalhar em diversos problemas e construir programas mais complexos.

</aside>

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

# ATIVIDADES ( SINTAXE BÁSICA, TIPOS DE DADOS BÁSICOS E OPERADORES )

## **Calculadora de Pedidos de Produtos**

Crie um programa simples em Python que interage com o usuário para calcular o valor total de um pedido de um produto. Siga as instruções abaixo para criar o programa:

1. **Solicitação de Informações do Produto:**
    - O programa começará pedindo ao usuário para inserir algumas informações sobre um produto. São solicitadas as seguintes informações:
        - Nome do produto (**`nome_produto`**): Solicita ao usuário que digite o nome do produto. Isso é feito usando a função **`input()`** para receber a entrada do usuário e armazenar o resultado na variável **`nome_produto`**.
        - Preço unitário do produto (**`preco_unitario`**): Solicita ao usuário que digite o preço unitário do produto. Usamos a função **`float(input())`** para garantir que a entrada seja interpretada como um número de ponto flutuante.
        - Quantidade desejada do produto (**`quantidade`**): Solicita ao usuário que digite a quantidade desejada do produto. Usamos a função **`int(input())`** para garantir que a entrada seja interpretada como um número inteiro.
2. **Cálculo do Preço Total:**
    - Com base nas informações fornecidas pelo usuário, o programa calcula o preço total do pedido multiplicando o preço unitário pela quantidade desejada. O resultado é armazenado na variável **`preco_total`**.
3. **Exibição de Informações e Resultado:**
    - O programa utiliza a função **`print()`** para exibir detalhes do pedido. As informações incluem:
        - Nome do produto.
        - Preço unitário formatado como uma string com duas casas decimais (R$XX,XX).
        - Quantidade desejada.
        - Preço total formatado como uma string com duas casas decimais (R$XX,XX).
4. **Formatação de String (f-strings):**
    - As f-strings são utilizadas para incorporar variáveis e valores diretamente em strings formatadas. Isso facilita a leitura e a escrita de código, garantindo que os valores sejam exibidos de maneira clara e legível.

### **Exemplo de Execução:**

Suponha que o usuário forneça as seguintes entradas durante a execução do programa:

- Nome do produto: "Camiseta"
- Preço unitário: 25.50
- Quantidade desejada: 3

O programa calculará o preço total (25.50 * 3) e exibirá os seguintes detalhes do pedido:

```python
Detalhes do Pedido:
Produto: Camiseta
Preço Unitário: R$25.50
Quantidade: 3
Preço Total: R$76.50
```

### Resposta:

```python
nome_do_produto = input("digite o nome do produto: ")
preco_unitario = float(input("digite o preço unitário: "))
quantidade = int(input("digite a quantidade: "))
preco_total = preco_unitario * quantidade
print("detalhes do pedido:")
print(f"produto: {nome_do_produto}")
print(f"preço unitário:R$ {preco_unitario:.2f}")
print(f"quantidade:{quantidade}")
print(f"preço total:{preco_total:.2f}")
```

## **Simulador de Caixa Eletrônico**

Desenvolva um programa em Python que simula um caixa eletrônico simples, permitindo que o usuário solicite um saque. Siga as instruções abaixo para criar o programa:

1. **Solicitação do Valor de Saque:**
    - Solicite ao usuário que insira o valor que deseja sacar.
    - Certifique-se de que o valor inserido seja um número inteiro positivo.
2. **Cálculo da Quantidade de Notas:**
    - Calcule a quantidade de notas de cada valor (R$100, R$50, R$20, R$10) necessárias para atender ao saque.
    - Considere que o caixa eletrônico possui uma quantidade infinita de notas de cada valor.
3. **Exibição do Resultado:**
    - Exiba a quantidade de notas de cada valor que será entregue ao usuário.
    - Exiba o valor total sacado.

### **Exemplo de Execução:**

Suponha que o usuário forneça a seguinte entrada durante a execução do programa:

- Valor que deseja sacar: 230

O programa calculará e exibirá os seguintes detalhes do saque:

```python
Bem-vindo ao Simulador Básico de Caixa Eletrônico!

Digite o valor que deseja sacar: 230

Quantidade de notas de R$100: 2
Quantidade de notas de R$50: 0
Quantidade de notas de R$20: 1
Quantidade de notas de R$10: 1

Valor total sacado: R$230
```

Resposta:

```python
# Solicitar valor de saque ao usuário
valor_saque = int(input("Digite o valor que deseja sacar: "))
# Calcular quantidade de notas
notas_100 = valor_saque // 100
resto_100 = valor_saque % 100
notas_50 = resto_100 // 50
resto_50 = resto_100 % 50
notas_20 = resto_50 // 20
resto_20 = resto_50 % 20
notas_10 = resto_20 // 10

# Exibir resultado
print(f"Notas de R$100: {notas_100}")
print(f"Notas de R$50: {notas_50}")
print(f"Notas de R$20: {notas_20}")
print(f"Notas de R$10: {notas_10}")
```

# ESTRUTURAS DE CONTROLE DE FLUXO

<aside>
💡 A estrutura condicional em Python permite que você execute diferentes blocos de código com base em condições específicas. As principais construções são **`if`**, **`else`** e **`elif`** (abreviação de "else if").

</aside>

## IF

A estrutura básica **`if`** é usada para verificar se uma condição é verdadeira. Se a condição for verdadeira, o bloco de código indentado abaixo do **`if`** é executado.

```python
idade = 18

if idade >= 18:
    print("Você é maior de idade.")
```

## ELSE

O bloco **`else`** é executado quando a condição no **`if`** é falsa. Ele é opcional e pode ser utilizado para fornecer uma alternativa ao bloco **`if`**.

```python
idade = 15

if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")
```

## ELIF

A construção **`elif`** é usada quando você tem múltiplas condições a serem verificadas. Ela significa "else if" e é usada para verificar condições adicionais após o **`if`**. Pode haver vários blocos **`elif`** antes do bloco **`else`**.

```python
idade = 25

if idade < 18:
    print("Você é menor de idade.")
elif idade >= 18 and idade < 65:
    print("Você é um adulto.")
else:
    print("Você é um idoso.")
```

No exemplo acima:

- Se **`idade`** for menor que 18, a mensagem "Você é menor de idade." será exibida.
- Se **`idade`** for maior ou igual a 18 e menor que 65, a mensagem "Você é um adulto." será exibida.
- Caso contrário, o bloco **`else`** será executado, e a mensagem "Você é um idoso." será exibida.

<aside>
📢 A estrutura condicional é uma ferramenta fundamental para a tomada de decisões em programas Python, permitindo que o código seja executado de maneira condicional com base nas condições fornecidas.

</aside>
