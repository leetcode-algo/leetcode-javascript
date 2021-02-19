/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
  Input: s = "anagram", t = "nagaram"
  Output: true

Example 2:
  Input: s = "rat", t = "car"
  Output: false

Note:
  You may assume the string contains only lowercase alphabets.

Follow up:
  What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/
/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution 1: Sort
// const isAnagram = function(s, t) {
//   if (s.length !== t.length) return false;
//   return s.split('').sort().join('') === t.split('').sort().join('');
// };
// Solution 2: Hash table
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const counter = new Array(26).fill(0);
  for (let i = 0; i < s.length; ++i) {
    ++counter[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
    --counter[t[i].charCodeAt(0) - 'a'.charCodeAt(0)];
  }
  for (let i = 0; i < counter.length; ++i) {
    if (counter[i]) return false;
  }
  return true;
};

// console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
