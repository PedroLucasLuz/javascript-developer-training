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
    return parseFloat(await prompt('Informe a nota do aluno (0 a 10): '));
    
}

async function obterNotaValida() {
    let $nota;
    while (true) {
        $nota = await obterEntradaTerminal();
        if ($nota >= 0 && $nota <= 10) {
            break;
        } else {
            console.log('Valor inválido. Tente novamente.');
        }
    }
    return $nota;
}

async function main() {
    const notaValida = await obterNotaValida();
    console.log(`Nota válida informada: ${notaValida}`);
}

main();

