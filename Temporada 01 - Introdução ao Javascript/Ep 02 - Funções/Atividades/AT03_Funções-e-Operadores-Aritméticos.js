// Importação do módulo readline
const readline = require('readline');

// Criação da interface readline
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite o valor do primeiro número: ', (resposta) => {
    const $numeroX = parseFloat(resposta);

    leitor.question('Digite o valor do segundo número: ', (resposta) => {
        const $numeroY = parseFloat(resposta);

        Main(exibirDados, $numeroX, $numeroY);

        leitor.close();
    });
});


//Funções Declaradas (Function Declarations)
function somar($numeroX, $numeroY){
    return $numeroX + $numeroY;
}

function subitrair($numeroX, $numeroY){
    return $numeroX - $numeroY;
}


// Funções Expressas (Function Expressions)
const multiplicar = function ($numeroX, $numeroY) {
    return $numeroX * $numeroY;
}

const dividir = function ($numeroX, $numeroY){
    return $numeroX / $numeroY;
}


// Funções de Setas (Arrow Functions)
const resto = ($numeroX, $numeroY) => {
    return $numeroX % $numeroY;
}

const media = ($numeroX, $numeroY) => (($numeroX + $numeroY)/2);

const potencia = ($numeroX, $numeroY) => ($numeroX ** $numeroY);




function exibirDados($numeroX, $numeroY){
    console.log(`
        Operações Aritméticas:
        ${$numeroX} + ${$numeroY} = ${somar($numeroX, $numeroY)}
        ${$numeroX} - ${$numeroY} = ${subitrair($numeroX, $numeroY)}
        ${$numeroX} * ${$numeroY} = ${multiplicar($numeroX, $numeroY)}
        ${$numeroX} / ${$numeroY} = ${dividir($numeroX, $numeroY).toFixed(1)}
        ${$numeroX} % ${$numeroY} = ${resto($numeroX, $numeroY).toFixed(1)}
        ${$numeroX} ** ${$numeroY} = ${potencia($numeroX, $numeroY)}

        Média:
        A média entre ${$numeroX} e ${$numeroY} é ${media($numeroX, $numeroY).toFixed(1)}.
    `);
}

// Funções de Ordem Superior (Higher-Order Functions)
function Main(exibirDados, $numeroX, $numeroY){
    return exibirDados($numeroX, $numeroY);
}