console.log('JS function')

// dichiariamo una function che riceve una stringa e la stampa in console
function log(text) {
	console.log(text)
}

// const testo = prompt('Inserisci un testo')

// invochiamo la funzione dicendogli di stampare il testo: "Ciao mamma!"
log('Ciao mamma!')
// log(testo)
console.log('Ciao mamma!')

// creaimo una funzione che ci dice se un numero (input) è pari o dispari
function isEven(num) {
	// resto della divisione per 2
	const resto = num % 2 // il resto della divisione

	// SE resto === 0
	if (resto === 0) {
		// - allora return true
		return true
	} else {
		// ALTRIMENTI
		// - return false
		return false
	}
}

// function isEven(num) {
//   return num % 2 === 0
// }

const result = isEven(11)
console.log('result =', result)

// a partire da un array di numeri creare una funzione che ci restituisce la somma dei numeri

const numeri = [10, 5, 6, 9, 12]

function sum(array) {
	let result = 0

	for (let i = 0; i < array.length; i++) {
		const num = array[i]
		// console.log(num)
		result += num
	}

	// return number
	return result
}

const somma = sum(numeri) // number
console.log(somma)

console.log(sum([2, 3, 65, 9]))
console.log(sum([]))
console.log(sum([-45, 100, 23, 45, 7, 98, 52, -62]))

// creare una funzione che rivece una parola come input e ci restituisce true se la parola è palindroma, false se non lo è

// anna === anna, osso === osso, pippo !== oppip
