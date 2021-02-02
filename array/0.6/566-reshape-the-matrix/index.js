/*

*/
/*
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// Solution 1: 2d to 1d array
// const matrixReshape = function(nums, r, c) {
//   if (r * c !== nums.length * nums[0].length) return nums;
//   const result = [];
//   const arr = nums.flat();
//   while (arr.length) result.push(arr.splice(0, c));
//   return result;
// };
// Solution 2: Without extra space
const matrixReshape = function(nums, r, c) {
  if (r * c !== nums.length * nums[0].length) return nums;
  const result = new Array(r);
  for (let i = 0; i < result.length; ++i) {
    result[i] = new Array(c);
  }
  let rows = 0;
  let cols = 0;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums[0].length; ++j) {
      result[rows][cols] = nums[i][j];
      ++cols;
      if (cols === c) {
        ++rows;
        cols = 0;
      }
    }
  }
  return result;
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
