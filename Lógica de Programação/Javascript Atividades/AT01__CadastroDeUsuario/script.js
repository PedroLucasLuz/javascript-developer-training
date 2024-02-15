let Pnome = window.prompt("Digite seu nome")
let Snome = window.prompt("Digite seu sobrenome")
let CampEstudo = window.prompt("Informe seu campo de estudo")
let Anonasc = window.prompt("Informe seu ano de nascimento")

const CompletName = (Pnome + " " + Snome) //nome completo
let DateInt = parseFloat(Anonasc) //converção do ano string para um ano float

let idade = 2023 - DateInt

console.log(CompletName)
console.log(CampEstudo)
console.log(idade)