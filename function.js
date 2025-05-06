//FUNÇÕES - trechos de códigos que só executam quando chamados//

/* função VOID */
// funções VOID são funções vazias que n retornam nada

function qualMeuNome() {
  //aqui eu declaro uma função com o nome de qualMeuNome
  console.log("Victor"); // aqui dentro desse conteiner eu declaro uma ação a ser executada no caso escrever a string "Victor"
}
//funções precisam ser chamadas no código para serem executadas se nao a linha delas e pulada
qualMeuNome(); // aqui por exemplo eu chamo a função qualMeuNome() e o console.log("Victor") e executado!!

//........//

/* funções com parâmetros */
//funções com parametros possuem "regras" que sao determinadas para que ela retorne um valor entao ela precisa receber essa informações //
function somar(num1, num2) { // declaro a função somar e dentro dos (eu determino os parametros nada mais são doq variaveis)
  const sum = num1 + num2 // aqui eu crio uma var sum que ira realizar uma soma dos valores de num1 + num2
  console.log(sum) // exibe o resultado
}

function subtrair(num3, num4) {
    const sub = num3 - num4       // essa ira realizar uma subtração
    console.log(sub)
}

function resultado(num1, num2, num3, num4) { // determino 4 var
    const res = (num1 + num2) + (num3 - num4)  // ja essa ela ira somar dentro dos parenteses, subtrair o outro e depois somar os dois 
    console.log(`O resulttado é ${res}`) // e aqui irá exibir o resultado
}
somar(4, 4); 
subtrair(2, 2); //vale lembrar que ao chamar funções com param dentro dos parenteses você especifica os valores que os mesmos seguem a ordem das var da função 
resultado(2, 12, 8, 4);

//........//

/* return */

function boletim(notaAl){ 
    const nota = 10 // Determino uma var nota com o valor fixo 10
    if(notaAl == nota){ // se a nota do aluno (notaAL) for igual a var(nota) 
        return "Este aluno foi APROVADO!!" // retorna
    } else { // se nao retorna
        return "Este aluno foi REPROVADO!!"
    }
}

const Pedro = boletim(8) // aqui eu crio uma var Pedro ("Aluno") e atribuo a minha function boletim(com o valor de 8 (nota do aluno)) 
console.log(Pedro) // e ent exibe o resultado da função

//........//

/* Arrow function */

function nomeFuncao(){} // método antigo (bem utilizado hj em dia ainda)
const variavel = (Param1,Param2, Param3) => {} // forma moderna mais atual

//........//