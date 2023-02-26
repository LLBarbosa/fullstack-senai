class CaixaRegistradora {
  constructor() {
    const products = [
      {
        codigoBarra: 1,
        preco: 14.10,
        nome: "Azeite",
        quantidade: 10
      },
      {
        codigoBarra: 2,
        preco: 4.20,
        nome: "Farinha",
        quantidade: 3
      },
      {
        codigoBarra: 3,
        preco: 3.40,
        nome: "Sal",
        quantidade: 12
      },

      {
        codigoBarra: 4,
        preco: 2.50,
        nome: "Pão",
        quantidade: 5
      },

      {
        codigoBarra: 5,
        preco: 9.60,
        nome: "Caderno",
        quantidade: 7
      }
    ];
    localStorage.setItem("products", JSON.stringify(products));
    this.cliente = null;
    this.conta = [];
  }

  adicionarProduto(codigoBarra, preco, nome) {
    const novoProduto = {
      codigoBarra: codigoBarra,
      preco: preco,
      nome: nome,
      quantidade: 0
    };
    const products = JSON.parse(localStorage.getItem("products"));
    products.push(novoProduto);
    localStorage.setItem("products", JSON.stringify(products));
  }

  adicionarEstoque(codigoBarra, quantidade) {
    const products = JSON.parse(localStorage.getItem("products"));
    const produto = products.find((p) => p.codigoBarra === codigoBarra);
    if (produto) {
      produto.quantidade += quantidade;
      localStorage.setItem("products", JSON.stringify(products));
      return true;
    } else {
      return false;
    }
  }

  iniciarAtendimento(cliente) {
    this.cliente = cliente;
    this.conta = [];
  }
  
  adicionarItem(codigoBarra, quantidade) {
    const products = JSON.parse(localStorage.getItem("products"))
    const produto = products.find((p) => p.codigoBarra === codigoBarra);
    if (produto) {
      if (produto.quantidade < quantidade) {
        console.log("Quantidade insuficiente");
        return false;
      }
      const item = {
        codigoBarra: produto.codigoBarra,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: quantidade,
      };
      produto.quantidade -= quantidade;
      this.conta.push(item);
      localStorage.setItem("products", JSON.stringify(products));
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
caixaRegistradora.adicionarProduto(11, 4.9, "banana");
console.log(caixaRegistradora.adicionarEstoque(11, 15));
caixaRegistradora.iniciarAtendimento("Laércio");
console.log(caixaRegistradora.adicionarItem(11, 10));
console.log(caixaRegistradora.adicionarItem(2, 4));
console.log(caixaRegistradora.adicionarEstoque(2, 10));
console.log(caixaRegistradora.adicionarItem(2, 4));
console.log(caixaRegistradora.verificarValorTotal());
console.log(caixaRegistradora.fecharConta(100));
  