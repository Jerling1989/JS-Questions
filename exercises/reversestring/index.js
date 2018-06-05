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
function arrayReverse(str) {
	const arr = str.split('');
	arr.reverse();
	return arr.join('');
}


function reverse(str) {
	var newStr = '';

	for(var i = str.length - 1; i >= 0; i--) {
		var newStr = newStr + str[i];
	}
	return newStr;
}



module.exports = reverse;
