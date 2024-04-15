# TIPOS DE DADOS BÁSICOS

## NÚMEROS

• **Inteiros (`int`):** Números inteiros sem parte fracionária.

• **Ponto Flutuante (`float`):** Números com parte fracionária.

```jsx
let idade = 25; // Inteiro
let altura = 1.75; // Ponto Flutuante
```

- Python suporta operações aritméticas padrão como adição (**`+`**), subtração (**`-`**), multiplicação (**`*`**), e divisão (**`/`**) com números.

## BOOLEANOS

- Representam valores lógicos **`True`** (verdadeiro) ou **`False`** (falso).

```jsx
let temIdadeParaVotar = true;
```

- Resultado de operações de comparação e lógicas.

```jsx
let resultado = 5 > 3; // Resultado será true
```

- Operadores lógicos como **`and`**, **`or`** e **`not`**.

```jsx
let maiorDeIdade = idade >= 18;
let podeDirigir = maiorDeIdade && temIdadeParaVotar;
```

## STRINGS

- Sequências de caracteres.
- Podem ser definidas usando aspas simples (**`'`**) ou duplas (**`"`**).

```jsx
let nome = "Alice";
let mensagem = 'Olá, JavaScript!';
```

- Operações com strings, como concatenação e formatação.

```jsx
let cumprimento = "Olá, " + nome + "!"; // Concatenação
console.log(cumprimento);
```

- Indexação e fatiamento de strings.

```jsx
let primeiraLetra = nome[0];
let parteDoNome = nome.slice(1, 4);
```

## **NOT A NUMBER**

**`NaN`** em JavaScript significa "Not a Number". É um valor especial que representa a falta de um valor numérico válido. **`NaN`** é retornado quando uma operação matemática resulta em um valor indefinido ou não representável como um número.

Alguns cenários comuns que podem resultar em **`NaN`** incluem:

**Operações Indefinidas:**

```jsx
let resultado = 10 / "abc"; // Tentativa de dividir um número por uma string
console.log(resultado); // Retorna NaN
```

**Operações com Valores Não Numéricos:**

```jsx
let resultado = "Hello" * 5; // Tentativa de multiplicar uma string por um número
console.log(resultado); // Retorna NaN
```

**Funções que Não Retornam Valores Numéricos:**

```jsx
let resultado = parseInt("abc"); // Conversão de uma string não numérica para inteiro
console.log(resultado); // Retorna NaN
```

**Comparação com `NaN`:**

```jsx
let resultado = 10 / 0; // Tentativa de dividir por zero
console.log(resultado); // Retorna Infinity

console.log(resultado === NaN); // Retorna false
console.log(isNaN(resultado)); // Retorna true
```

<aside>
📢 Esses são os tipos de dados básicos em Javascript que você provavelmente encontrará com mais frequência. Ao manipular esses tipos de dados, você terá uma base sólida para trabalhar em diversos problemas e construir programas mais complexos.

</aside>