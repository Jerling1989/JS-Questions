// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG's


// SOLUTION ONE
// CONVERT STR INTO ARRAY
// REVERSE ARRAY
// CONVERT ARRAY BACK TO STRING
function firstReverse(str) {
	return str.split('').reverse().join('');
}

// SOLUTION TWO
// CREATE AN EMPTY STRING VARIABLE
// ITERATE THROUGH STR ARGUMENT WITH FOR LOOP
// FOR EACH ITERATION TAKE CHARACTER AND ADD TO NEW STRING
// RETURN THE STRING VARIABLE WHEN THE FOR LOOP IS DONE
function secondReverse(str) {
	let newStr = '';
	for(let character of str) {
		newStr = character + newStr;
	}
	return newStr;
}

// SOLUTION THREE 
// USING THE REDUCE HELPER FUNCTION
// LEAST LIKELY OF THE THREE TO USE IN INTERVIEW
function reverse(str) {
	return str.split('').reduce((rev, char) => char + rev, '');
}



module.exports = reverse;
