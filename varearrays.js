//AULA 01//

//CONST E LET 
let num = 4 * 5; // let pode ser alterado o valor;
console.log(`O numero é ${num}`); //(console.log) exibe valor da variavel no terminal aqui eu chamo a minha variálvel;
// ${} isso eu chamo o valor da minha variável dentro de uma String mais so e possivel ser utilizado se tiver o ``;

const num2 = 4; // const n pode ser alterado o valor aqui eu defino que vai ser 4 e nada a mais;
console.log(num2);

//...........//

// Valores BOOLEANOS (true or false)

const usuario = {
  // Aqui eu defino uma Variável chamada usuario do tipo const e abro um conteiner {}
  nome: "sandra", // nome do  usuario
  idade: 19, // idade do usuario
  Sexo: "Masculino", // sexo do usuario
  casado: false, // aqui eu determino se ele e casado aqui no caso eu nao sou ent e false+
};
console.log(usuario); // exibo no terminal todas as informações contidas no container
console.log(usuario.nome); // exibo apenas o dado da var nome

const todosUsuarios = [ // Aqui eu inicio uma Array (agrupamento de informações)
  { 
    nome: "Victor", 
    idade: 19,          // usuario1 (vale lembrar que a posições de uma array sempre iniciam em [0,1,2,3...]
    Sexo: "Masculino", 
    casado: false 
},
{
    nome: "Maikel", 
    idade: 47,         // usuario2
    Sexo: "Masculino", 
    casado: true
}
];
console.log(todosUsuarios)
console.log(todosUsuarios[0].nome) // aqui eu exibo no terminal as informações do usuario2 e no [chamo a posição dele na array]
//...........//

// Array //
//arrays são agrupamentos de dados que podem ser atribuidos em conjunto dentro de uma variavel sendo consultado pela sua posição ocupante no caso da posição 0... em diante

const numeros = [2, 4, 6, 8, 10] // nesse caso esta array e listada com numeros pares de 2 a 10
console.log(numeros[2]) // em [] eu consulto a posição do dado dentro da array e exibo na tela nesse caso o num6 ocupa a posição 2 na array

const nomes = ["victor", "sandra", "maikel", "theo", "zoe"] // ja aqui maikel ocupa a posição 2 na array
console.log(nomes[4])
//...........//

