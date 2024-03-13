console.log('Griglia dinamica')

const gridEl = document.querySelector('.grid')
console.log(gridEl)

const size = 8
const numOfCells = size ** 2 // == 8 * 8

for (let i = 0; i < numOfCells; i++) {
	const num = i + 1
	// console.log(num)
	// const cellString = `<div class="cell">${num}</div>` //string
	// gridEl.innerHTML += cellString

	const cellEl = document.createElement('div') // object
	cellEl.className = 'cell'
	cellEl.innerHTML = num

	gridEl.append(cellEl)

	cellEl.addEventListener('click', function () {
		console.log('click sulla casella numero: ', num)

		cellEl.classList.toggle('bg-dark')
		// this.classList.add('bg-dark')
	})
}
