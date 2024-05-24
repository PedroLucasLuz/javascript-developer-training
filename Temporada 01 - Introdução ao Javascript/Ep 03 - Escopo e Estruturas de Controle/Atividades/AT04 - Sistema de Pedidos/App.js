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

async function exibirMenu() {
    console.log('--- Menu ---');
    console.log('Código | Produto           | Preço Unitário (R$)');
    console.log('-----------------------------------------------');
    console.log('100    | Cachorro quente   | R$ 1,70');
    console.log('101    | Bauru Simples     | R$ 2,30');
    console.log('102    | Bauru com ovo     | R$ 2,60');
    console.log('103    | Hamburguer        | R$ 2,40');
    console.log('104    | Cheeseburguer     | R$ 2,50');
    console.log('105    | Refrigerante      | R$ 1,00');
    console.log('-----------------------------------------------');
}

async function obterEntradaTerminal() {
    const $codigoProduto = await prompt('Informe o código do produto: ');
    const $quantidade = parseInt(await prompt('Informe a quantidade desejada: '));

    return { $codigoProduto, $quantidade };
}

function calcularPrecoUnitario($codigoProduto) {
    switch ($codigoProduto) {
        case '100':
            return 1.70;
        case '101':
            return 2.30;
        case '102':
            return 2.60;
        case '103':
            return 2.40;
        case '104':
            return 2.50;
        case '105':
            return 1.00;
        default:
            throw new Error('Código de produto inválido!');
    }
}

function calcularValorTotalPedido($precoUnitario, $quantidade) {
    return ($precoUnitario * $quantidade).toFixed(2);
}

function exibirValorTotalPedido($valorTotalPedido) {
    console.log(`O valor total do pedido é: R$ ${$valorTotalPedido}`);
}

async function main() {
    try {
        await exibirMenu();
        const { $codigoProduto, $quantidade } = await obterEntradaTerminal();
        const $precoUnitario = calcularPrecoUnitario($codigoProduto);
        const $valorTotalPedido = calcularValorTotalPedido($precoUnitario, $quantidade);
        exibirValorTotalPedido($valorTotalPedido);
    } catch (error) {
        console.error(error.message);
    }
}

main();
