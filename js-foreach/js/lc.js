const bikes = [
	{
		marca: 'Bianchi',
		peso: 6.5,
	},
	{
		marca: 'Torpado',
		peso: 5.3,
	},
	{
		marca: 'Boolean',
		peso: 9.1,
	},
	{
		marca: 'Graziella',
		peso: 8.4,
	},
	{
		marca: 'Bianchi',
		peso: 8.7,
	},
	{
		marca: 'Torpado',
		peso: 7.8,
	},
	{
		marca: 'Pininfarina',
		peso: 4.7,
	},
	{
		marca: 'Atala',
		peso: 10,
	},
]

console.log(bikes)

let biciLeggera = bikes[0] // object

for (let i = 0; i < bikes.length; i++) {
	const bike = bikes[i] // object
	// console.log(biciLeggera, bike)
	if (bike.peso < biciLeggera.peso) {
		biciLeggera = bike
	}
}

bikes.forEach(function (bike) {
	if (bike.peso < biciLeggera.peso) {
		biciLeggera = bike
	}
})

console.log(biciLeggera)

// // oridanimao l'array dalla piu leggera alla più pensate
// const sortedBikes = bikes.toSorted((a, b) => a.peso - b.peso)
// console.log(sortedBikes)

// // la bici piu leggera sara il primo elemento dell'array
// const biciLeggera = sortedBikes[0]
// console.log(biciLeggera)
