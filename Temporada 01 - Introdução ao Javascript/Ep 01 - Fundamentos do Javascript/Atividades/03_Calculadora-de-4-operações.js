/*
Escreve um programa em javascript que permita 
inserir dois valores numéricos e então calcule 
o resultado das quatro operações básicas 
(soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los 
na tela.
*/

// Solicitar os dois valores numéricos ao usuário
const $numero1 = parseFloat(prompt("Digite o primeiro número:"));
const $numero2 = parseFloat(prompt("Digite o segundo número:"));

// Calcular os resultados das operações básicas
const $soma = $numero1 + $numero2;
const $subtracao = $numero1 - $numero2;
const $multiplicacao = $numero1 * $numero2;
const $divisao = $numero1 / $numero2;

// Exibir os resultados na tela utilizando template literals
console.log(`
    Resultado da Soma: ${$soma}
    Resultado da Subtração: ${$subtracao}
    Resultado da Multiplicação: ${$multiplicacao}
    Resultado da Divisão: ${$divisao}
`);
