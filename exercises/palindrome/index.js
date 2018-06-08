// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// SOLUTION ONE (SHORT)
function palindrome(str) {
	const newStr = str.split('').reverse().join('');
	return newStr === str;
}
// SOLUTION TWO (LONG)
function palindrome(str) {
	let newStr = '';

	for(let character of str) {
		newStr = character + newStr;
	}
	return newStr === str;
}


module.exports = palindrome;
