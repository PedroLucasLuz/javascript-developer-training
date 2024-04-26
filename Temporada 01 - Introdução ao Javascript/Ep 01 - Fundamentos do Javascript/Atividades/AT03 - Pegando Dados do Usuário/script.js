window.alert("Bem-Vindo! A seguir pediremos que informe alguns dados")

const name = window.prompt("Informe seu nome: ")
const age = window.prompt("Informe sua idade: ")

let confirmation = window.confirm("Sua idade é " + age + "??")

window.alert("Nome: " + name)
window.alert("Idade: " + age)
window.alert("Confirmação: " + confirmation)