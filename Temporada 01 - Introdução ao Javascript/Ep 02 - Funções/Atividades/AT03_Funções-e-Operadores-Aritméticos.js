// Importação do módulo readline
const readline = require('readline')

// Criação da interface readline
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite o valor do primeiro número: ', (resposta) => {
    const $numeroX = parseFloat(resposta);

    leitor.question('Digite o valor do segundo número: ', (resposta) => {
        const $numeroY = parseFloat(resposta);

        exibirDados($numeroX, $numeroY);

        leitor.close();
    });
});


function somar($numeroX, $numeroY){
    return $numeroX + $numeroY;
}

function subitrair($numeroX, $numeroY){
    return $numeroX - $numeroY;
}

function multiplicar($numeroX, $numeroY){
    return $numeroX * $numeroY;
}

function dividir($numeroX, $numeroY){
    return $numeroX / $numeroY;
}

function resto($numeroX, $numeroY){
    return $numeroX % $numeroY;
}

function media($numeroX, $numeroY){
    return ($numeroX + $numeroY)/2
}

function potencia($numeroX, $numeroY){
    return $numeroX ** $numeroY
}

function exibirDados($numeroX, $numeroY){
    console.log(`
        Operações Aritméticas:
        ${$numeroX} + ${$numeroY} = ${somar($numeroX, $numeroY)}
        ${$numeroX} - ${$numeroY} = ${subitrair($numeroX, $numeroY)}
        ${$numeroX} * ${$numeroY} = ${multiplicar($numeroX, $numeroY)}
        ${$numeroX} / ${$numeroY} = ${dividir($numeroX, $numeroY).toFixed(2)}
        ${$numeroX} % ${$numeroY} = ${resto($numeroX, $numeroY).toFixed(2)}
        ${$numeroX} ** ${$numeroY} = ${potencia($numeroX, $numeroY)}

        Média:
        A média entre ${$numeroX} e ${$numeroY} é ${media($numeroX, $numeroY).toFixed(1)}.
    `)
}