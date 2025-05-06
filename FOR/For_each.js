// for each //
/*  item (corresponde aos objetos dentro da array)
    index (corresponde a posição que este item ocupa na array)
*/

const user = [
    {
        nome: 'joao',
        idade: 14,
        sexo: 'Maculino'
    },
    {
        nome: 'maria',
        idade: 18,
        sexo: 'feminino'
    },                        // aqui estão posicionados meu objetos dentro da array
    {
        nome: 'matheus',
        idade: 15,
        sexo: 'Maculino'
    },
    {
        nome: 'Poliana',
        idade: 36,
        sexo: 'feminino'
    }
]

// utilizando o forEach pra consultar informações //
user.forEach(function (item, index) { // ESTRUTURA: array.forEach(function(parametros)) {comando} //
    console.log(index, item) // exibo a posição e os objetos dentro da array
})

// Também e possível utilizar o forEach com consições (if/else)
user.forEach(function (item, index) {
    if (item.idade < 18){ // verifico o objeto se a idade dele e menor que 18 
        console.log(`${index} ${item.nome} é menor de idade!!`) // exibo se for uma confirmação
    } else {
        console.log(`${index} ${item.nome} é maior de idade!!`) // se nao for uma negação
    }
})