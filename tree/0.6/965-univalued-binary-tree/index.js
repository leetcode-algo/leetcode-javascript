/*
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

Example 1:
  Input: [1,1,1,1,1,null,1]
  Output: true

Example 2:
  Input: [2,2,2,5,2]
  Output: false

Note:
  The number of nodes in the given tree will be in the range [1, 100].
  Each node's value will be an integer in the range [0, 99].
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
 * @return {boolean}
 */
const isUnivalTree = function(root) {
  const val = root.val;
  return dfs(root);

  function dfs(node) {
    if (!node) return true;
    if (node.val !== val) return false;
    return dfs(node.left) && dfs(node.right);
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const node6 = new TreeNode(1);
const node5 = new TreeNode(1);
const node4 = new TreeNode(1);
const node3 = new TreeNode(1, node6);
const node2 = new TreeNode(1, node4, node5);
const node1 = new TreeNode(1, node2, node3);

console.log(isUnivalTree(node1));

