/*
Invert a binary tree.

Example:
  Input:
         4
       /   \
      2     7
     / \   / \
    1   3 6   9

  Output:
         4
       /   \
      7     2
     / \   / \
    9   6 3   1

Trivia:
  This problem was inspired by this original tweet by Max Howell:

  Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
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
 * @return {TreeNode}
 */
const invertTree = function(root) {
  swap(root);
  return root;

  function swap(node) {
    if (!node) return;
    [node.left, node.right] = [node.right, node.left];
    invertTree(node.left);
    invertTree(node.right);
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const node7 = new TreeNode(9);
const node6 = new TreeNode(6);
const node5 = new TreeNode(3);
const node4 = new TreeNode(1);
const node3 = new TreeNode(7, node6, node7);
const node2 = new TreeNode(2, node4, node5);
const node1 = new TreeNode(4, node2, node3);

console.log(invertTree(node1));
