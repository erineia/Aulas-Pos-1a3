const nomeDog = "Caramelo";
const pesoDogKg = 5
const estoqueRacaoGramas = 3000


function calcularRacaoPorDia(pesoDogKg) {
  return pesoDogKg * 30; 
}


function calcularDuracaoEstoque(estoqueRacaoGramas, racaoPorDia) {
  return Math.floor(estoqueRacaoGramas / racaoPorDia); 
}


const racaoPorDia = calcularRacaoPorDia(pesoDogKg);
const diasDuracao = calcularDuracaoEstoque(estoqueRacaoGramas, racaoPorDia);


console.log(`Nome do dog: ${nomeDog}`);
console.log(`Peso: ${pesoDogKg}kg`);
console.log(`Ração recomendada por dia: ${racaoPorDia}g`);
console.log(`O estoque vai durar aproximadamente: ${diasDuracao} dias`);