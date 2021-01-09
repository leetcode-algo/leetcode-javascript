/*
Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

Example 1:
  Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
  Output: 32

Example 2:
  Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
  Output: 23

Constraints:
  The number of nodes in the tree is in the range [1, 2 * 104].
  1 <= Node.val <= 105
  1 <= low <= high <= 105
  All Node.val are unique.
*/
/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function(root, low, high) {
  let ans = 0;
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    if (node) {
      if (low <= node.val && node.val <= high) {
        ans += node.val;
      }
      if (low < node.val) {
        stack.push(node.left);
      }
      if (node.val < high) {
        stack.push(node.right);
      }
    }
  }
  return ans;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const node6 = new TreeNode(18);
const node5 = new TreeNode(7);
const node4 = new TreeNode(3);
const node3 = new TreeNode(15, null, node6);
const node2 = new TreeNode(5, node4, node5);
const node1 = new TreeNode(10, node2, node3);

console.log(rangeSumBST(node1, 7, 15));
