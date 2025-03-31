function calcularTotal() {
    const precos = {
        cachorroQuente: 7.00,
        bauruSimples: 10.30,
        bauruComOvo: 15.00,
        hamburguer: 7.00,
        cheeseburger: 9.00,
        refrigerante: 7.00,
        Batatafrita: 20.00,
        Suco: 10.50
    };

    let total = 0;
    let resumo = "Itens Pedidos:\n";

    // Cachorro Quente
    if (document.getElementById("cachorroQuenteQtde").value) {
        let quantidade = parseInt(document.getElementById("cachorroQuenteQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.cachorroQuente;
            resumo += `Cachorro Quente: ${quantidade} x R$${precos.cachorroQuente} = R$${(quantidade * precos.cachorroQuente).toFixed(2)}\n`;
        }
    }

    // Bauru Simples
    if (document.getElementById("bauruSimplesQtde").value) {
        let quantidade = parseInt(document.getElementById("bauruSimplesQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.bauruSimples;
            resumo += `Bauru Simples: ${quantidade} x R$${precos.bauruSimples} = R$${(quantidade * precos.bauruSimples).toFixed(2)}\n`;
        }
    }

    // Bauru com Ovo
    if (document.getElementById("bauruComOvoQtde").value) {
        let quantidade = parseInt(document.getElementById("bauruComOvoQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.bauruComOvo;
            resumo += `Bauru c/ Ovo: ${quantidade} x R$${precos.bauruComOvo} = R$${(quantidade * precos.bauruComOvo).toFixed(2)}\n`;
        }
    }

    // Hamburguer
    if (document.getElementById("hamburguerQtde").value) {
        let quantidade = parseInt(document.getElementById("hamburguerQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.hamburguer;
            resumo += `Hamburguer: ${quantidade} x R$${precos.hamburguer} = R$${(quantidade * precos.hamburguer).toFixed(2)}\n`;
        }
    }

    // Cheeseburger
    if (document.getElementById("cheeseburgerQtde").value) {
        let quantidade = parseInt(document.getElementById("cheeseburgerQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.cheeseburger;
            resumo += `Cheeseburger: ${quantidade} x R$${precos.cheeseburger} = R$${(quantidade * precos.cheeseburger).toFixed(2)}\n`;
        }
    }

    // Batatafrita
    if (document.getElementById("BatatafritaQtde").value) {
        let quantidade = parseInt(document.getElementById("BatatafritaQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.Batatafrita;
            resumo += `Batatafrita: ${quantidade} x R$${precos.Batatafrita} = R$${(quantidade * precos.Batatafrita).toFixed(2)}\n`;
        }
    }

    // Refrigerante
    if (document.getElementById("refrigeranteQtde").value) {
        let quantidade = parseInt(document.getElementById("refrigeranteQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.refrigerante;
            resumo += `Refrigerante: ${quantidade} x R$${precos.refrigerante} = R$${(quantidade * precos.refrigerante).toFixed(2)}\n`;
        }
    }

    //Suco de Laranja
    if (document.getElementById("SucoQtde").value) {
        let quantidade = parseInt(document.getElementById("SucoQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.Suco;
            resumo += `Suco: ${quantidade} x R$${precos.Suco} = R$${(quantidade * precos.Suco).toFixed(2)}\n`;
        }
    }

    resumo += `\nTotal: R$${total.toFixed(2)}`;
    document.getElementById("resumoPedido").innerText = resumo;
}
