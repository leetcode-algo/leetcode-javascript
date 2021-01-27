/*

*/
/*
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; ++i) {
    const diff = Math.abs(arr[i + 1] - arr[i]);
    if (min > diff) min = diff;
  }
  const result = [];
  for (let i = 0; i < arr.length - 1; ++i) {
    const diff = Math.abs(arr[i + 1] - arr[i]);
    if (diff === min) result.push([arr[i], arr[i + 1]]);
  }
  return result;
};

// console.log(minimumAbsDifference([4, 2, 1, 3]));
// console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
console.log(minimumAbsDifference([-25, -51, -29, -23, 57, -18]));
