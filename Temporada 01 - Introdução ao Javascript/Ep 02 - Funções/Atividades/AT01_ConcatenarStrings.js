const $primeiroNome = "Pedro"
const $sobrenome = "Lucas"
let $nomeCompleto;

function exibirNomeCompleto($primeiroNome, $sobrenome) {
    $nomeCompleto = $primeiroNome + " " + $sobrenome;
    return $nomeCompleto;
}

console.log(`
    Olá, meu nome é ${exibirNomeCompleto($primeiroNome, $sobrenome)}
`)