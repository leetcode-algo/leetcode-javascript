/*
Given a sentence that consists of some words separated by a single space, and a searchWord.

You have to check if searchWord is a prefix of any word in sentence.

Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).

If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

A prefix of a string S is any leading contiguous substring of S.

Example 1:
  Input: sentence = "i love eating burger", searchWord = "burg"
  Output: 4
  Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

Example 2:
  Input: sentence = "this problem is an easy problem", searchWord = "pro"
  Output: 2
  Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

Example 3:
  Input: sentence = "i am tired", searchWord = "you"
  Output: -1
  Explanation: "you" is not a prefix of any word in the sentence.

Example 4:
  Input: sentence = "i use triple pillow", searchWord = "pill"
  Output: 4

Example 5:
  Input: sentence = "hello from the other side", searchWord = "they"
  Output: -1

Constraints:
  1 <= sentence.length <= 100
  1 <= searchWord.length <= 10
  sentence consists of lowercase English letters and spaces.
  searchWord consists of lowercase English letters.
*/
/*
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
// Solution 1: General
// const isPrefixOfWord = function(sentence, searchWord) {
//   let word = '';
//   let count = 1;
//   for (let i = 0; i < sentence.length; ++i) {
//     if (sentence[i] === ' ') {
//       if (match(word, searchWord)) {
//         return count;
//       }
//       word = '';
//       ++count;
//     } else {
//       word += sentence[i];
//     }
//   }
//   if (match(word, searchWord)) {
//     return count;
//   }
//
//   return -1;
//
//   function match(word, prefix) {
//     for (let i = 0; i < prefix.length; ++i) {
//       if (word[i] !== prefix[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };
// Solution 2: JS way
const isPrefixOfWord = function(sentence, searchWord) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; ++i) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};

// console.log(isPrefixOfWord('this problem is an easy problem', 'pro'));
console.log(isPrefixOfWord('i love eating burger', 'burg'));
// console.log(isPrefixOfWord('i am tired', 'you'));
// console.log(isPrefixOfWord('i use triple pillow', 'pill'));
