/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Example 1:
  Input: root = [1,null,3,2,4,null,5,6]
  Output: 3

Example 2:
  Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
  Output: 5

Constraints:
  The depth of the n-ary tree is less than or equal to 1000.
  The total number of nodes is between [0, 104].
*/
/*
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/*
 * @param {Node} root
 * @return {number}
 */
const maxDepth = function(root) {
  if (!root) return 0;
  let depth = 0;
  for (const child of root.children) {
    depth = Math.max(depth, maxDepth(child));
  }
  return depth + 1;
};

function Node(val, children) {
  this.val = val;
  this.children = children;
}

const node6 = new Node(6, []);
const node5 = new Node(5, []);
const node4 = new Node(4, []);
const node3 = new Node(2, []);
const node2 = new Node(3, [node5, node6]);
const node1 = new Node(1, [node2, node3, node4]);

console.log(maxDepth(node1));
