/*
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

Example 1:
  Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
  Output: 2
  Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Example 2:
  Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
  Output: 7
  Explanation: All strings are consistent.

Example 3:
  Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
  Output: 4
  Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

Constraints:
  1 <= words.length <= 104
  1 <= allowed.length <= 26
  1 <= words[i].length <= 10
  The characters in allowed are distinct.
  words[i] and allowed contain only lowercase English letters.
*/
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// Solution 1: Regex
// const countConsistentStrings = function(allowed, words) {
//   let count = 0;
//   const re = new RegExp(`[${allowed}]`, 'g');
//   for (let word of words) {
//     word = word.replace(re, '');
//     if (word.length === 0) ++count;
//   }
//   return count;
// };

// Solution 2: Set
const countConsistentStrings = function(allowed, words) {
  let count = 0;
  const allowedSet = new Set(allowed);
  for (const word of words) {
    for (const char of word) {
      if (!allowedSet.has(char)) {
        ++count;
        break;
      }
    }
  }
  return words.length - count;
};

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']));
console.log(countConsistentStrings('fstqyienx', ['n', 'eeitfns', 'eqqqsfs', 'i', 'feniqis', 'lhoa', 'yqyitei', 'sqtn', 'kug', 'z', 'neqqis']));
