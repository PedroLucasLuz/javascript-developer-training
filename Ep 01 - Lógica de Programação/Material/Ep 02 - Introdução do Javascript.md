# INTRODUÇÃO AO JAVASCRIPT

## **O QUE É LINGUAGEM DE PROGRAMAÇÃO?**

- As linguagens de programação para **solucionar qualquer tipo de problema** na área tecnológica computacional.
- Cada linguagem possui suas **particularidades**.
- Permite que um programador crie programas a partir de um **conjunto de ordens, ações consecutivas, dados e  algoritmos.**
- **JavaScript** é uma linguagem de programação amplamente utilizada, especialmente no contexto de desenvolvimento web.

## **A LINGUAGEM JAVASCRIPT**

- JavaScript foi criado no início dos anos 1990 por Brendan Eich, enquanto trabalhava na Netscape Communications Corporation. Foi originalmente desenvolvido para ser uma linguagem de script no lado do cliente para interagir dinamicamente com páginas HTML.
- Em 1995, o JavaScript foi implementado no navegador Netscape Navigator 2.0, marcando sua entrada oficial no desenvolvimento web.
- A linguagem foi padronizada como ECMAScript pela ECMA International, com a primeira edição lançada em 1997. ECMAScript é a especificação subjacente à implementação do JavaScript em navegadores.

## **POR QUE JAVASCRIPT?**

- **Versatilidade Web:** JavaScript é essencial para o desenvolvimento web, permitindo a criação de interatividade dinâmica nas páginas.
- **Sintaxe Simples:** Sua sintaxe intuitiva facilita o aprendizado e desenvolvimento rápido de código.
- **Ecossistema Poderoso:** Frameworks como React e Angular ampliam suas capacidades, simplificando o desenvolvimento de aplicações complexas.
- **Node.js:** Utilizado no servidor com o Node.js, unificando o desenvolvimento front-end e back-end em uma única linguagem.
- **Assincronia:** Suporte nativo a operações assíncronas, vital para interações em tempo real e experiências dinâmicas.
- **Compatibilidade JSON:** Ampla utilização na manipulação de dados no formato JSON, facilitando a comunicação entre front-end e back-end.
- **Comunidade Ativa:** Uma comunidade vasta e ativa oferece suporte, documentação e recursos valiosos.
- **Atuação em Diversos Ambientes:** Além do desenvolvimento web, JavaScript é utilizado em jogos e automação de tarefas no cliente.

# SINTAXE BÁSICA

## DECLARAÇÃO DE VARIÁVEIS

- Em **JavaScript**, as variáveis são declaradas usando as palavras-chave **`var`**, **`let`** ou **`const`**. O tipo da variável pode ser dinâmico ou pode ser especificado.

```jsx
var nome = "Alice";  // Uma variável de string
let idade = 25;      // Uma variável de inteiro
const altura = 1.75; // Uma variável constante de ponto flutuante
```

## **CONSOLE.LOG PARA EXIBIR INFORMAÇÕES**

- O método **`console.log()`** é usado para exibir informações no console.

```jsx
console.log("Olá, JavaScript!");
console.log(nome);
console.log("Idade:", idade);
```

## COMENTÁRIOS

- • Comentários em JavaScript podem ser de uma linha usando **`//`** ou de várias linhas usando **`/* ... */`**.

```jsx
// Este é um comentário de uma linha
nome = "Bob";  // Comentário ao lado de uma linha de código

/*
  Este é um comentário de várias linhas.
  Pode abranger várias linhas de código.
*/
```

## EXEMPLO DE PROGRAMA SIMPLES

- Criaremos um programa simples que solicita ao usuário que insira seu nome e idade, e depois imprime uma mensagem com essas informações.

```jsx
// Solicitar ao usuário que insira seu nome
let nome = prompt("Digite seu nome: ");

// Solicitar ao usuário que insira sua idade
let idade = parseInt(prompt("Digite sua idade:"));  // Convertemos a entrada para um número inteiro

// Imprimir uma mensagem com o nome e a idade
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
```

Neste exemplo:

- **`prompt()`** é usado para obter entradas do usuário.
- **`parseInt()`** é usado para converter a entrada para um número inteiro.
- O método **`console.log()`** é usado para exibir mensagens no console.

Assim como em outras linguagens, a indentação é usada para definir blocos de código em JavaScript.

## **UM POUCO MAIS SOBRE DECLARAÇÃO DE VARIÁVEIS**

- let carrovermelhogrande; **(difícil de ler)**
- let carro_vermelho_grande;
- let CarroVermelhoGrande;
- let carroVermelhoGrande; **(mais utilizado) CamelCase**

# ESTRUTURA DE PROGRAMAÇÃO

## **O QUE É UM PROGRAMA/SOFTWARE?**

- É um conjunto de declarações (**statements**);
- **Statements** são conjuntos de expressões(**expressions**);
- **Expression** é todo fragmento de código que produz um valor;
- **Software** tem um **‘objetivo’**;
- **Statements** **‘guiam’** o software para seu objetivo;
- **Expressions** são os valores que os **statements** esperam para guiar o software;
- **Statement**: `**console.log(1 > 2);**`
- **Expression**: **`console.log(’batata’);`**
- Porém ainda não é o suficiente para criar um software;
- E é essa junção dos conceitos nosso objetivo nesta seção;

