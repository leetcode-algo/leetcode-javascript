/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

Return that integer.

Example 1:
  Input: arr = [1,2,2,6,6,6,6,7,10]
  Output: 6

Constraints:
  1 <= arr.length <= 10^4
  0 <= arr[i] <= 10^5
*/
/*
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function(arr) {
  const map = new Map();
  for (const n of arr) {
    if (!map.get(n)) map.set(n, 1);
    else {
      map.set(n, map.get(n) + 1);
      if (map.get(n) / arr.length > 0.25) {
        return n;
      }
    }
  }
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
