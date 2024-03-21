console.log('Oggetti')

let nome = 'Mamma'
let number = 23
let numeri = [1, 2, 5, 6, 9, 4, 5]
let arrayVuoto = [] //array (vuoto)
let cose = [1, 'ciao', function () {}, true, {}]
let nomi = ['Maria', 'Gino', 'Giangi']
let ePari = true
let parola = undefined
let cosa = null
let oggettoVuoto = {} // object (vuoto)

// oggettoVuoto.targa = 'VG125PO'
// oggettoVuoto.alimentazione = 'diesel'
// oggettoVuoto.marca = 'Fiat'

// let userName = 'Mario'
// let userAge = 32
// let userEmail = 'mario.mariotti@gmail.com'
// let userState = true
let mario = {
	name: 'Mario',
	age: 32,
	email: 'mario.mariotti@gmail.com',
	state: true,
}

console.log(mario)

// let user2Name = 'Mimmo'
// let user2age = 36
// let user2Email = 'mimmo@gmail.com'
// let user2State = false
let mimmo = {
	name: 'Mimmo',
	age: 36,
	email: 'mimmo@gmail.com',
	state: false,
}

console.log(mimmo)
// dot notation
console.log(mimmo.name)
console.log(mario.email)

// brackets notation
console.log(mimmo['name'])
console.log(mario['email'])

const elTitle = document.getElementById('title')

console.log(elTitle.innerHTML)
elTitle.innerHTML = 'Ciao mamma'

mimmo.name = 'Mammo'

// 1. la children che nonè presente viene aggiunta
mimmo.children = [mario]
// mimmo.children.push(mario)

console.log(mimmo)

// Snack 1
/**
 * Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
 */

const car = {
	marca: 'Fiat',
	modello: 'Punto',
	alimentazione: 'Benzina',
}

const numbers = [1, 2, 3]
const stringhe = ['Ciao', 'Mamma', 'Ciao']

// const coseACaso = [
//   {
//     nome: 'TV',
//     price: 236
//   },
//   {
//     nome: 'Gianluca',
//     age: 32
//   },
//   {
//     marca: 'Fiat',
//     modello: 'Punto'
//   }
// ]

const cars = [
	{
		marca: 'Fiat',
		modello: 'Punto',
		alimentazione: 'Benzina',
	},
	{
		marca: 'Fiat',
		modello: 'Panda',
		alimentazione: 'Diesel',
	},
	{
		marca: 'Alfa Romeo',
		modello: 'Giulietta',
		alimentazione: 'gpl',
	},
	{
		marca: 'Toyota',
		modello: 'Auris',
		alimentazione: 'Elettrica',
	},
	{
		marca: 'Ford',
		modello: 'Fiesta',
		alimentazione: 'Metano',
	},
	{
		marca: 'Fiat',
		modello: 'Punto',
		alimentazione: 'Diesel',
	},
	{
		marca: 'Alfa Romeo',
		modello: 'Giulietta',
		alimentazione: 'Metano',
	},
	{
		marca: 'Toyota',
		modello: 'Auris',
		alimentazione: 'Benzina',
	},
	{
		marca: 'Ford',
		modello: 'Fiesta',
		alimentazione: 'Elettrica',
	},
]

// console.log(cars)

const benzina = []
const diesel = []
const leAltre = []

for (let i = 0; i < cars.length; i++) {
	const car = cars[i]

	console.log(car)

	if (car.alimentazione === 'Benzina') {
		benzina.push(car)
	} else if (car.alimentazione === 'Diesel') {
		diesel.push(car)
	} else {
		leAltre.push(car)
	}
}

console.log(benzina)
console.log(diesel)
console.log(leAltre)

/**
 * SNACK 2
 * A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

p
ippo

P + ippo

P
LUTO

P + luto

 */

const strings = ['pippo', 'PLUTO', 'Paperino']
const nuoveStringhe = []

for (let i = 0; i < strings.length; i++) {
	const stringa = strings[i]
	const stringMinuscola = stringa.toLowerCase()
	console.log(stringa, stringMinuscola)

	// rimettere la prima lettere maiuscola

	nuoveStringhe.push(stringMinuscola)
}

console.log(nuoveStringhe)
