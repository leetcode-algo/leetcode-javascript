/*
Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

Example 1:
  Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
  Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

Example 2:
  Input: root = [5,1,7]
  Output: [1,null,5,null,7]

Constraints:
  The number of nodes in the given tree will be in the range [1, 100].
  0 <= Node.val <= 1000
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
const increasingBST = function(root) {
  if (root === null) return root;

  const list = [];

  inOrder(root);

  for (let i = 0; i < list.length; ++i) {
    list[i].left = null;
    list[i].right = list[i + 1];
  }

  list[list.length - 1].left = null;
  list[list.length - 1].right = null;

  return list[0];

  function inOrder(node) {
    if (node === null) return;
    inOrder(node.left);
    list.push(node);
    inOrder(node.right);
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const node3 = new TreeNode(7);
const node2 = new TreeNode(1);
const node1 = new TreeNode(5, node2, node3);

console.log(increasingBST(node1));
