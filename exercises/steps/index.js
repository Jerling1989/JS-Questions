// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// MY SOLUTION
function steps(n) {
	let hash = '';

	for (let i = 1; i <= n; i++) {
		hash += '#';
		console.log(hash + ' '.repeat(n - i));
	}
}


// VIDEO SOLUTION
function steps(n) {
	for (let row = 0; row < n; row++) {
		let hash = '';

		for (let col = 0; col < n; col++) {
			if (col <= row) {
				hash += '#';
			} else {
				hash += ' ';
			}
		}
		console.log(hash);
	}
}


module.exports = steps;
