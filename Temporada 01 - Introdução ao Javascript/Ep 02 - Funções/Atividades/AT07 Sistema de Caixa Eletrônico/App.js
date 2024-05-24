const readline = require('readline');

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

async function obterEntradaTerminal() {
    let $valorDoSaque = parseFloat(await prompt('Informe o valor que deseja sacar: '));
    if (isNaN($valorDoSaque) || $valorDoSaque <= 0) throw new Error('Valor inválido!');
    return $valorDoSaque;
}

function calcularNotas($valorDoSaque) {
    let $notas100 = parseInt($valorDoSaque / 100);
    let $resto100 = $valorDoSaque % 100;

    let $notas50 = parseInt($resto100 / 50);
    let $resto50 = $resto100 % 50;

    let $notas20 = parseInt($resto50 / 20);
    let $resto20 = $resto50 % 20;

    let $notas10 = parseInt($resto20 / 10);

    return { $notas100, $notas50, $notas20, $notas10 };
}

function exibirDados($caixaEletronico) {
    console.log(`
        Notas de R$100: ${$caixaEletronico.$notas100}
        Notas de R$50: ${$caixaEletronico.$notas50}
        Notas de R$20: ${$caixaEletronico.$notas20}
        Notas de R$10: ${$caixaEletronico.$notas10}
    `);
}

async function main() {
    try {
        const $valorDoSaque = await obterEntradaTerminal();
        const $caixaEletronico = calcularNotas($valorDoSaque);
        exibirDados($caixaEletronico);
    } catch (error) {
        console.error(error.message);
    }
}

main();
