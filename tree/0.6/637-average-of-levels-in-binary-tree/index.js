/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
  Input:
        3
       / \
      9  20
        /  \
       15   7
  Output: [3, 14.5, 11]
  Explanation:
    The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
    Note:
    The range of node's value is in the range of 32-bit signed integer.
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
 * @return {number[]}
 */
const averageOfLevels = function(root) {
  const nodesOfLevels = [[]];
  getNodesByLevel(root, 0);
  for (let i = 0; i < nodesOfLevels.length; ++i) {
    let sum = 0;
    for (let j = 0; j < nodesOfLevels[i].length; ++j) {
      sum += nodesOfLevels[i][j];
    }
    nodesOfLevels[i] = sum / nodesOfLevels[i].length;
  }
  return nodesOfLevels;

  function getNodesByLevel(node, level) {
    if (!node) return;
    if (level >= nodesOfLevels.length) {
      const nodes = [];
      nodesOfLevels.push(nodes);
    }
    nodesOfLevels[level].push(node.val);
    getNodesByLevel(node.left, level + 1);
    getNodesByLevel(node.right, level + 1);
  }
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const node5 = new TreeNode(7);
const node4 = new TreeNode(15);
const node3 = new TreeNode(20, node4, node5);
const node2 = new TreeNode(9);
const node1 = new TreeNode(3, node2, node3);

console.log(averageOfLevels(node1));
