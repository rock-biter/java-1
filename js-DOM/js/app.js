console.log('DOM')

// const title = 'Ciao mondo' // string
// const titleElement = document.getElementById('title') // Object | null
// console.dir(titleElement)

// titleElement.remove()

// const buttonElement = document.getElementById('submit') // object | null
// console.log(buttonElement)

// ad ogni click sul button viene invocata la function
// buttonElement.addEventListener('mouseleave', function () {
// 	console.log('ho cliccato')

// 	titleElement.classList.add('mb-3')
// 	titleElement.classList.remove('text-primary')
// 	titleElement.classList.toggle('fs-2')

// 	titleElement.style.color = '#569879'
// })

// console.log('dopo add event listener')

// window.addEventListener('mousemove', function (event) {
// 	console.log('mousemove', event.clientX, event.clientY)
// })

// LEGGERE I DATI DA UN FORM AL CLICK
const buttonElement = document.getElementById('submit')

const inputMailElement = document.getElementById('email')
const inputNameElement = document.getElementById('name')
console.log(inputMailElement, inputNameElement)

// SENZA IL FORM CON IL CLICK SUL BUTTON
// buttonElement.addEventListener('click', function () {
// 	console.log('invio')

// 	const name = inputNameElement.value // string
// 	const email = inputMailElement.value // string

// 	console.log(name, email)
// })

// CON IL FORM ED EVENTO SUBMIT SUL FORM
const formElement = document.getElementById('form-contatti')

console.log(formElement)

formElement.addEventListener('submit', function (event) {
	event.preventDefault()

	const name = inputNameElement.value // string
	const email = inputMailElement.value // string
	// console.log('submit', event)

	console.log(name, email)
})
