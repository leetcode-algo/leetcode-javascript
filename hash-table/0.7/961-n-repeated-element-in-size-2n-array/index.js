/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Example 1:
  Input: [1,2,3,3]
  Output: 3

Example 2:
  Input: [2,1,2,5,3,2]
  Output: 2

Example 3:
  Input: [5,1,5,2,5,3,5,4]
  Output: 5

Note:
  4 <= A.length <= 10000
  0 <= A[i] < 10000
  A.length is even
*/
/*
 * @param {number[]} A
 * @return {number}
 */
// Solution 1: Hash table
// const repeatedNTimes = function(A) {
//   const map = {};
//   for (let i = 0; i < A.length; ++i) {
//     if (map[A[i]] === undefined) {
//       map[A[i]] = 1;
//     } else {
//       ++map[A[i]];
//     }
//   }
//   for (const key in map) {
//     if (map[key] > 1) return key;
//   }
// };
// Solution 2: Set
const repeatedNTimes = function(A) {
  const set = new Set();
  for (let i = 0; i < A.length; ++i) {
    if (set.has(A[i])) return A[i];
    set.add(A[i]);
  }
};

console.log(repeatedNTimes([1, 2, 3, 3]));
