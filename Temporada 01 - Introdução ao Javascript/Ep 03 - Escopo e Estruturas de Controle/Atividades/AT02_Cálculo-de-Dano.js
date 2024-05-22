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

async function obterEntradaTerminal() {
    console.log('Dados do Atacante');
    const $campeaoAtacante = await prompt('Informe o nome do campeão: ');
    const $poderDeAtaque = parseInt(await prompt(`Informe o poder de ataque de ${$campeaoAtacante}: `), 10);

    console.log('\nDados do Defensor');
    const $campeaoDefensor = await prompt('Informe o nome do campeão: ');
    let $pontosDeVida = parseInt(await prompt(`Informe a quantidade de pontos de vida de ${$campeaoDefensor}: `), 10);
    const $poderDeDefesa = parseInt(await prompt(`Informe a defesa de ${$campeaoDefensor}: `), 10);
    const $escudo = (await prompt(`${$campeaoDefensor} possui escudo? (Sim/Não): `)).toUpperCase();

    return { $campeaoAtacante, $campeaoDefensor, $escudo, $poderDeAtaque, $poderDeDefesa, $pontosDeVida };
}

function calcularDano(championsInformation) {
    const { $poderDeAtaque, $poderDeDefesa, $escudo } = championsInformation;
    let dano = 0;

    if ($poderDeAtaque > $poderDeDefesa) {
        if ($escudo === 'SIM') {
            dano = Math.max(($poderDeAtaque - $poderDeDefesa) / 2, 0); // Metade da diferença entre ataque e defesa
        } else {
            dano = $poderDeAtaque - $poderDeDefesa; // Diferença entre ataque e defesa
        }
    }

    return dano;
}

async function main() {
    const championsInformation = await obterEntradaTerminal();
    const dano = calcularDano(championsInformation);
    championsInformation.$pontosDeVida -= dano;

    console.log(`\n${championsInformation.$campeaoDefensor} recebeu ${dano} de dano.`);
    console.log(`${championsInformation.$campeaoDefensor} agora tem ${championsInformation.$pontosDeVida} pontos de vida.`);
}

main();
