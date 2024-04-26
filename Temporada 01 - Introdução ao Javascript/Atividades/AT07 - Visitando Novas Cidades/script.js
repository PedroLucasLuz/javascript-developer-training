const Name = window.prompt("Informe seu nome: ")
let Question = window.prompt("Já visitou alguma cidade? ")
let cityList = ""
let couter = 0

while (Question === 'sim') {
    
    let city = window.prompt("Informe o nome da cidade que você visitou: ")
    cityList += " - " + city + "\n"
    couter++
    Question = window.prompt("Já visitou alguma outra cidade? ")
    

}
window.alert("Cidades visitadas: " + cityList)
window.alert("o numero de cidades visitadas foi " + numeroDeCidades)