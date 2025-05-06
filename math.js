// MATH - bliblioteca de matemática // 

Potência - POW
const potencia = Math.pow(2,4) // operador de potência (pow) dentro dos parenteses (1º numero, 2º potência) 
console.log(potencia)

// Raíz quadrada - SQRT
const raiz = Math.sqrt(121,2)
console.log(raiz)

// Arrendondamento pra cima - CEiL
const arredc = Math.sqrt(125,2)
console.log(Math.ceil(arredc))

// Arredondamento pra baixo - FLOOR
const arredb = Math.sqrt(185,2)
console.log(Math.floor(arredb))

// Random - numeros aleatorios entre 0 e 1  
const Random = Math.random()
console.log(Random)

/* para determinar o num max e o min que sera gerado aleatoriamente */
const Randommxmn = Math.random() * (10 - 1) + 1 // (max -(entre) min) + 1
console.log(Math.ceil(Randommxmn)) // console.log(Math.ceil<=(arredonda pra cima)(variavel))
