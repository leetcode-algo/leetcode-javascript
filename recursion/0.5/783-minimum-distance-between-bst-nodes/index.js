/*
Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

Example 1:
  Input: root = [4,2,6,1,3]
  Output: 1

Example 2:
  Input: root = [1,0,48,null,null,12,49]
  Output: 1

Constraints:
  The number of nodes in the tree is in the range [2, 100].
  0 <= Node.val <= 105
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
const minDiffInBST = function(root) {
  const values = [];
  inorder(root);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < values.length - 1; ++i) {
    min = Math.min(min, values[i + 1] - values[i]);
  }
  return min;

  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    values.push(node.val);
    inorder(node.right);
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const node5 = new TreeNode(3);
const node4 = new TreeNode(1);
const node3 = new TreeNode(6);
const node2 = new TreeNode(2, node4, node5);
const node1 = new TreeNode(4, node2, node3);

console.log(minDiffInBST(node1));
