class Conta {
    saldo;
    #senha;
    constructor(saldoInicial, senha) {
        this.saldo = saldoInicial;
        this.#senha = senha; //colocar privado
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

class ContaPoupanca extends Conta {
    atualizaJuros() {
        let taxaDeJuros = 0.007;
        this.saldo = (this.saldo * (1 + taxaDeJuros)).toFixed(2);
    }
}

const conta = new ContaPoupanca(5000, "12345");
console.log(conta.saldo);
conta.atualizaJuros();
console.log(conta.saldo);
conta.atualizaJuros();
console.log(conta.saldo);