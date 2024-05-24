// Importação do módulo readline
const readline = require('readline');

// Criação da interface readline
const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let $primeiroNome, $sobrenome, $nomeCompleto;

leitor.question('Digite o primeiro nome: ', (answer) => {
    $primeiroNome = answer;
    leitor.question('Digite o sobrenome: ', (answer) => {
      $sobrenome = answer;
      // Após obter os dados do usuário, exibe a saudação com o nome completo
      console.log(`
        Olá, meu nome é ${exibirNomeCompleto($primeiroNome, $sobrenome)}
      `);
      // Fecha a interface readline após exibir a saudação
      leitor.close();
    });
});

function exibirNomeCompleto($primeiroNome, $sobrenome) {
    $nomeCompleto = $primeiroNome + " " + $sobrenome;
    return $nomeCompleto;
}
