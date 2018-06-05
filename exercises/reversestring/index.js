// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG's


// SOLUTION ONE
function reverse(str) {
	// CREATE NEWSTR VARIABLE
	var newStr = '';
	// LOOP DOWN THE LENGHT OF THE STR 
	for(var i = str.length - 1; i >= 0; i--) {
		var newStr = newStr + str[i];
	}
	// RETURN NEWSTR
	return newStr;
}

module.exports = reverse;
