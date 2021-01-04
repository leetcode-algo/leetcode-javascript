/*
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

Example 1:
  Input: [4,2,5,7]
  Output: [4,5,2,7]
  Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Note:
  2 <= A.length <= 20000
  A.length % 2 == 0
  0 <= A[i] <= 1000
*/
/*
 * @param {number[]} A
 * @return {number[]}
 */
// Solution 1: Two Pass
// const sortArrayByParityII = function(A) {
//   let evenIndex = 0;
//   let oddIndex = 1;
//   const result = [];
//   for (let i = 0; i < A.length; ++i) {
//     if (A[i] % 2 === 0) {
//       result[evenIndex] = A[i];
//       evenIndex += 2;
//     } else {
//       result[oddIndex] = A[i];
//       oddIndex += 2;
//     }
//   }
//   return result;
// };
// Solution 2: Read / Write Heads without additional array
const sortArrayByParityII = function(A) {
  let oddIndex = 1;
  for (let evenIndex = 0; evenIndex < A.length; evenIndex += 2) {
    if (A[evenIndex] % 2 !== 0) {
      while (A[oddIndex] % 2 === 1) {
        oddIndex += 2;
      }
      [A[evenIndex], A[oddIndex]] = [A[oddIndex], A[evenIndex]];
    }
  }
  return A;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
