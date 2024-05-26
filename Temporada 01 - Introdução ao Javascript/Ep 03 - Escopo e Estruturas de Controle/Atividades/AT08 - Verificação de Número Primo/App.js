const readline = require('readline');

function prompt(query) {
    const $leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => $leitor.question(query, $answer => {
        $leitor.close();
        resolve($answer);
    }));
}

async function obterEntradaTerminal(){
    const $numero = parseInt(await prompt('Informe um número inteiro: '));
    return $numero;
}

function verificar($numero){
    if (isNaN($numero)) {
        console.log('Por favor, informe um número inteiro válido.');
    } else {
        const $resultado = ehPrimo($numero)
            ? `O número ${$numero} é primo.`
            : `O número ${$numero} não é primo.`;

        console.log($resultado);
    }
}

function ehPrimo($numero) {
    if ($numero <= 1) return false; // Números menores ou iguais a 1 não são primos
    if ($numero <= 3) return true;  // 2 e 3 são primos

    if ($numero % 2 === 0 || $numero % 3 === 0) return false; // Elimina múltiplos de 2 e 3

    for (let i = 5; i * i <= $numero; i += 6) {
        if ($numero % i === 0 || $numero % (i + 2) === 0) return false;
    }
    return true;
}

async function main() {
    try {
        const $numero = await obterEntradaTerminal();
        verificar($numero);
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

main();
