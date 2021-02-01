/*
Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

Example 1:
  Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
  Output: [[9,1,2],[3,4,5],[6,7,8]]

Example 2:
  Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
  Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

Example 3:
  Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
  Output: [[1,2,3],[4,5,6],[7,8,9]]

Constraints:
  m == grid.length
  n == grid[i].length
  1 <= m <= 50
  1 <= n <= 50
  -1000 <= grid[i][j] <= 1000
  0 <= k <= 100
*/
/*
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
// Solution 1: Simulation
// const shiftGrid = function(grid, k) {
//   while (k--) {
//     let previous = grid[grid.length - 1][grid[0].length - 1];
//     for (let row = 0; row < grid.length; ++row) {
//       for (let col = 0; col < grid[0].length; ++col) {
//         const temp = grid[row][col];
//         grid[row][col] = previous;
//         previous = temp;
//       }
//     }
//   }
//   return grid;
// };
// Solution 2: Convert to 2d array
const shiftGrid = function(grid, k) {
  const arr = grid.flat();
  const len = grid.length * grid[0].length;
  if (k > len) k = k % len;
  const backPart = arr.splice(arr.length - k, k);
  const movedArr = backPart.concat(arr);
  const result = [];
  while (movedArr.length) result.push(movedArr.splice(0, grid[0].length));
  return result;
};

// console.log(shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3));
// console.log(shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23));
console.log(shiftGrid([[-705, 102, -466, 861, 297, -20, -411, 902, 472, 777, 330, -119, -441, 671, -21, -112, -333, 26, -751, 76, 870, 575, -183, -344], [-223, -532, -411, -785, 704, 512, 265, 549, -763, -681, 338, -981, 975, -722, 208, -131, -249, -385, 982, 609, -169, -606, 416, -577], [-461, -350, 652, -397, -871, -8, -638, -311, 689, -827, 647, -925, 342, -520, -813, 972, 9, 845, 374, 899, -928, 720, -279, -915], [-795, -808, -965, -768, 239, 322, -903, -570, 732, -8, -629, 480, -946, 198, 280, 539, -690, -7, -754, 474, -192, -390, 482, 880], [-325, 688, -1000, -648, 244, 894, -770, 756, -104, -37, 649, 968, 984, 160, -373, -219, 944, -969, 473, 702, -343, 271, 93, -402], [-546, -36, 651, -952, -838, -125, -286, -582, -858, 802, 966, -697, 627, 205, 707, -122, -403, -426, 574, -245, -445, 848, -504, 955], [-260, -30, -275, 576, 735, -483, 667, 630, 742, -950, -855, 71, 273, 610, -819, 493, -996, -74, -112, 255, -712, 190, -579, -805]], 13));
