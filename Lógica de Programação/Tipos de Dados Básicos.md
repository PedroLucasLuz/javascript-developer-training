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
