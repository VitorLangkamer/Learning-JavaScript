//AULA 02//

// IF(se) or ELSE(se não)

/*if / else comparadores
    > maior que
    < menor que
    == igual que (compara APENAS o valor)
    === igual que (compara VAlOR e TIPO)
    >= maior igual
    <= menor igual
*/

const idadeBeber =  20 // defino a idade na variavel idadeBeber

if (idadeBeber >= 18){ // aqui determino uma condição na qual informo que SE a idadeBeber for >= (maior igual) a 18
    console.log('Venda autorizada')  // exibe "Venda autorizada" 
} else { // se nao ele exibe "Venda Proibida!!!!"
    console.log('Venda Proibida!!!!') 
}

//DESAFIO - comparar se uma cidade e grande ou pequena//

const cidade = 500000
const riodejaneiro = 250
const saomateus = 4000000

if (riodejaneiro >= cidade){
    console.log("rio de janeiro é uma cidade grande!!")
} else {
    console.log("rio de janeiro é uma cidade pequena")
}
if (saomateus >= cidade){
    console.log("são mateus é uma cidade grande!!")
} else {
    console.log("são mateus é uma cidade pequena")
}