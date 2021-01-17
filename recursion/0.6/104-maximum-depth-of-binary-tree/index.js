/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
  Input: root = [3,9,20,null,null,15,7]
  Output: 3

Example 2:
  Input: root = [1,null,2]
  Output: 2

Example 3:
  Input: root = []
  Output: 0

Example 4:
  Input: root = [0]
  Output: 1

Constraints:
  The number of nodes in the tree is in the range [0, 104].
  -100 <= Node.val <= 100
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
const maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

const node5 = new TreeNode(17);
const node4 = new TreeNode(15);
const node3 = new TreeNode(20, node4, node5);
const node2 = new TreeNode(9);
const node1 = new TreeNode(3, node2, node3);

console.log(maxDepth(node1));
