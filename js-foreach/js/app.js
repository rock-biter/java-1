console.log('prop dinamiche degli oggetti')

// const numeri = [12, 5, 6, 9]
// const num = numeri[2] // 6

// let i = 2
// const currentNumber = numeri[i] // numeri[2] => 6
// const altroCurrent = numeri['i'] // numeri.i => undefined

// const person = {
// 	name: 'Mario',
// 	age: 33,
// 	propName: 'sono io',
// 	prop: 'sono la chiave prop',
// }

// const name = person.name // Mario
// const name = person['name'] // Mario
// const age = person['age'] // 33

// const propName = 'name'

// const name2 = person.propName // sono io
// const name2_2 = person['propName'] // sono io
// const name3 = person[propName] // Mario // person.name
// console.log(name2, name3)

// // const prop = prompt('Cosa vuoi sapere della persona?')
// // console.log(prop)

// // const result = person[prop]
// // // const result = person.prop
// // console.log('Ecco quello che cercavi: ' + result + '.')

// const nomeProp = prompt('Quale proprietà inserire?')
// const value = prompt('Che valore vuoi assegnare alla proprità ' + nomeProp)

// console.log(nomeProp, value)
// // person[nomeProp] = value

// // console.log(person)
// const user = {
// 	[nomeProp]: value,
// }

// const user3 = {}
// user3[nomeProp] = value

// const user2 = {
// 	nomeProp: value,
// }

// console.log(user, user2, user3)

console.log('Foreach')

const numbers = [22, 6, 9, 4, 5, 8, 6, 98, 5]

// ARROW FUNCTION (che non ci servono ma le vedrete in documentazione)
// numbers.forEach((el) => console.log(el))

console.log('con il forEach')

numbers.forEach(function (element, index, array) {
	console.log(element, array[index])
})

const powerOfTwo = []

numbers.forEach(function (number) {
	const pow = number ** 2 // operatore potenza === element * element
	powerOfTwo.push(pow)
})

numbers.forEach(pow2)

function pow2(num) {
	const pow = num ** 2
	powerOfTwo.push(pow)
	return 'ciao mamma'
}

console.log(powerOfTwo)

console.log('con il FOR')

for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i]
	console.log(number)

	perOgniElemento(number, i, numbers)
	pow2(number)

	// if (number > 10) {
	// 	console.log('ciao')
	// } else {
	// 	console.log('mamma')
	// }
}

function perOgniElemento(element, index, array) {
	// console.log(element, index, array)
	// if (element > 10) {
	// 	console.log('ciao')
	// } else {
	// 	console.log('mamma')
	// }
}
