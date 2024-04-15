let x = window.prompt("Digite um valor X ")
let y = window.prompt("Digite um valor Y ")

valorx = parseFloat(x) //string convertida para float
valory = parseFloat(y) //string convertida para float

const adicao = valorx + valory
const subitracao = valorx - valory
const multiplicacao = valorx * valory
const divisao = valorx / valory

window.alert(valorx + "+" + valory + " = " + adicao)
window.alert(valorx + "-" + valory + " = " + subitracao)
window.alert(valorx + "*" + valory + " = " + multiplicacao)
window.alert(valorx + "/" + valory + " = " + divisao)




