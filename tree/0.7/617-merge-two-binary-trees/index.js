/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
  Input:
      Tree 1                     Tree 2
            1                         2
           / \                       / \
          3   2                     1   3
         /                           \   \
        5                             4   7
  Output:
  Merged tree:
           3
          / \
         4   5
        / \   \
       5   4   7

Note: The merging process must start from the root nodes of both trees.
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = function(t1, t2) {
  if (t1 === null) return t2;
  const stack = [];
  stack.push([t1, t2]);
  while (stack.length) {
    const nodes = stack.pop();
    if (nodes[0] === null || nodes[1] === null) continue;
    nodes[0].val += nodes[1].val;
    if (nodes[0].left === null) {
      nodes[0].left = nodes[1].left;
    } else {
      stack.push([nodes[0].left, nodes[1].left]);
    }
    if (nodes[0].right === null) {
      nodes[0].right = nodes[1].right;
    } else {
      stack.push([nodes[0].right, nodes[1].right]);
    }
  }
  return t1;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const node4 = new TreeNode(5);
const node3 = new TreeNode(2);
const node2 = new TreeNode(3, node4);
const node1 = new TreeNode(1, node2, node3);

const nodeE = new TreeNode(7);
const nodeD = new TreeNode(4);
const nodeC = new TreeNode(3, null, nodeE);
const nodeB = new TreeNode(1, null, nodeD);
const nodeA = new TreeNode(2, nodeB, nodeC);

console.log(mergeTrees(node1, nodeA));

