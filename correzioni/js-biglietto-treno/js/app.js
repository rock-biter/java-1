console.log('biglietto del treno')

const pricePerKm = 0.21

// chiedere il numero di km:
const km = parseInt(prompt('Inserisci il numero di km del viaggio')) // number
console.log(km, typeof km)
// chiedere l'età del passeggero
const age = parseInt(prompt('Inserisci la tua età')) // number
console.log(age, typeof age)

// validare i dati
// - km > 0
console.log(km > 0)
// - age >= 0
console.log(age >= 0)
// - km non è NaN
console.log(!isNaN(km))

// - age none è NaN
console.log(!isNaN(age))

// SE i dati sono validi
if (km > 0 && age >= 0 && !isNaN(km) && !isNaN(age)) {
	// calcolare il prezzo del biglietto:
	// - calcolare il prezzo base sapendo che ogni km costa 0.21 euro
	const basePrice = km * pricePerKm
	console.log(basePrice)

	// - calcolare lo sconto:
	let discount = 0 // number
	// -- SE eta < 18 => sconto del 20%
	if (age < 18) {
		discount = 0.2
	} else if (age > 65) {
		// -- ALTRIMENTI SE eta > 65 =>> sconto 40%
		discount = 0.4
	}

	// -- ALTRIMENTI => sconto 0%
	// - calcolare il prezzo finale = prezzo base - sconto
	const price = basePrice - basePrice * discount // number
	console.log(price.toFixed(2), price)
	// stampare il prezzo con 2 cifre decimali

	// BONUS
	const priceElement = document.getElementById('price')
	// console.log(priceElement)
	priceElement.innerHTML =
		'Prezzo del biglietto: ' + price.toFixed(2) + ' &euro;'
} else {
	// ALTRIMENTI
	// - stampere che i dati non sono validi
	alert('I dati inseriti non sono validi')
}
