/*

*/
/*
 * @param {number[]} arr
 * @return {number}
 */
const trimMean = function(arr) {
  arr.sort((a, b) => a - b);
  let start = arr.length * 0.05;
  const end = arr.length - arr.length * 0.05 - 1;
  let sum = 0;
  for (; start <= end; ++start) {
    sum += arr[start];
  }
  return sum / (arr.length * 0.9);
};

console.log(trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]));
