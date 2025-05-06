// MAP, REDUCE E FILTER
// map - mapeia item por item de uma array criando um array novo com a msm quantidade de itens
const numt = [1, 2, 3, 4, 5, 6]; // array
const triplo = numt.map((numeros) => numeros * 3); // num.map captura a array e gera um novo triplicando o valor dos itens //
console.log(triplo);

const numd = [2, 4, 6, 8, 10];
const dobro = numd.map((numero, posicao, arraycomp) => {
  console.log(
    `posição: ${posicao} -> item: ${numero} -> arraycompleto: ${arraycomp}`
  );
});

const numeroq = [1, 2, 3, 4, 5, 6]
const quadru = numeroq.map((item) =>{
    return item * 4
})
console.log(quadru)

