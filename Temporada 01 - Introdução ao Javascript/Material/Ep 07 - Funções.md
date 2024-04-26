# **FUNÇÕES**

## **O QUE SÃO FUNÇÕES**

- Funções são estruturas de códigos menores que são reaproveitadas durante a execução/construção de um programa.
- **Principal objetivo:** poupar repetição de código.
- Podem ser consideradas **“subprogramas”**;

## **DEFININDO UMA FUNÇÃO**

- Uma função tem uma estrutura um pouco mais complexa;
- Devemos declarar a função sempre com a palavra **function;**
- Uma função deve ter um nome;
- Pode conter argumentos/parâmetros, definidos entre **( )**;
- O corpo da função é definido entre **{ }**;
- Geralmente uma função retornar um valor;
- É possível declarar funções em variáveis;

```jsx
function escreverNoConsole(){
	console.log("Escrevendo no Console!");
}

escreverNoConsole();

const textoNoConsole = function(){
	console.log("Texto no Console!")
}

textoNoConsole();

const textoPorParametro = function(texto){
	console.log("texto")
}

textoPorParametro("Testando por Parâmetro!");
```

## **MAIS SOBRE FUNÇÕES**

```jsx
// Definindo uma função chamada 'soma' que aceita dois parâmetros (a e b)
const soma = function(a, b){
    return a + b;
}

// Chamando a função 'soma' e exibindo o resultado no console
console.log(soma(3, 5)); // Saída: 8

// Definindo uma função chamada 'saudacao' que aceita um parâmetro 'nome'
const saudacao = function(nome){
    // Verificando se o 'nome' é igual a "Wasley"
    if(nome == "Wasley"){
        return "Olá Matheus";
    }
}

// Chamando a função 'saudacao' e exibindo o resultado no console
console.log(saudacao("Matheus")); // Saída: undefined
```

1. **Função `soma`:**
    - É uma função anônima atribuída a uma constante chamada **`soma`**.
    - Aceita dois parâmetros, **`a`** e **`b`**.
    - Retorna a soma de **`a`** e **`b`**.
2. **Chamada da Função `soma`:**
    - A função **`soma`** é chamada com os argumentos 3 e 5.
    - O resultado (8) é exibido no console.
3. **Função `saudacao`:**
    - É outra função anônima atribuída a uma constante chamada **`saudacao`**.
    - Aceita um parâmetro chamado **`nome`**.
    - Dentro da função, verifica se **`nome`** é igual a "Wasley". Se for, retorna a string "Olá Matheus".
4. **Chamada da Função `saudacao`:**
    - A função **`saudacao`** é chamada com o argumento "Matheus".
    - Como o argumento não é "Wasley", a função não retorna nada explicitamente (o que é equivalente a **`undefined`**).
    - O resultado (undefined) é exibido no console.

<aside>
⚠️ A chamada **`console.log(3, 5);`** parece estar fora do contexto e pode não estar fazendo o que você pretende. Se você quiser exibir o resultado da soma de 3 e 5, deve chamar **`console.log(soma(3, 5));`**.

</aside>

## **ESCOPO DE UMA FUNÇÃO**

- O que acontece dentro de uma função separado do esboço global;
- O escopo global seria todo o arquivo **Javascript**

```jsx
let n = 10 

function imprimir(){
	let n = 25;
	console.log(n);
}

imprimir()

console.log(n)
```

## **MAIS SOBRE ESCOPO**

- Atualmente **let** e **const**, qualquer bloco de código pode separar seu escopo **(um if por exemplo)**;
- Isso é muito bom pois separar contextos, com var isso não acontecia
- Ou seja podemos ter escopos diferentes não só com funções;

```jsx
let x = 10;

if (true){
	let x = 20;
	console.log(x); // escopo if
}

console.log(x) // escopo global
```

## **ESCOPO ANINHADO(Nested Scopes)**

- Por causa da possibilidade de criar um escopo ter mais níveis de escopo;

```jsx
let y = 5

const multiplicar = function(n){
	let y = n * 2;

	console.log(y) // escopo função
	
	if(y == 10){
		let y = 55;
		console.log(y)
	}
}
```

## **ARROW FUNCTIONS**

- Uma outra forma de escrever funções;
- Bem utilizada nos frameworks modernos;
- Porém não deve substituir as functions por completo (veremos mais tarde os detalhes);

```jsx
const parOuImpar = (n) => {
	return n % 2
}

console.log(parOuImpar(3))
```

## **MAIS SOBRE ARROW FUNCTIONS**

- Se só tem um parâmetro podemos remover os parênteses do argumento e o return;
- Se a expressão for pequena, pode até ser feita em uma só linha sem prejudicar a leitura de código.

```jsx
const raizQuadrada = (x) =>{
	return x * x;
}
const raizQuadrada2 = n => n * n

console.log(raizQuadrada(2))
console.log(raizQuadrada2(4))
```

## **ARGUMENTOS OPCIONAIS**

- Podemos chamar uma função em JS sem o número igual de parâmetro determinados;

```jsx
function nomeComIdade(nome, idade){
	if(idade === undefined){
		console.log("Seu nome é " + nome)
	} else {
		console.log("Seu nome é " + nome + " e você tem " + idade + " anos")
	}
}

nomeComIdade("Wasley")
nomeComIdade("Wasley", 25)
```

## **ARGUMENTOS COM VALOR DEFAULT**

- Podemos pré-determinar um valor para um argumento

```
function repetirFrase(frase, n = 2){
	for(let x = 1; x <= n; x++){
		console.log(frase + "  " + x);
	}
}

repetirFrase("Testando", 5);
repetirFrase("Só duas vezes");
```

## **CLOSURE**

- Uma função que se lembra do ambiente em que ela foi criada;

```jsx
function armazenarSoma(x){
	return y => x + y;
}

let soma1 = armazenarSoma(3)
	console.log(soma1(5)); // 8
let soma2 = armazenarSoma(5)
	console.log(soma2(10)) // 15
```

## **RECURSION**

- Uma funcionalidade que permite uma função **se chamar novamente**;
- Isso pode ser um problema caso a função se chame **muitas** vezes;

```jsx
function retornarNumeroPar(n){
	if(n % 2 == 0){
		console.log("n agora é par: " + n);
	} else {
		console.log(n);
		retornarNumeroPar(n - 1)
	}
}

retornarNumeroPar(33)
```

<aside>
📢 A flexibilidade das funções em **JavaScript** é evidente na capacidade de aceitar parâmetros e retornar valores, além de suportar conceitos como funções anônimas e funções de flecha. As funções também desempenham um papel crucial em assincronia, com o uso de callbacks, Promises e Async/Await. A manipulação do escopo das variáveis por meio de closures é outro aspecto poderoso das funções em JavaScript. Em resumo, as funções são um componente essencial para estruturar e organizar código, tornando JavaScript uma linguagem versátil e adequada para o desenvolvimento tanto no lado do cliente quanto no lado do servidor.

</aside>