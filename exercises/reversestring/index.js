// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG's


// SOLUTION ONE
function firstReverse(str) {
	return str.split('').reverse().join('');
}

// SOLUTION TWO
function reverse(str) {
	let newStr = '';
	for(let character of str) {
		newStr = character + newStr;
	}
	return newStr;
}


module.exports = reverse;














