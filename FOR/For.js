// for - nada mais são que estruturas de repetição //
// a estrutura basicamente consiste em fo ([inicio]; [condição]; [final]) { código aqui } //

for (let i = 0; i < 100; i ++){ // inicio determinando uma var i que recebe o valor de 0; dps eu determino que toda vez que i for <(menor) que 100; i vai ser +(somado) com +1
    console.log(i) // dps vai ser exibido numeros de 0 até que chegue a ser menor que 100 no caso 99
}

// utilizando arrays //

const nomes = ['Victor', 'Samira', 'Kevin', 'Gabriela'] // crio uma array com nomes

for (let i = 0; i < nomes.length; i++) { // aqui (i) vai percorer por toda a array sempre pulando de 1 em 1 nome
    console.log(nomes[i])
}