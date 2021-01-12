/*
You are given the root of a binary tree where each node has a value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.

Example 1:
  Input: root = [1,0,1,0,1,0,1]
  Output: 22
  Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

Example 2:
  Input: root = [0]
  Output: 0

Example 3:
  Input: root = [1]
  Output: 1

Example 4:
  Input: root = [1,1]
  Output: 3

Constraints:
  The number of nodes in the tree is in the range [1, 1000].
  Node.val is 0 or 1.
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
 * @return {number}
 */
const sumRootToLeaf = function(root) {
  let result = 0;
  preOrder(root, 0);
  return result;

  function preOrder(root, currentNumber) {
    if (!root) return;
    currentNumber = (currentNumber << 1) | root.val;
    if (!root.left && !root.right) {
      result += currentNumber;
    }
    preOrder(root.left, currentNumber);
    preOrder(root.right, currentNumber);
  }
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

const node7 = new TreeNode(1);
const node6 = new TreeNode(0);
const node5 = new TreeNode(1);
const node4 = new TreeNode(0);
const node3 = new TreeNode(1, node6, node7);
const node2 = new TreeNode(0, node4, node5);
const node1 = new TreeNode(1, node2, node3);

console.log(sumRootToLeaf(node1));
