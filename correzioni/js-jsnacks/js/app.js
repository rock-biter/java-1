console.log('JS snacks')

// 3
let sum = 0
// let numeri = []

for (let i = 0; i < 3; i++) {
	const num = parseInt(prompt('Inserisci un numero')) // number
	numeri.push(num)
	// console.log(num, typeof num)
	sum += num
}

console.log(sum)

// console.log(numeri)

// for (let i = 0; i < numeri.length; i++) {
// 	const num = numeri[i]
// 	console.log(num)
// 	sum += num
// }

// console.log(`La somma dei numeri che hai inserito è ${sum}.`)

// 4
const guests = ['Gianni', 'Anita', 'Carletto']

const nome = prompt('Come ti chiami?')
console.log(guests, nome)

// const trovato = guests.includes(nome) // true | false
// const index = guests.indexOf(nome) // number
// console.log(index)

let trovato = false // boolean

for (let i = 0; i < guests.length; i++) {
	const currentName = guests[i] // string
	if (currentName === nome) {
		trovato = true
	}
	console.log(currentName, nome, trovato)
}

// console.log(currentName) // errore varibili not defined

if (trovato === true) {
	console.log('Puoi partecipare alla festa.')
} else {
	console.log('Mi dispiace non sei stato invitato.')
}

// 6/8

//10

// const numA = prompt('Inserisci il primo numero')
// const numB = prompt('Inserisci il secondo numero')
// let numA = prompt('Inserisci il primo numero') // string
// let numB = prompt('Inserisci il secondo numero') // string

// for (null; numA !== numB; null) {
// 	numA = prompt('Inserisci il primo numero')
// 	numB = prompt('Inserisci il secondo numero')
// }

let a, b

// do {
// 	a = prompt('Inserisci il primo numero')
// 	b = prompt('Inserisci il secondo numero')
// } while (a !== b)

// console.log(a, b)

let prev, next

do {
	prev = next
	next = prompt('Inserisci un numero')
} while (prev !== next)

console.log(prev, next)
console.log('Hai inserito due volte ' + next)

const num = Math.random()
