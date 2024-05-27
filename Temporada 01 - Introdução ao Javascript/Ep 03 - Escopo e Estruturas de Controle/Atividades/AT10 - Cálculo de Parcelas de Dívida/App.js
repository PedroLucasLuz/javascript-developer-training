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
    let $valorDivida = parseFloat(await prompt('Informe o valor da dívida: '));
    if (isNaN($valorDivida) || $valorDivida <= 0) throw new Error('Valor inválido!');
    return $valorDivida;
}

function calcularParcelas($valorDivida) {
    const $juros = [0, 10, 15, 20, 25];
    const $parcelas = [1, 3, 6, 9, 12];
    let $resultados = [];

    for (let i = 0; i < $parcelas.length; i++) {
        let $valorJuros = ($valorDivida * $juros[i]) / 100;
        let $valorTotal = $valorDivida + $valorJuros;
        let $valorParcela = $valorTotal / $parcelas[i];

        $resultados.push({
            $valorDivida: $valorTotal.toFixed(2),
            $valorJuros: $valorJuros.toFixed(2),
            $quantidadeParcelas: $parcelas[i],
            $valorParcela: $valorParcela.toFixed(2)
        });
    }

    return $resultados;
}

function exibirDados($tabela) {
    console.log(`Valor da Dívida  Valor dos Juros  Quantidade de Parcelas  Valor da Parcela`);
    $tabela.forEach($item => {
        console.log(`R$ ${$item.$valorDivida.padStart(10, ' ')}  ${$item.$valorJuros.padStart(13, ' ')}  ${$item.$quantidadeParcelas.toString().padStart(18, ' ')}  R$ ${$item.$valorParcela.padStart(10, ' ')}`);
    });
}

async function main() {
    try {
        const $valorDivida = await obterEntradaTerminal();
        const $tabela = calcularParcelas($valorDivida);
        exibirDados($tabela);
    } catch ($error) {
        console.error($error.message);
    }
}

main();
