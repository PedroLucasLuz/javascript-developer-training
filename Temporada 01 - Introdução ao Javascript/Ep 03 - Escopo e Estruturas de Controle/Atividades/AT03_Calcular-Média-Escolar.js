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

async function obterDadosDoAluno() {
    const $nomeDoAluno = await prompt('Informe o nome do aluno: ');
    const $idadeDoAluno = parseInt(await prompt('Informe a idade do aluno: '));
    if (isNaN($idadeDoAluno) || $idadeDoAluno < 0) throw new Error('Idade inválida');

    const $notaDaN1 = parseFloat(await prompt('Informe a nota da N1: '));
    const $notaDaN2 = parseFloat(await prompt('Informe a nota da N2: '));
    if (isNaN($notaDaN1) || isNaN($notaDaN2)) throw new Error('Nota inválida');

    return { $nomeDoAluno, $idadeDoAluno, $notaDaN1, $notaDaN2 };
}

const $calcularMedia = ({ $notaDaN1, $notaDaN2 }) => (($notaDaN1 + $notaDaN2) / 2);

function $analisarMedia($media) {
    if ($media >= 9.0 && $media <= 10.0) {
        return "A";
    } else if ($media >= 7.5 && $media < 9.0) {
        return "B";
    } else if ($media >= 6.0 && $media < 7.5) {
        return "C";
    } else if ($media >= 4.0 && $media < 6.0) {
        return "D";
    } else {
        return "E";
    }
}

function $determinarStatusEMensagem($media, $conceito) {
    const $status = $conceito === "A" || $conceito === "B" || $conceito === "C" ? "APROVADO" : "REPROVADO";
    const $mensagem = $conceito === "A" && $media === 10.0 ? "Aprovado com Distinção" : $status;
    return { $status, $mensagem };
}

function $exibirDados(dadosDoAluno, $media, $conceito) {
    const { $nomeDoAluno, $idadeDoAluno, $notaDaN1, $notaDaN2 } = dadosDoAluno;
    const { $status, $mensagem } = $determinarStatusEMensagem($media, $conceito);
    
    console.log(`
       -- Dados do Aluno --
       Nome: ${$nomeDoAluno}
       Idade: ${$idadeDoAluno}
       Nota da N1: ${$notaDaN1}
       Nota da N2: ${$notaDaN2}
       Média: ${$media}
       Conceito: ${$conceito}
       Status: ${$mensagem}
    `);
}

async function main() {
    try {
        const $dadosDoAluno = await obterDadosDoAluno();
        const $media = $calcularMedia($dadosDoAluno);
        const $conceito = $analisarMedia($media);
        $exibirDados($dadosDoAluno, $media, $conceito);
    } catch (error) {
        console.error(error.message);
    }
}

main();

