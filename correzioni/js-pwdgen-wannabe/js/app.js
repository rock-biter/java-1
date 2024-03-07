console.log('PW GEN')

/**
 * Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferitoInfine scrivi sulla console la password generata concatenando le tre stringhe con un numero finale (scelto da voi):
per esempio: nomecognomecolorepreferito21
 */

// chiedere all'utente il suo nome:
// - dichiarare una variabile 'nome' e gli assegnamo il prompt dell'utente
const nome = prompt('Inserisci il tuo nome') // string | null
console.log(nome)

// chiedere all'utente il suo cognome:
// - dichiarare una variabile 'cognome' e gli assegnamo il prompt dell'utente
const cognome = prompt('Inserisci il tuo cognome') // string | null
console.log(cognome)

// chiedere il colore preferito:
// - dichiarare una variabile 'colore' e gli assegnamo il prompt dell'utente
const colore = prompt('Inserisci il tuo colore preferito') // string | null
console.log(colore)

// dichiarare una variabile numero che contiene il numero 21
const numero = 21
// const numero = Math.floor(Math.random() * 100) + 1 // number   1 - 100
// const numero = getRandomIntInclusive(100, 200)

// generare la password:
// - dichiarare una variabile 'password' e assegnergli la concatenazione di 'nome', 'cognome, colore e il numero
const password = nome + cognome + colore + numero
console.log(password)

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

// const numeroStringa = 'ciao'
// const numeroNumber = +numeroStringa
// console.log(numeroNumber)
