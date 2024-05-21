const $precoDoCombustivel = 5.79;
const $gastoMedioPorKM = 10;
const $distancia = 100;

// Calculando a quantidade de litros consumidos na viagem
const $litrosConsumidos = $distancia / $gastoMedioPorKM;

// Calculando o valor total gasto com combustível
const $valorGasto = $litrosConsumidos * $precoDoCombustivel;

// Exibindo o valor total gasto com combustível, com duas casas decimais
console.log($valorGasto.toFixed(2));


