let opcao = "5"

do{

    opcao = window.prompt(
        "Seja bem vindo(a)\n" +
        "\nEscolha uma das opções abaixo: " +
        "\n1. Opção um" +
        "\n2. Opção dois" +
        "\n3. Opção três" +
        "\n4. Opção quatro" +
        "\n5. Encerrar Programa"
    )
    switch (opcao) {
        case "1":
            window.alert("Você escolheu a opção 1")
            break
        case "2":
            window.alert("Você escolheu a opção 2")
            break
        case "3":
            window.alert("Você escolheu a opção 3")
            break
        case "4":
            window.alert("Você escolheu a opção 4")
            break
        case "5":
            window.alert("Você escolheu Sair ")
            break
        default:
            window.alert("Escolhe uma opção direito poha")

    }
}while(opcao !== "5")