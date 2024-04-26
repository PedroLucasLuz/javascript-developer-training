const imoveis = []
let opcao = ""

do {

    opcao = window.prompt(

        "Bem Vindo ao Cadastro de Imóveis." +
        "\nTotal de imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:" +
        "\n1. Novo Imóvel" +
        "\n2. Listar Imóveis" +
        "\n3. Sair"

    )

    switch(opcao){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Infome o nome do proprietário:")
            imovel.qtdQuartos = parseFloat(prompt("Infome a quantidade de quartos:"))
            imovel.qtdBanheiros = parseFloat(prompt("Informe a quantidade de banheiros:"))
            imovel.garagem = prompt("Possui Garagem? (sim/não)")

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.qtdQuartos +
                "\nBanheiros: " + imovel.qtdBanheiros +
                "\nPossui Garagem? " + imovel.garagem
            )

            if(confirma) {
                imoveis.push(imovel)
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                  "Imóvel " + (i + 1) +
                  "\nProprietário: " + imoveis[i].proprietario +
                  "\nQuartos: " + imoveis[i].quartos +
                  "\nBanheiros: " + imoveis[i].banheiros +
                  "\nPossui Garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Saindo. . .")
            break
        default:
            alert("Opção Inválida!")
    }

}while (opcao !== "3");