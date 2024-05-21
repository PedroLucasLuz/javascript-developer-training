const readline = require('readline');

const leitor = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

leitor.question('Informe o nome do cliente: ', (answer) =>{
    const $nomeDoCliente = answer;

    leitor.question('Informe o número da conta: ', (answer) =>{
        const $numeroDaConta = parseInt(answer);

        leitor.question('Informe o número da agência: ', (answer) =>{
            const $numeroDaAgencia = answer;

           leitor.question('Informe o saldo inicial: ', (answer) =>{
                const $saldoInicial = parseFloat(answer);

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