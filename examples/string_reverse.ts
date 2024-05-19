/**
 * Given a string, return true if the string is a palindrome or false if it is not.
 *
 * A palindrome is a word, phrase, number, or other sequence of characters which
 * reads the same backward or forward. This includes capital letters, 
 * punctuation, and word dividers.
 *
 * Examples:
 *   - racecar is a palindrome
 *   - racecar -> racecar
 *   - aceca -> aceca
 *   - cec -> cec
 *   - e -> e
 *   - '' -> ''
 *   - '' === '' -> true
 */
export default function stringReverse(string: string): boolean {
    // 1. What is the base case?
    if (string === '' || string.length === 1) return true;

    // 2. What is the least amount of work we can do for each iteration?
    if (string.charAt(0) === string.charAt(string.length - 1)) {
        return stringReverse(string.substring(1, string.length - 1));
    }

    return false;
}

// ------ Example tests for task 1: ------
// console.log('Input: racecar; output:', stringReverse('racecar') === true);
// console.log('Input: 1122332211; output:', stringReverse('1122332211') === true);
// console.log('Input: Word; output:', stringReverse('Word') === false);
// console.log('Input: something; output:', stringReverse('something') === false);
