// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// MY SOLUTION
function pyramid(n) {
	let hash = '';
	for (let i = 1; i <= n; i++) {
		hash += '#';
		if (i % 2 !== 0) {
			console.log(' '.repeat((n - i)/2) + hash + ' '.repeat((n - i)/2));
		}
	}
}

pyramid(10);

module.exports = pyramid;
