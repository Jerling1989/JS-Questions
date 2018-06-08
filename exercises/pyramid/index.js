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
	for (let i = 1; i <= n; i++) {
		let hash = '#'.repeat(2 * i - 1);
		let spaces = ' '.repeat(n - i);
		console.log(spaces + hash + spaces);
	}
}



pyramid(10);

module.exports = pyramid;
