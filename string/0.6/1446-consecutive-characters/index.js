/*
Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

Return the power of the string.

Example 1:
  Input: s = "leetcode"
  Output: 2
  Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:
  Input: s = "abbcccddddeeeeedcba"
  Output: 5
  Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
  Output: 5

Example 4:
  Input: s = "hooraaaaaaaaaaay"
  Output: 11

Example 5:
  Input: s = "tourist"
  Output: 1

Constraints:
  1 <= s.length <= 500
  s contains only lowercase English letters.
*/
/*
 * @param {string} s
 * @return {number}
 */
const maxPower = function(s) {
  let count = 1;
  let max = 1;
  for (let i = 0; i < s.length - 1; ++i) {
    if (s[i] === s[i + 1]) {
      ++count;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }
  max = Math.max(max, count);
  return max;
};

// console.log(maxPower('abbcccddddeeeeedcba'));
// console.log(maxPower('hooraaaaaaaaaaay'));
console.log(maxPower('cc'));
