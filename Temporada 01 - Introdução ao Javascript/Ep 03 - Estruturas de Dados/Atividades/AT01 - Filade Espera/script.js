let fila = []
let opcao = ""

do{
    let pacientes = ""
    for (let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opcao = window.prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n" +
        "1. Novo paciente\n" + 
        "2. Consultar paciente\n" +
        "3. sair"
    )

    switch (opcao) {
        case "1":
            const novoPaciente = window.prompt("Qual o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
          const pacienteConsultado = fila.shift()
          if (pacienteConsultado) {
            alert(pacienteConsultado + " Foi removido da fila" )
          }else {
            alert("Não há pacientes na fila!")
          }
          break
        case "3":
            alert("Encerrando. . .")
            break
        default:
            alert("Opção Inválida")

    }
}while (opcao != "3")
