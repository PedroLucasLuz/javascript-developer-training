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
