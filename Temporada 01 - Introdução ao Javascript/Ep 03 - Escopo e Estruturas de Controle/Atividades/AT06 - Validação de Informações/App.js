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

async function obterEntradaValida(mensagem, validacao) {
    while (true) {
        const entrada = await prompt(mensagem);
        const erro = validacao(entrada);
        if (!erro) return entrada;
        console.log(erro);
    }
}

function validarNome(nome) {
    return nome.length > 3 ? null : 'Nome inválido. Deve ter mais de 3 caracteres.';
}

function validarIdade(idade) {
    const numero = parseInt(idade);
    if (isNaN(numero) || numero < 0 || numero > 150) {
        return 'Idade inválida. Deve estar entre 0 e 150 anos.';
    }
    return null;
}

function validarSalario(salario) {
    const numero = parseFloat(salario);
    if (isNaN(numero) || numero <= 0) {
        return 'Salário inválido. Deve ser um valor maior que zero.';
    }
    return null;
}

function validarSexo(sexo) {
    return (sexo.toLowerCase() === 'f' || sexo.toLowerCase() === 'm') ? null : 'Sexo inválido. Deve ser "f" ou "m".';
}

function validarEstadoCivil(estadoCivil) {
    return ['s', 'c', 'v', 'd'].includes(estadoCivil.toLowerCase()) ? null : 'Estado civil inválido. Deve ser "s", "c", "v" ou "d".';
}

async function obterEntradaTerminal() {
    const $nome = await obterEntradaValida('Informe seu nome: ', validarNome);
    const $idade = parseInt(await obterEntradaValida('Informe sua idade: ', validarIdade));
    const $salario = parseFloat(await obterEntradaValida('Informe seu salário: ', validarSalario));
    const $sexo = (await obterEntradaValida('Informe seu sexo (f/m): ', validarSexo)).toLowerCase();
    const $estadoCivil = (await obterEntradaValida('Informe seu estado civil (s/c/v/d): ', validarEstadoCivil)).toLowerCase();

    return { $nome, $idade, $salario, $sexo, $estadoCivil };
}

async function main() {
    try {
        const dadosDoUsuario = await obterEntradaTerminal();
        
        console.log(`
            |==============================================
            |Nome válido informado: ${dadosDoUsuario.$nome}
            |Idade válida informada: ${dadosDoUsuario.$idade}
            |Salário válido informado: ${dadosDoUsuario.$salario}
            |Sexo válido informado: R$${dadosDoUsuario.$sexo}
            |Estado civil válido informado: ${dadosDoUsuario.$estadoCivil}
            |==============================================
        `);
    } catch (error) {
        console.error('Erro:', error.message);
    }
}

main();
