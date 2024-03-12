console.log('JS for loop')

// const n = 10

// for (
// 	/** contatore */ let i = 0;
// 	/** condizione */ i < n;
// 	/** incremento */ i++
// ) {
// 	/** istruzione: codice che verra ripetuto (iterato) */
// 	console.log('ciao')
// }

// let j = 5
// j++ // incremento j = 6
// j = j + 1 // icrementando di 1 il valore di j

// j = j + 3 // incrementando di 3 il valore di j

// j += 5 // incrementando di 5 il valore di j

// j = j / 2
// j /= 2

// j = j * 10
// j *= 10

// j = j - 2
// j -= 2

// for (let i = 0; i < n; i++) {
// 	console.log('ciao')
// }

// for (let i = n; i > 0; i -= 3) {
// 	console.log('arrivederci')
// }

// console.log('ho finito')

const n = 10

for (let i = 0; i < n; i++) {
	// wuesto viene eseguito 10 volte
	// console.log('i = ', i)
	// const num = ++i
	// i++ // NON SI FA!!!

	if (i === 0) {
		console.log('prima iterazione')
	}

	if (i === n - 1) {
		console.log('utlima iterazione')
	}

	const num = i + 1
	console.log(num)

	/// 500+
}

// let i = 0

// 0 < 10 => true
// 'i = 0'
// i++ => i = 1

// 1 < 10 => true
// 'i = 1'
// i++ => i = 2

//...

// 'i = 9'
// i++ i = 10

// 10 < 10 => false
