const breadPrice = parseFloat(prompt("Qual é o preço do pão:"));
console.log("Preço do pão: R$ " + breadPrice);
console.log("Panificadora Pão de Ontem - Tabela de preços");

for (i = 1; i <= 50; i++) {
    result = breadPrice * i;
    console.log(i + " - R$ " + result.toFixed(2));

}