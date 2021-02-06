/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
  Input: text = "nlaebolko"
  Output: 1

Example 2:
  Input: text = "loonbalxballpoon"
  Output: 2

Example 3:
  Input: text = "leetcode"
  Output: 0

Constraints:
  1 <= text.length <= 10^4
  text consists of lower case English letters only.
*/
/*
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function(text) {
  const chars = new Array(26).fill(0);
  for (let i = 0; i < text.length; ++i) {
    ++chars[text[i].charCodeAt(0) - 'a'.charCodeAt()];
  }
  let min = chars[1];
  min = Math.min(min, chars[0]);
  min = Math.min(min, Math.floor(chars[11] / 2));
  min = Math.min(min, Math.floor(chars[14] / 2));
  min = Math.min(min, chars[13]);
  return min;
};

// console.log(maxNumberOfBalloons('nlaebolko'));
// console.log(maxNumberOfBalloons('loonbalxballpoon'));
console.log(maxNumberOfBalloons('balon'));
