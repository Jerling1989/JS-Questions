// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// ITERATTIVE SOLUTION
function vowels(str) {
	let count = 0;
	const vowelArray = ['a', 'e', 'i', 'o', 'u'];

	for (let char of str.toLowerCase()) {
		for (let i of vowelArray) {
			if (char === i) {
				count++
			}
		}
	}
	return count;
}


// USING INCLUDES HELPER FUNCTION*
function vowels(str) {
	let count = 0;
	const vowelArray = ['a', 'e', 'i', 'o', 'u'];

	for (let char of str.toLowerCase()) {
		if (vowelArray.includes(char)) {
			count++
		}
	}
	return count;
}


// REGEX SOLUTION
function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

module.exports = vowels;
