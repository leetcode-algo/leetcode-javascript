/*
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

Example 1:
  Input: words = ["cat","bt","hat","tree"], chars = "atach"
  Output: 6
  Explanation:
    The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:
  Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
  Output: 10
  Explanation:
    The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

Note:
  1 <= words.length <= 1000
  1 <= words[i].length, chars.length <= 100
  All strings contain lowercase English letters only.
*/
/*
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function(words, chars) {
  const count = new Array(26);
  count.fill(0);
  for (const char of chars) {
    ++count[char.charCodeAt(0) - 'a'.charCodeAt(0)];
  }
  let result = 0;
  for (const word of words) {
    const countTmp = count.slice(0);
    let match = true;
    for (const char of word) {
      if (--countTmp[char.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
        match = false;
        break;
      }
    }
    if (match) {
      result += word.length;
    }
  }
  return result;
};

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'));
