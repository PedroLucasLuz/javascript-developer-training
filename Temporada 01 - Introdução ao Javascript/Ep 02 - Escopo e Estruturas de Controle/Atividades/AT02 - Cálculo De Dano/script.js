// Dados do Atacante

const Atacante = window.prompt(
    "Dados do ATACANTE"+
    "\nInforme o nome do seu campeão: ")
const DdA_ = window.prompt("informe seu dano de ataque(DdA): ")
const DdA = parseFloat(DdA_)

//Dados do Defensor

const Defensor = window.prompt(
    "Dados do DEFENSOR"+
    "\nInforme o nome do seu campeão: ")
let PdV_ = window.prompt("Informe a quantidade de pontos de vida(PdV): ")
const Defesa_ = window.prompt("Informe sua defesa: ")
const Escudo = window.confirm("Seu personagem possui um escudo?: ")

let PdV = parseFloat(PdV_)
const Defesa = parseFloat(Defesa_)


if (DdA > Defesa){
    if (Escudo === true){
        let Dano_Recebido = (DdA - Defesa) / 2
        let Vida_Atual = PdV - Dano_Recebido

        window.alert("Dados Finais: \n" +
            Atacante + " - Dano Causado: " + DdA + "\n" +
            Defensor + " - Dano Recebido: " + Dano_Recebido + " || " + "Vida Atual: " + Vida_Atual
        )
    }
    else {
        let Dano_Recebido = DdA - Defesa
        let Vida_Atual = PdV - Dano_Recebido

        window.alert("Dados Finais: \n" +
            Atacante + " - Dano Causado: " + DdA + "\n" +
            Defensor + " - Dano Recebido: " + Dano_Recebido + " || " + "Vida Atual: " + Vida_Atual
        )
    }
} else {
    window.alert("Dados Finais: \n" +
    Atacante + " - Dano Causado: 0\n" +
    Defensor + " - Dano Recebido: 0" + " || " + "Vida Atual: " + PdV
)
}