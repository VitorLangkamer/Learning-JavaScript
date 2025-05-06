// for in - utilizado em objetos //

const user = {
    name: 'Victor',
    idade: 19,           // isto é um objeto!!
    sexo: "Masculino"
}

for(let key in user){ // key representa no caso as categorias do meu objeto (name, idade, sexo)
    console.log( key + ': ' + user[key]) // exibo as minhas KEYS e user[keys] os dados delas
}