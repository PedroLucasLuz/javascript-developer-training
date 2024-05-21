const readline = require('readline');
const $anoAtual = new Date().getFullYear();

function prompt(query) {
    const leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => leitor.question(query, answer => {
        leitor.close();
        resolve(answer);
    }));
}

// Função assíncrona para coletar os dados do recruta a partir do terminal
async function obterEntradaTerminal() {
    // Pergunta ao usuário e aguarda a entrada para cada campo de dados do recruta
    const $primeiroNome = await prompt('Digite o primeiro nome do recruta: ');
    const $sobrenome = await prompt('Digite o sobrenome do recruta: ');
    const $campoDeEstudo = await prompt('Digite o campo de estudo do recruta: ');
    const $anoDeNascimento = parseInt(await prompt("Digite o ano de nascimento do recruta: "));

    // Retorna um objeto contendo os dados coletados do recruta
    return { $primeiroNome, $sobrenome, $campoDeEstudo, $anoDeNascimento };
}

// Função para calcular a idade do recruta
const $idade = ($anoAtual, $anoDeNascimento) => $anoAtual - $anoDeNascimento;

// Função para construir o nome completo do recruta
const $nomeCompleto = ($primeiroNome, $sobrenome) => `${$primeiroNome} ${$sobrenome}`;

// Função para exibir os dados do recruta no terminal
function exibirDados(recruta) {
    // Calcula a idade do recruta
    const idade = $idade($anoAtual, recruta.$anoDeNascimento);
    // Constrói o nome completo do recruta
    const nome = $nomeCompleto(recruta.$primeiroNome, recruta.$sobrenome);
    // Exibe os dados formatados no terminal
    console.log(`
        Nome Completo: ${nome}
        Campo de Estudo: ${recruta.$campoDeEstudo}
        Idade: ${idade}
    `);
}

// Função principal assíncrona para coordenar a execução do programa
async function main() {
    try {
        // Obtém os dados do recruta
        const recruta = await obterEntradaTerminal();
        // Exibe os dados do recruta
        exibirDados(recruta);
    } catch (error) {
        // Exibe mensagens de erro se ocorrerem durante a execução
        console.error(error.message);
    } finally {
        // Fecha a interface de leitura após a execução
        leitor.close();
    }
}

// Chama a função principal para iniciar o programa
main();
