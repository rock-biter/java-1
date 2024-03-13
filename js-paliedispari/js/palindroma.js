console.log('Palindroma')

// chiedere una parola all'utente
const parola = prompt('Inserisci una parola. Ti dirò se è palindroma o no.')
console.log(parola)

const condizione = isPalindrome(parola) // boolean

// SE la parola è palindroma
if (condizione) {
	// - stampare la parola è palindroma
	console.log(`La parola '${parola}' è palindroma.`)
} else {
	// ALTRIMENTI
	// - stampare la parola non è palindroma
	console.log(`La parola '${parola}' non è palindroma.`)
}

/**
 * funzione che riceve in input una parola
 * ritorna true se la parola è palindrome
 * ritorna false se la parola non è palindroma
 */

function isPalindrome(text) {
	// a partire dalla string text ottenere la sua invertita
	// for (let i = text.length - 1; i >= 0; i--) {
	// 	const char = text[i]
	// 	console.log(char)
	// }

	// controllore maiuscole
	text = text.toLowerCase()
	text = text.replaceAll(' ', '')

	console.log(text)

	const invertedText = getInvertedText(text) // string

	// for (let i = 0; i < text.length; i++) {
	// 	const char = text.at(-1 - i)
	// 	invertedText += char
	// 	console.log(char, invertedText)
	// }
	// console.log(text.split('')) // array
	// console.log(text.split('').reverse()) // array
	// console.log(text.split('').reverse().join('')) // string

	// invertedText = text.split('').reverse().join('') // string
	// console.log(invertedText)

	// SE 'ciao' === 'oaic'
	if (text === invertedText) {
		// - ritornare true
		return true
	} else {
		// ALTRIMENTI
		// - ritornare false
		return false
	}
}

function getInvertedText(text) {
	let invertedText = '' // string

	for (let i = 0; i < text.length; i++) {
		const char = text.at(-1 - i)
		invertedText += char
		// console.log(char, invertedText)
	}

	return invertedText
}
