/* Desenvolva um programa em JavaScript para calcular o 
   valor gasto em combustível para uma viagem. O programa 
   deve considerar:

   - O preço do combustível por litro.
   - O consumo médio do veículo em quilômetros por litro.
   - A distância total da viagem em quilômetros.

   O programa deve calcular e exibir o valor total gasto 
   com combustível, formatado com duas casas decimais.
*/

const $precoDoCombustivel = 5.79;
const $gastoMedioPorKM = 10;
const $distancia = 100;

// Calculando a quantidade de litros consumidos na viagem
const $litrosConsumidos = $distancia / $gastoMedioPorKM;

// Calculando o valor total gasto com combustível
const $valorGasto = $litrosConsumidos * $precoDoCombustivel;

// Exibindo o valor total gasto com combustível, com duas casas decimais
console.log($valorGasto.toFixed(2));


