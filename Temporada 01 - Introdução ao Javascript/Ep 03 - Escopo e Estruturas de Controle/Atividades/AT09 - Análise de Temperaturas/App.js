const readline = require('readline');

function prompt(query) {
    const leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => leitor.question(query, $answer => {
        leitor.close();
        resolve($answer);
    }));
}

async function obterEntradaTerminal() {
    let $temperaturas = [];
    while (true) {
        let $entrada = await prompt("Informe a temperatura (ou 'sair' para finalizar): ");
        if ($entrada.toLowerCase() === 'sair') break;
        
        let $temperatura = parseFloat($entrada);
        if (!isNaN($temperatura)) {
            $temperaturas.push($temperatura);
        } else {
            console.log("Valor inválido. Tente novamente.");
        }
    }
    return $temperaturas;
}

function calcularEstatisticas($temperaturas) {
    if ($temperaturas.length === 0) return null;

    let $menor = Math.min(...$temperaturas);
    let $maior = Math.max(...$temperaturas);
    let $soma = $temperaturas.reduce((acc, $temp) => acc + $temp, 0);
    let $media = $soma / $temperaturas.length;

    return { $menor, $maior, $media };
}

function exibirDados($estatisticas) {
    if (!$estatisticas) {
        console.log("Nenhuma temperatura informada.");
    } else {
        console.log(`
            Menor Temperatura: ${$estatisticas.$menor.toFixed(2)}°
            Maior Temperatura: ${$estatisticas.$maior.toFixed(2)}°
            Média das Temperaturas: ${$estatisticas.$media.toFixed(2)}°
        `);
    }
}

async function main() {
    const $temperaturas = await obterEntradaTerminal();
    const $estatisticas = calcularEstatisticas($temperaturas);
    exibirDados($estatisticas);
}

main();
