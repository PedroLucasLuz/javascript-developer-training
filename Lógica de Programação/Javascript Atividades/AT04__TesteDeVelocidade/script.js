window.alert("Veículo 01")

const Car1 = window.prompt("Informe o nome do seu veículo: ")
const VelocidadeV1 = window.prompt("Informe a Velocidade em km: ")

window.alert("Veículo 02")

const Car2 = window.prompt("Informe o nome do seu veículo: ")
const VelocidadeV2 = window.prompt("Informe a Velocidade em km: ")


const VelocidadeV1F = parseFloat(VelocidadeV1)
const VelocidadeV2F = parseFloat(VelocidadeV2)

if (VelocidadeV1F > VelocidadeV2F) {
    window.alert("O " + Car1 + " é mais rápido, com velocidade de " + VelocidadeV1F + "km/h")
} else if (VelocidadeV1F < VelocidadeV2F) {
    window.alert("O " + Car2 + " é mais rápido, com velocidade de " + VelocidadeV2F + "km/h")
} else{
    window.alert("Os carros " + Car1 + " e " + Car2 + " possuem velocidades iguais")
}
