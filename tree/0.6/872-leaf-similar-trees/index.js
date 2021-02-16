/*
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Example 1:
  Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
  Output: true
Example 2:
  Input: root1 = [1], root2 = [1]
  Output: true
Example 3:
  Input: root1 = [1], root2 = [2]
  Output: false
Example 4:
  Input: root1 = [1,2], root2 = [2,2]
  Output: true
Example 5:
  Input: root1 = [1,2,3], root2 = [1,3,2]
  Output: false

Constraints:
  The number of nodes in each tree will be in the range [1, 200].
  Both of the given trees will have values in the range [0, 200].
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
  const tree1 = [];
  const tree2 = [];
  inorder(root1, tree1);
  inorder(root2, tree2);
  if (tree1.length !== tree2.length) return false;
  for (let i = 0; i < tree1.length; ++i) {
    if (tree1[i] !== tree2[i]) return false;
  }
  return true;

  function inorder(node, nodesOfTree) {
    if (!node) return;
    inorder(node.left, nodesOfTree);
    if (!node.left && !node.right) {
      nodesOfTree.push(node.val);
    }
    inorder(node.right, nodesOfTree);
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const node9 = new TreeNode(4);
const node8 = new TreeNode(7);
const node7 = new TreeNode(8);
const node6 = new TreeNode(9);
const node5 = new TreeNode(2, node8, node9);
const node4 = new TreeNode(6);
const node3 = new TreeNode(1, node6, node7);
const node2 = new TreeNode(5, node4, node5);
const node1 = new TreeNode(3, node2, node3);

const nodeI = new TreeNode(8);
const nodeH = new TreeNode(9);
const nodeG = new TreeNode(2, nodeH, nodeI);
const nodeF = new TreeNode(4);
const nodeE = new TreeNode(7);
const nodeD = new TreeNode(6);
const nodeC = new TreeNode(1, nodeF, nodeG);
const nodeB = new TreeNode(5, nodeD, nodeE);
const nodeA = new TreeNode(3, nodeB, nodeC);

console.log(leafSimilar(node1, nodeA));
