const produtos = [
  { id: 1, nome: "Celular", preco: 1299.99, temDesconto: true, quantidade: 8 },
  { id: 2, nome: "Notebook", preco: 3169.9, temDesconto: false, quantidade: 5 },
  { id: 3, nome: "Televisão", preco: 1800.0, temDesconto: true, quantidade: 4 }, // um exemplo de bd
  { id: 4, nome: "Geladeira", preco: 1468.99, temDesconto: false, quantidade: 3 },
  { id: 5, nome: "Fogão", preco: 784.9, temDesconto: true, quantidade: 1 },
  { id: 6, nome: "Armário", preco: 246.0, temDesconto: false, quantidade: 7 },
];

// inicio da consulta...
const newProdutos = produtos.map((produto) => {
  const novoPreco = produto.temDesconto
    ? /* if */ produto.preco * 0.9 /* aqui e aplicado 10% de desconto */
    : /* else */ produto.preco; // verifica se o produto tem desconto ou não

  // lê SE produto.temDesconto -> então produto.preco X 0,9 -> senão produto.preco permanece

  return {
    // retorna
    id: produto.id, // id do produto
    nome: produto.nome, // nome do produto
    preco: novoPreco.toLocaleString("pt-br", {
      // novo preco com desconto dos produtos (toLocateString: identifica o idioma local)
      style: "currency", // personaliza o estilo pra moeda
      currency: "BRL", // região da moeda
    }),
    quantidade: produto.quantidade, // exibe a quantidade disponivel dos produtos
  };
});

console.log(newProdutos); // exibe resultado na tela

