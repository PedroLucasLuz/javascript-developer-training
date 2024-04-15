# OPERADORES

## OPERADORES ARITIMÉTICOS

- Realizam operações matemáticas com números.

```jsx
let a = 5;
let b = 2;

let soma = a + b;      // Soma: 7
let subtracao = a - b; // Subtração: 3
let multiplicacao = a * b; // Multiplicação: 10
let divisao = a / b;   // Divisão: 2.5
let resto = a % b;     // Resto da divisão: 1
```

## OPERADORES DE COMPARAÇÃO

• Comparam dois valores e retornam um resultado booleano (**`True`** ou **`False`**).

```jsx
let idade = 20;

console.log(idade == 20);   // Igual a: true
console.log(idade === '20'); // Estritamente igual a (comparação de tipo): false
console.log(idade != 25);    // Diferente de: true
console.log(idade !== '20'); // Estritamente diferente de: true
```

## OPERADORES LÓGICOS

- Realizam operações lógicas entre valores booleanos.

```jsx
let sol = true;
let chuva = false;

console.log(sol && chuva); // AND (E): false
console.log(sol || chuva); // OR (OU): true
console.log(!sol);         // NOT (NÃO): false
```

## OPERADORES DE ATRIBUIÇÃO

- Atribuem valores a variáveis.

```jsx
let x = 10;
x += 5; // Equivalente a: x = x + 5;   // x agora é 15
```

## EXEMPLO DE USO COMBINADO

- Vamos criar um exemplo que utiliza vários operadores em conjunto. Suponha que estamos calculando o custo total de um produto com base na quantidade e no preço unitário, aplicando um desconto de 10%.

```jsx
// Dados do produto
let quantidade = 20;
let precoUnitario = 50.0;
let desconto = 0.10;

// Cálculos
let subtotal = quantidade * precoUnitario;
let descontoTotal = subtotal * desconto;
let totalComDesconto = subtotal - descontoTotal;

// Exibição dos resultados
console.log("Quantidade:", quantidade);
console.log("Preço Unitário: R$", precoUnitario);
console.log("Subtotal: R$", subtotal.toFixed(2));  // Arredondando para duas casas decimais
console.log(`Desconto (${desconto * 100}%): R$`, descontoTotal.toFixed(2));
console.log("Total com Desconto: R$", totalComDesconto.toFixed(2));
```

Neste exemplo:

- Utilizamos os mesmos operadores aritméticos para calcular o subtotal e o desconto total.
- Aplicamos um operador de atribuição para calcular o total com desconto.
- Usamos a função **`toFixed(2)`** para arredondar os valores para duas casas decimais ao exibi-los.

<aside>
📢 Entender como esses operadores funcionam e como podem ser combinados é essencial para a construção de lógica em programas Javascript. Lembre-se de que o JavaScript é sensível a maiúsculas e minúsculas, então, **`precoUnitario`** é diferente de **`preco_unitario`**. Certifique-se de usar a mesma nomenclatura ao longo do código para evitar erros.

</aside>