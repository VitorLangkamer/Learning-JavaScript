// filtrar produtos

// reduz todos os dados do array  pra um só valor

const produtos = [
  { id: 1, nome: "Celular", preco: 1299.99, temDesconto: true, quantidade: 8 },
  { id: 2, nome: "Notebook", preco: 3169.9, temDesconto: false, quantidade: 5 },
  { id: 3, nome: "Televisão", preco: 1800.0, temDesconto: true, quantidade: 4 }, // um exemplo de bd
  {
    id: 4,
    nome: "Geladeira",
    preco: 1468.99,
    temDesconto: false,
    quantidade: 3,
  },
  { id: 5, nome: "Fogão", preco: 784.9, temDesconto: true, quantidade: 1 },
  { id: 6, nome: "Armário", preco: 246.0, temDesconto: false, quantidade: 7 },
];

// // inicio da consulta...
// // formatação do array aplicando descontos
// const newProdutos = produtos.map((produto) => {
//   const novoPreco = produto.temDesconto
//     ? /* if */ produto.preco * 0.9 /* aqui e aplicado 10% de desconto */
//     : /* else */ produto.preco; // verifica se o produto tem desconto ou não

//   // lê SE produto.temDesconto -> então produto.preco X 0,9 -> senão produto.preco permanece

//   return {
//     // retorna
//     id: produto.id, // id do produto
//     nome: produto.nome, // nome do produto
//     preco: novoPreco.toLocaleString("pt-br", {
//       // novo preco com desconto dos produtos (toLocateString: identifica o idioma local)
//       style: "currency", // personaliza o estilo pra moeda
//       currency: "BRL", // região da moeda
//     }),
//     quantidade: produto.quantidade, // exibe a quantidade disponivel dos produtos
//   };
// });

// console.log(newProdutos); // exibe resultado na tela

// // quanto ira faturar se vender tudo
// // inicio da reduçao
// const vendasTotal = produtos.reduce((acumulador, produto) => {
//   return acumulador + produto.preco * produto.quantidade; // ira multiplicar o valor + quantidade do produto e add no acumulador
// }, 0 /* numero ira começar a contar */);

// console.log(
//   vendasTotal.toLocaleString("pt-br", {
//     // novo preco com desconto dos produtos (toLocateString: identifica o idioma local)
//     style: "currency", // personaliza o estilo pra moeda
//     currency: "BRL", // região da moeda
//   })
// );

// filtra toda a array buscando os produtos com desconto (true)
const filtrar = produtos.filter((produto)=> produto.temDesconto)
console.log(filtrar)

//gerando um relatorio completo com a filtragem dos produtos
// adicinando +10 produtos
// filtrando produtos em promo
// faturamento total 

const faturamentoTotal = produtos 
  .map((produto) => { // inicio do mapeamento
    return { ...produto/*...(aplica a todos)*/, quantidade: produto.quantidade + 10 }; // adicionando +10 a quantidade
  })
  .filter((produto) => produto.temDesconto) // aplica a filtragem dos produtos com desconto
  .reduce( // junta o valor total de todos os produtos em promo
    (acumulador, produto) => acumulador + produto.quantidade * produto.preco,
    0
  );

console.log(
  faturamentoTotal.toLocaleString("pt-br", {
    style: "currency",                          // exibe o resultado final (R$ 57.233,72)
    currency: "BRL",
  })
);