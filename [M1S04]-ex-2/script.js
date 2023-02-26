class Conta {
    saldo;
    #senha;
    constructor(saldoInicial, senha) {
        this.saldo = saldoInicial;
        this.#senha = senha; //atributor privado
    }

    deposito(valor, senha) {
        if (senha === this.#senha) {
            this.saldo += valor;
            console.log("Depósito realizado com sucesso!");
        } else {
            console.log("Senha incorreta, operação não permitida.");
        }
    }

    retirada(valor, senha) {
        if (senha === this.#senha) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log("Retirada realizada com sucesso!");
            } else {
                console.log("Saldo insuficiente.");
            }
        } else {
            console.log("Senha incorreta, operação não permitida.");
        }
    }
}

// Testes:
//-----------------------------------------------------
const contaCorrente = new Conta(1200.00, "12345");

console.log(contaCorrente.saldo); // 1200

contaCorrente.deposito(500, "12345"); // Depósito realizado com sucesso!
console.log(contaCorrente.saldo); // 1700

contaCorrente.retirada(200, "45871"); // Senha incorreta, operação não permitida.
console.log(contaCorrente.saldo); // 1700

contaCorrente.retirada(2000, "12345"); // Saldo insuficiente.
console.log(contaCorrente.saldo); // 1700

contaCorrente.retirada(700, "12345"); // Retirada realizada com sucesso!
console.log(contaCorrente.saldo); // 1000