## **CONVENÇÃO NO NOME DAS VARIÁVEIS**

- **Não** **pode** começar com um número `**(let 2teste);**`
- Pode terminar com número `**(let teste9 = ‘testando’)**`
- Pode ter **$** ou **_**, mas não outros caracteres especiais **`(let $nome, _nome);`**
- **Não pode** ter pontuação ou outros especiais **`(let @teste)`**
- Podemos iniciar com letra maiúscula **`(let Nome = ‘Matheus’);`**
- Pode usar **camelCase`(let meuPrimeiroNome = ‘Matheus’);`** mais usada por programadores

## **NOMES DE VARIÁVEIS RESERVADAS**

- Alguns nomes não podem ser utilizados para iniciar variáveis, veja:

<aside>
🚫 **break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import interface in instanceof let new package private protected public return static super switch this throw true try typeof var void while with yield**

</aside>

> ex: **let break = ‘parar’;**
> 
- Porém podemos usar ela + algumas palavra/digito:

> ex: **let breakWasley = 1;**
> 

## **COMO FUNCIONA O AMBIENTE**

- Quando qualquer programa é iniciado, um ambiente é criado;
- E este ambiente não inicia vazio
- Este contém **funções** nativas da linguagem;
- **Funções** são blocos de códigos, que nos retornam um valor ou ação;

## **A ESTRUTURA DE UMA FUNÇÃO**

- Antes de mais nada: **funções são chamadas durante o programa;**
- Você também pode ouvir: **executar, chamar, invocar uma função;**
- E nós chamamos a função utilizando o nome dela + abrindo e fechando parênteses:

> `**nomeDaFuncao();**`
> 
- Também podemos inserir parâmetros, em algumas funções são obrigatórios;
- Basicamente são valores que podem mudar o resultado da função;

> `**nomeDaFuncao(parametro1, parametro2);**`
> 

## **FUNÇÃO BUILT-IN: PROMPT()**

Recebe um input do usuário do sistema e pode guardar este valor;

Ex: **let idade = prompt(’Qual sua idade?’);**

> `console.log(idade);`
> 

Está função é pouco utilizada.

## **FUNÇÃO BUILT-IN: ALERT()**

- Exibe uma mensagem na tela do usuário
- Ex: `**alert(’Veja esta mensagem!’);**`
- Esta função é pouco utilizada

## **FUNÇÃO BUILT-IN: MATH.X()**

- Função utilizada para expressões/cálculos matemáticos;
- Essa função irá retornar o **maior valor**
- Ex: `**let maiorNumero = Math.max(1,5,2,3);**`
- **`console.log(maiorNumero);`**

---

- `**Math.max**` - Pega o maior número *(Citada no exemplo acima)*
- **`Math.min`** - Pega o menor número
- **`Math.round`** - Pega um valor arredondado
- **`Math.ceil`** - Pega um valor arredondado pra cima

## **FUNÇÃO BUILT-IN: CONSOLE.LOG()**

- Exibe uma mensagem na tela, que é o argumento que passamos;
- Ex: `**console.log(’exibindo esta mensagem!’);**`
- Esta função é muita utilizada.
- Veremos como fazer as nossas funções mais a frente;

## **IDENTAÇÃO**

- Serve para organizar o código e deixar mais legível;
- Não há regra, porém cada bloco aninhado dever ser identado uma vez;
- Pessoas vão te agradecer no futuro por identar o código!
- Para a execução do código não afeta em nada.

```jsx
let x = 2;
let y = 0;

if (x > 2){
		y = x + 2;
		if(y == 4){
				console.log('Y é 4')
	}
}
```

## **COMO SALVAR VALORES NA MEMÓRIA**

- Salvamos os valores em variáveis **(isso é uma statement)**;
- `**let laranjas = 5;**`
- E depois podemos **criar expressões com os valores salvos**;
- `**console.log(laranjas * laranjas)**`
- `**console.log(`Tem ${laranjas} na sexta`);**`
- Podemos também **mudar o valor que foi salvo anteriormente**;
- `**laranjas = laranjas + 1;**`
- `**console.log(laranjas);**`
- Um **let** pode definir **várias variáveis** também;
- `**let quadrado = 4, triangulo = 3, retangulo = 4;**`
- `**console.log(quadrado * (triangulo + retangulo))**`

## **OUTRAS MANEIRAS DE SALVAR VALOR**

- Podemos definir valores com **var** e **const**;

```jsx
var nome = ‘Pedro’;
console.log(nome);

const sobrenome = ‘Soares’;
console.log(sobrenome;)
```

- **var** é uma forma mais antiga, você deve optar por **let** ou **const**;
- **const** veem de forma constante, ou seja, o seu valor **não pode ser alterado**;
- Mais a frente no curso, veremos em detalhes diferenças de **var**, **let** e **const**;