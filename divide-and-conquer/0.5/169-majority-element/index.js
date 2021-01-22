/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
    Input: nums = [3,2,3]
    Output: 3

Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2

Constraints:
    n == nums.length
    1 <= n <= 5 * 104
    -231 <= nums[i] <= 231 - 1

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/
/*
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1: Hashmap
// const majorityElement = function(nums) {
//   const map = {};
//   map[nums[0]] = 1;
//   let maxKey = nums[0];
//   let maxValue = 1;
//   for (let i = 1; i < nums.length; ++i) {
//     if (!map[nums[i]]) {
//       map[nums[i]] = 1;
//     } else {
//       if (++map[nums[i]] > maxValue) {
//         maxValue = map[nums[i]];
//         maxKey = nums[i];
//       }
//     }
//   }
//   return maxKey;
// };
// Solution 2: Sorting
// const majorityElement = function(nums) {
//   nums.sort();
//   return nums[Math.floor(nums.length / 2)];
// };
// Solution 3: Boyer-Moore Voting Algorithm
const majorityElement = function(nums) {
  let candidate = null;
  let count = 0;
  for (const n of nums) {
    if (count === 0) candidate = n;
    count += (n === candidate) ? 1 : -1;
  }
  return candidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
