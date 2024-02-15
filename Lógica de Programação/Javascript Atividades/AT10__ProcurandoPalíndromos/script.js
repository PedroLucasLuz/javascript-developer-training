const palavra = window.prompt("Informe uma palavra: ")
let palavraInvertida = ""

//Macarrão
for (let i = palavra.length - 1; i >=0; i--){
    palavraInvertida += palavra[i]
}

if (palavra == palavraInvertida) {
    alert(
        palavra + " É um palíndromo!\n\n" +
        palavra + " == " + palavraInvertida
    ) 
    
} else {
    alert(
        palavra + " Não é um palíndromo!\n\n" +
        palavra + " !== " + palavraInvertida
    )
}