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

async function obterDadosDoAluno(){
    const $nomeDoAluno = await prompt('Informe o nome do aluno: ');
    const $idadeDoAluno = parseInt(await prompt('Informe a idade do aluno: '));
    if (isNaN($idadeDoAluno ) || $idadeDoAluno  < 0) throw new Error('Idade inválida');

    const $serie = await prompt('Informe a série do aluno: ');
    const $turno = await prompt('Informe o turno do aluno (manhã/tarde): ');

    return {$nomeDoAluno, $idadeDoAluno, $serie, $turno}
}

function exibirDados({$nomeDoAluno, $idadeDoAluno, $serie, $turno}){
    console.log(`
       -- Dados do Aluno --
       Nome: ${$nomeDoAluno}
       Idade: ${$idadeDoAluno}
       Série: ${$serie}
       Turno: ${$turno}
    `)
}

async function main(){
    try {
        const $dadosDoAluno = await obterDadosDoAluno();
        exibirDados($dadosDoAluno);
    } catch (error) {
        console.error(error.message);
    }finally{
        leitor.close();
    }
}

main();