/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

  Input:

     1
   /   \
  2     3
   \
    5

  Output: ["1->2->5", "1->3"]

  Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  const paths = [];
  preorder(root, '');
  return paths;

  function preorder(node, path) {
    if (!node) return;
    if (!node.left && !node.right) {
      paths.push(path + node.val);
      return;
    }
    path += node.val + '->';
    preorder(node.left, path);
    preorder(node.right, path);
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const node4 = new TreeNode(5);
const node3 = new TreeNode(3);
const node2 = new TreeNode(2, null, node4);
const node1 = new TreeNode(1, node2, node3);

console.log(binaryTreePaths(node1));
