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

async function obterEntradaTerminal(){
    const $carro01 = await prompt('Informe o nome do primeiro veículo: ');
    const $velocidadeDoCarro01 = parseInt (await prompt('Informe a velocidade do veículo:'));
    if (isNaN($velocidadeDoCarro01) || $velocidadeDoCarro01  <= 0) throw new Error('Valor inválido!');

    const $carro02 = await prompt('Informe o nome do segundo veículo: ');
    const $velocidadeDoCarro02 = parseInt (await prompt('Informe a velocidade do veículo:'));
    if (isNaN($velocidadeDoCarro02) || $velocidadeDoCarro02  <= 0) throw new Error('Valor inválido!');

    return {$carro01, $carro02, $velocidadeDoCarro01, $velocidadeDoCarro02};
}

function verificarVelocidade(veiculo) {
    
    if (veiculo.$velocidadeDoCarro01 > veiculo.$velocidadeDoCarro02) {
        console.log(`
            ${veiculo.$carro01} - ${veiculo.$velocidadeDoCarro01}km/h
            ${veiculo.$carro02} - ${veiculo.$velocidadeDoCarro02}km/h
            O ${veiculo.$carro01} é mais rápido, com velocidade igual a ${veiculo.$velocidadeDoCarro01}km/h.
        `);
    }else if(veiculo.$velocidadeDoCarro02 > veiculo.$velocidadeDoCarro01){
        console.log(`
            ${veiculo.$carro01} - ${veiculo.$velocidadeDoCarro01}km/h
            ${veiculo.$carro02} - ${veiculo.$velocidadeDoCarro02}km/h
            O ${veiculo.$carro02} é mais rápido, com velocidade igual a ${veiculo.$velocidadeDoCarro02}km/h.
        `);
    }else{
        console.log(`
            ${veiculo.$carro01} - ${veiculo.$velocidadeDoCarro01}km/h
            ${veiculo.$carro02} - ${veiculo.$velocidadeDoCarro02}km/h
            Os veículos possuem velocidades iguais.
        `);
    }

}

async function main() {
    try {
        const veiculos = await obterEntradaTerminal();
        verificarVelocidade(veiculos);
    } catch (error) {
        console.log(error.message);
    }
}

main();

