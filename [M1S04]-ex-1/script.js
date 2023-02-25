class CaixaRegistradora {
  constructor() {
    this.products = [
      {
        codigoBarra: 1,
        preco: 14.10,
        nome: "Azeite",
      },
      {
        codigoBarra: 2,
        preco: 4.20,
        nome: "Farinha",
      },
      {
        codigoBarra: 3,
        preco: 3.40,
        nome: "Sal",
      },

      {
        codigoBarra: 4,
        preco: 2.50,
        nome: "Pão",
      },

      {
        codigoBarra: 5,
        preco: 9.60,
        nome: "Caderno",

      }
    ];
    this.cliente = null;
    this.conta = [];
  }

  adicionarProduto(codigoBarra, preco, nome) {
    const novoProduto = {
      codigoBarra: codigoBarra,
      preco: preco,
      nome: nome,
    };
    this.products.push(novoProduto);
  }

  iniciarAtendimento(cliente) {
    this.cliente = cliente;
    this.conta = [];
  }

  adicionarItem(codigoBarra, quantidade) {
    const produto = this.products.find((p) => p.codigoBarra === codigoBarra);
    if (produto) {
      const item = {
        codigoBarra: produto.codigoBarra,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: quantidade,
      };
      this.conta.push(item);
      return true;
    } else {
      return false;
    }
  }

  verificarValorTotal() {
    let valorTotal = 0;
    this.conta.forEach((item) => {
      valorTotal += item.preco * item.quantidade;
    });
    return valorTotal.toFixed(2);
  }

  fecharConta(dinheiro) {
    const troco = dinheiro - this.verificarValorTotal();
    if (troco >= 0) {
      this.cliente = null;
      this.conta = [];
      return troco.toFixed(2);
    } else {
      return "Dinheiro insuficiente";
    }
  }
}

const caixaRegistradora = new CaixaRegistradora();
caixaRegistradora.adicionarProduto(7, 4.9, 'banana');
caixaRegistradora.iniciarAtendimento("Laércio");

caixaRegistradora.adicionarItem(7, 10);
caixaRegistradora.adicionarItem(1, 1);
caixaRegistradora.adicionarItem(2, 4);
console.log(caixaRegistradora.verificarValorTotal());
console.log(caixaRegistradora.fecharConta(100));
