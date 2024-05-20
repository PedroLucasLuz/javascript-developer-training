const readline = require('readline');

const leitor = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

leitor.question('Informe o nome do cliente: ', (resposta) =>{
    const $nomeDoCliente = resposta;

    leitor.question('Informe o número da conta: ', (resposta) =>{
        const $numeroDaConta = parseInt(resposta);

        leitor.question('Informe o número da agência: ', (resposta) =>{
            const $numeroDaAgencia = resposta;

           leitor.question('Informe o saldo inicial: ', (resposta) =>{
                const $saldoInicial = parseFloat(resposta);

                exibirDados($nomeDoCliente, $numeroDaAgencia, $numeroDaConta, $saldoInicial);

                leitor.close();
            });

        });
    });
});


function exibirDados($nomeDoCliente, $numeroDaAgencia, $numeroDaConta, $saldoInicial){
    console.log(`
        Olá ${$nomeDoCliente}, obrigado por criar uma conta em nosso banco digital.
        Sua agência é ${$numeroDaAgencia}, conta ${$numeroDaConta} e seu saldo R$${$saldoInicial} já está disponível.
    `);
}