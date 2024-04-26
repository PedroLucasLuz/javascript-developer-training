const medida_ = window.prompt("Informe o valor em metros: ")
let medida = parseFloat(medida_)

window.alert("medidas: \n01 - milímetro (mm) \n02 - centímetro (cm) \n03 - decímetro (dm) \n04 - decâmetro (dam) \n05 - hectômetro (hm) \n06 - quilômetro (km)")

switch (medida){
    case 1:
        const mm = medida * 1000
        window.alert(medida + "m" + " é igual a " + mm + "mm")
        break
    case 2:
        const cm = medida * 100
        window.alert(medida + "m" + " é igual a " + cm + "cm")
        break
    case 3:
        const dm = medida * 10
        window.alert(medida + "m" + " é igual a " + dm + "dm")
        break
    case 4:
        const dam = medida / 10
        window.alert(medida + "m" + " é igual a " + dam + "dam")
        break
    case 5:
        const hm = medida / 100
        window.alert(medida + "m" + " é igual a " + hm + "hm")
        break
    case 6:
        const km = medida / 1000
        window.alert(medida + "m" + " é igual a " + km + "km")
        break
    default:
        window.alert("Opção Inválida ")
}