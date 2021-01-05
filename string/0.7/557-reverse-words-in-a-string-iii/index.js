/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/
/*
 * @param {string} s
 * @return {string}
 */
// Solution 1: General
const reverseWords = function(s) {
  let word = '';
  let result = '';
  for (const c of s) {
    if (c !== ' ') {
      word = c + word;
    } else {
      result += word + ' ';
      word = '';
    }
  }
  return result + word;
};
// Solution 2: Built-in Functions
// const reverseWords = function(s) {
//   return s.split(' ').map((w) => w.split('').reverse().join('')).join(' ');
// };

console.log(reverseWords('Let\'s take LeetCode contest'));
