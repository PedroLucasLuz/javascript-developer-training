function calcularAreaTriangulo (){
    const base = prompt("Informe a base do Triângulo: ")
    const altura = prompt("Informe a altura do triângulo: ")
    return (base * altura) / 2
}

function calcularAreaRetangulo (){
    const base = prompt("Informe a base do Retângulo: ")
    const altura = prompt("Informe a altura do Retângulo: ")
    return base * altura
}

function calcularAreaQuadrado (){
    const lado = prompt("Informe o lado do Quadrado: ")
    return lado * lado
}

function calcularAreaTrapezio (){
    const baseMaior = prompt("Informe a base maior do Trapézio: ")
    const baseMenor = prompt("Informe a base menor do Trapézio: ")
    const altura = prompt("Informe a altura do Trapézio: ")
    return (( baseMaior + baseMenor ) * altura ) / 2
}

function calcularAreaCirculo (){
    const raio = prompt("Informe o valor do raio do Circulo: ")
    return (raio * raio) * 3.14
}

function menuInterativo (){
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function executar(){
    let opcao = "1"

    do{
        opcao = menuInterativo()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break;
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break;
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Saindo. . .")
                break
            default:
                alert("Opção Inválida!")
                break;
        }

        if (resultado){
            alert("Resultado: " + resultado)
        }

    }while (opcao !== "6")
}

executar()