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
