# **ESTRUTURAS DE REPETIÇÃO**

## **O QUE SÃO ESTRUTURA DE CONTROLE?**

- Um programa é executado de cima para baixo;
- Com as estruturas podemos modelar o fluxo do programa;
- Ou seja, dependendo dos valores de statements e expressions, ele tomará um caminho diferente;

## **O QUE SÃO ESTRUTURAS DE REPETIÇÃO**

- A ideia é repetir uma ação até atingir um condição;
- Ao invés de repetirmos o mesmo código várias vezes, criamos um statement que fará um checagem em cada loop;
- Também chamada de loop;
    
    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ebefc73b-faa7-43dc-8db5-324ebc1d1059/37d73c21-a10a-4859-bf84-1e26f9766d85/Untitled.png)
    

## **ESTRUTURA DE REPETIÇÃO: DO-WHILE**

O **`do-while`** é semelhante ao **`while`**, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo se a condição for falsa inicialmente.

```jsx
let contador = 0;

do {
  console.log("Número: " + contador);
  contador++;
} while (contador < 5);
```

## **ESTRUTURA DE REPETIÇÃO: WHILE**

- Fará uma ação, até que a condição seja atingida
- Precisamos realmente ‘definir um fim’ para o loop, para não termos o problema de loop infinito;

```jsx
let x = 10

while (x > 0){
	console.log(x);
	x = x - 1
}
```

## **ESTRUTURA DE REPETIÇÃO: FOR**

- Semelhante ao while, porém amplamente utilizado
- Na minha opinião: é a estrutura de repetição mais fácil de compreender, aconselho, a preferir pelo for

```jsx
for(let numero = 2; numero < 100; numero = numero * 2){
		console.log("O numero é:" + numero);
}
```

## **FORÇANDO A SAÍDA DE UM LOOP: BREAK**

- As vezes precisamos parar o loop antes que complete todo o seu ciclo;
- Para isso utilizamos o **break**;

```jsx
for(let i = 5; i < 20; i = i + 1){
	if(1 % 10 == 0){
		console.log('Saiu do loop');
		break;
	}
	console.log('Prosseguindo o loop');
}
```

## **PULANDO UMA EXECUÇÃO DE LOOP: CONTINUE**

- Dependendo da nossa lógica, podemos pular o resto da execução do loop;
- Para isso utilizamos a palavra **continue**;

```jsx
let x = 0
while (x < 11){
	x = x + 1;
	if(x % 2 == 0){
		continue;
	}
	console.log(x);
	x = x + 1
}
```

## **INCREMENTANDO O VARIÁVEL: FORMA FÁCIL**

- Podemos incrementar uma variável de forma mais fácil: x += 1;
- Ou até mesmo x++;

```jsx
for (let numero = 0; numero < 10; numero += 1){
	console.log("O numero é: " + numero);
}
```

## EXEMPLO PRÁTICO

Vamos considerar um exemplo prático onde queremos calcular a soma dos números de 1 a 5 usando um loop.

```jsx
// Utilizando while
let somaWhile = 0;
let numeroWhile = 1;

while (numeroWhile <= 5) {
  somaWhile += numeroWhile;
  numeroWhile++;
}

console.log("Soma (while): " + somaWhile);

// Utilizando for
let somaFor = 0;

for (let i = 1; i <= 5; i++) {
  somaFor += i;
}

console.log("Soma (for): " + somaFor);

```

Neste exemplo, ambos os loops **`while`** e **`for`** realizam a mesma tarefa de calcular a soma dos números de 1 a 5.

<aside>
💡 Os loops são fundamentais para a construção de lógica de controle de fluxo em programas JavaScript, e a escolha entre eles depende das necessidades específicas do código e do contexto em que estão sendo utilizados.

</aside>