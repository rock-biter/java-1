console.log('calorie')
// km * 125

const buttonElement = document.getElementById('submit') //
console.log(buttonElement)

const kmInputElement = document.getElementById('km') // object | null
console.log(kmInputElement)
const pesoInputElement = document.getElementById('peso')

const resultElement = document.getElementById('result')

buttonElement.addEventListener('click', function () {
	console.log('click sul button')

	const km = parseFloat(kmInputElement.value /*string*/) // number
	console.log('numero di km percorsi: ', km)

	const peso = parseFloat(pesoInputElement.value) // number
	const calPerPero = 1 * peso

	const calorie = km * calPerPero

	console.log('Calorie consumate: ', calorie)

	// resultElement.innerHTML = 'Calorie consumate: ' + calorie + ' Cal.'
	resultElement.innerHTML = `
  <table class="table">
    <thead>
      <tr>
        <th>Km</th>
        <th>
          Peso
        </th>
        <th>Calorie</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${km} km</td>
        <td>${peso} kg</td>
        <td>${calorie} Cal</td>
      </tr>
    </tbody>
  </table>
  `
})
