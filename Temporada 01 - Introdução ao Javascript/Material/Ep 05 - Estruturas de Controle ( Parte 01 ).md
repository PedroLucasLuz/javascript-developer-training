# ESTRUTURAS CONDICIONAIS

## **O QUE SÃO ESTRUTURA DE CONTROLE?**

- Um programa é executado de cima para baixo;
- Com as estruturas podemos modelar o fluxo do programa;
- Ou seja, dependendo dos valores de statements e expressions, ele tomará um caminho diferente;

## **ESTRUTURA CONDICIONAL: IF**

A estrutura **`if`** é usada para executar um bloco de código se a condição especificada for verdadeira. Se a condição não for atendida, o bloco de código dentro do **`if`** não é executado.

**Exemplo:**

```jsx
let idade = 19;
if (idade > 18) {
	console.log('Pode Entrar')
}
```

## **ESTRUTURA CONDICIONAL: ELSE**

- Podemos executar um bloco um outro bloco de código, caso a instrução do if não seja atendida;
- Ou seja, SE NÃO EXECUTAR o bloco if, EXECUTE o bloco else;

```jsx
let nome = "Wasley"

if (nome == "Elisa") {
	console.log('Seu nome é Elisa')
} else {
  console.log('O seu nome é Wasley')
}
```

## **ESTRUTURA CONDICIONAL: ELSE IF**

A estrutura **`else if`** permite adicionar condições adicionais caso a condição do **`if`** seja falsa. Pode-se encadear várias condições **`else if`** após o **`if`** inicial
**Exemplo:**

```jsx
let nome = "Wasley"

if (nome != undefined) {
	console.log('Nome está definido')
} else if (nome == "Wasley" && nome.length > 5){
  console.log('O seu nome é Wasley')
} else {
  console.log("Não é Wasley")
}

let nota = 75;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("D");
}

```

## **ESTRUTURA CONDICIONAL:  SWITCH**

O **`switch`** é usado quando se deseja comparar uma expressão com vários valores possíveis. Cada valor possível é chamado de "caso" (**`case`**).

**Exemplo:**

```jsx
let diaSemana = 3;
let mensagem = "";

switch (diaSemana) {
  case 1:
    mensagem = "Segunda-feira";
    break;
  case 2:
    mensagem = "Terça-feira";
    break;
  case 3:
    mensagem = "Quarta-feira";
    break;
  default:
    mensagem = "Dia inválido";
}

console.log(mensagem);
```

Neste exemplo, dependendo do valor de **`diaSemana`**, a variável **`mensagem`** receberá o nome do dia correspondente. O **`default`** é opcional e é executado se nenhum dos casos correspondentes for encontrado.

## SEM `BREAK` (FALL-THROUGH) NO `SWITCH`:

Quando não há **`break`** após um **`case`**, ocorre o "fall-through", onde a execução continua nos casos subsequentes até encontrar um **`break`** ou atingir o final do **`switch`**.

```jsx
let opcao = 2;
let mensagem = "";

switch (opcao) {
  case 1:
    mensagem += "Opção 1 ";
  case 2:
    mensagem += "Opção 2 ";
		break;
  case 3:
    mensagem += "Opção 3";
    break;
  default:
    mensagem = "Opção inválida";
}

console.log(mensagem);
```

Neste exemplo, se **`opcao`** for 2, a variável **`mensagem`** conterá "Opção 2 Opção 3", devido à falta de **`break`** após o **`case 2`**.