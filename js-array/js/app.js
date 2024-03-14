console.log('JS ARRAY')

// const nome = '' // string
// const numeri = []; // array
const numeri = [2, 5, 9, 6, 4, 3] // array<Number>

console.log(numeri, 'lunghezza: ', numeri.length)

// stampiamo un elemento dell'array (3)
const numero = numeri[3]
console.log('stampo il valore con indice 3:', numero)

// pushaimo un elemento nell'array (in coda)
numeri.push(10, 12, 52)

// aggiungge elementi all'inizio
numeri.unshift(3, 0)

// numeri = [] // errore riassegnazione di variabile const

console.log(numero, numeri[3])

console.log(numeri)

// toglie elemento dalla fine e lo restituisce
const ultimoElement = numeri.pop()

// toglie elemento dall; inizio e lo restituisce
const primoElemento = numeri.shift()
console.log(primoElemento, ultimoElement)

// numeri = numeri.push(10,12,52)
console.log(numeri)

const nomi = ['Pippo', 'Mimmo', 'Gianni'] // array<String>

const booleani = [true, true, true, false] // array<boolean>

const classi = [
	['Anna', 'Franca', 'Anita'],
	['Mimmo', 'Marco', 'Giuseepe'],
	['Susan', 'Mirko', 'Carlo'],
] // array<array<String>>

// console.log(classi[1][2]) //string

// const mix = ['ciao', 2, true, [2, 3], {}, '', , 'end']
// console.log(mix)

// const nome = prompt('il tuo nome')
// const cognome = prompt('il tuo cognome')
// let nonDef

// const utente = [nome, cognome, booleani, nonDef]
// console.log(utente)

// let num = 5
// console.log(num.toFixed(2))
// console.log(num)

// let testo = 'TESTO MAIUSCOLO'
// // testo = testo.toLowerCase()

// console.log(testo.toLowerCase())
// console.log(testo)

// const array = []

// array[999] = 'ciao'
// console.log(array)
// console.log(array.length)

const numbers = [12, 6, 5, 3, 98, 54, 10]
console.log(numbers)

// const n = numbers.length

for (let i = 0; i < numbers.length; i++) {
	const numeroCorrente = numbers[i] // numbers[6] => 10
	console.log(i, numeroCorrente)
}

//
const lastIndex = numbers.length - 1
console.log(numbers[lastIndex]) // 10

const last = numbers.at(-1) // 10
console.log(last)

const num = '1235'

console.log(num.split(''))
