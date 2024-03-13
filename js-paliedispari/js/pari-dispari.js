console.log('Pari o dispari')

// function getRandomInt(min, max) {
// 	const random = Math.floor(Math.random() * (max - min + 1)) + min // 50 - 80 (50 + 30)
// 	return random
// }

// Math.random() * 51 // 0 - 50

// chiedere di scegliere pari o dispari
const sceltaUtente = prompt('Scrivi pari o dispari')
console.log(sceltaUtente)

// chiedere un numero al utente
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'))
console.log(numeroUtente)

// genera un numero per il PC
const numberPC = getRandomIntInclusive(1, 5)
console.log(numberPC)

// sommare i due numeri
const somma = numeroUtente + numberPC
console.log(somma, somma % 2)

// scelto pari
console.log(sceltaUtente === 'pari')

// scelto dispari
console.log(sceltaUtente === 'dispari')

// somma pari
console.log(isEven(somma))

// somma è dispari === somma non è pari
console.log(!isEven(somma))

// utente vince se:
// pari e somma è pari

let num = 5
// let num = 10 //non possiamo ridichiarare la stessa viarbile nello stesso scope
{
	let num = 10
	console.log(num)
}

console.log(num)

const evenWithEvenSum = sceltaUtente === 'pari' && isEven(somma) // boolean
const oddWithOddSum = sceltaUtente === 'dispari' && !isEven(somma) // boolean

if (evenWithEvenSum || oddWithOddSum) {
	// 	console.log('hai vinto')
	// } else if (oddWithOddSum) {
	// dispari e somma è dispari
	let num = 100
	console.log('hai vinto')
} else {
	console.log('hai perso')
}

// altimenti utente perde

// gnera un numero int random da min e max compresi
function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

function isEven(num) {
	return num % 2 === 0
	// if(num % 2 === 0) {
	//   return true
	// }

	//  return false
}
