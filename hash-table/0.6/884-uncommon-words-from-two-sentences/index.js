/*

*/
/*
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function(A, B) {
  const result = [];
  const map = new Map();
  A = A.split(' ');
  B = B.split(' ');
  for (let i = 0; i < A.length; ++i) {
    if (!map.get(A[i])) map.set(A[i], 1);
    else map.set(A[i], map.get(A[i]) + 1);
  }
  for (let i = 0; i < B.length; ++i) {
    if (!map.get(B[i])) map.set(B[i], 1);
    else map.set(B[i], map.get(B[i]) + 1);
  }
  for (const [key, value] of map) {
    if (value === 1) result.push(key);
  }
  return result;
};

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
