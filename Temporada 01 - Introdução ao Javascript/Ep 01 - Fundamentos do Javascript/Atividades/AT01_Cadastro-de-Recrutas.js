// Solicitando as informações do recruta
const $primeiroNome = prompt("Digite o primeiro nome do recruta:");
const $sobrenome = prompt("Digite o sobrenome do recruta:");
const $campoDeEstudo = prompt("Digite o campo de estudo do recruta:");
const $anoDeNascimento = parseInt(prompt("Digite o ano de nascimento do recruta:"));

// Calculando a idade do recruta
const $anoAtual = new Date().getFullYear();
const $idade = $anoAtual - $anoDeNascimento;

// Exibindo as informações do recruta em um único console.log usando template literals
console.log(`
    Nome Completo: ${$primeiroNome} ${$sobrenome}
    Campo de Estudo: ${$campoDeEstudo}
    Idade: ${$idade}
`);
