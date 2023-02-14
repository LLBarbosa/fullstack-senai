//console.log("Lojas Tabajara");
function cashRegister() {
    console.log("Lojas Tabajara");
    let count = 1;
    let total = 0;
    let change = 0;
    let price;
    while (price !== 0) {
        price = parseFloat(prompt(`Produto ${count}`));
        console.log(`Produto ${count}: R$ ${price.toFixed(2)}`);
        count++;
        total += price;
    }
    console.log(`Total: R$ ${total.toFixed(2)}`);
    let money = parseFloat(prompt(`Dinheiro: R$ `));
    console.log(`Dinheiro: R$ ${money.toFixed(2)}`);
    change = money - total;
    console.log(`Troco: R$ ${change.toFixed(2)}\n\n`);
}

while (true) cashRegister();

























































