/*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Example 1:
  Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
  Output: 8
  Explanation: There are 8 negatives number in the matrix.

Example 2:
  Input: grid = [[3,2],[1,0]]
  Output: 0

Example 3:
  Input: grid = [[1,-1],[-1,-1]]
  Output: 3

Example 4:
  Input: grid = [[-1]]
  Output: 1

Constraints:
  m == grid.length
  n == grid[i].length
  1 <= m, n <= 100
  -100 <= grid[i][j] <= 100
*/
/*
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
  let sum = 0;
  for (const arr of grid) {
    sum += binarySearch(arr);
  }
  return sum;

  function binarySearch(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      mid = Math.floor(start + end);
      if (arr[mid] < 0) end = mid - 1;
      else start = mid + 1;
    }
    return arr.length - start;
  }
};

console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]));
