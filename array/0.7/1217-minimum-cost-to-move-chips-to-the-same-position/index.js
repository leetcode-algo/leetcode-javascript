/*
We have n chips, where the position of the ith chip is position[i].

We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

position[i] + 2 or position[i] - 2 with cost = 0.
position[i] + 1 or position[i] - 1 with cost = 1.

Return the minimum cost needed to move all the chips to the same position.

Example 1:
  Input: position = [1,2,3]
  Output: 1
  Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
  Second step: Move the chip at position 2 to position 1 with cost = 1.
  Total cost is 1.

Example 2:
  Input: position = [2,2,2,3,3]
  Output: 2
  Explanation: We can move the two chips at position  3 to position 2. Each move has cost = 1. The total cost = 2.

Example 3:
  Input: position = [1,1000000000]
  Output: 1

Constraints:
  1 <= position.length <= 100
  1 <= position[i] <= 10^9
*/
/*
 * @param {number[]} position
 * @return {number}
 */
// Solution 1: General
const minCostToMoveChips = function(position) {
  let even = 0;
  for (let i = 0; i < position.length; ++i) {
    if (position[i] % 2 === 0) {
      ++even;
    }
  }
  return Math.min(even, position.length - even);
};
// Solution 2: Reduce
// const minCostToMoveChips = function(position) {
//   const even = position.reduce((even, cur) => (cur % 2 ? even : ++even), 0);
//   return Math.min(even, position.length - even);
// };

console.log(minCostToMoveChips([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]));
