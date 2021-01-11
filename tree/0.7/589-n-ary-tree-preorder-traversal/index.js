/*
Given an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Follow up:
  Recursive solution is trivial, could you do it iteratively?

Example 1:
  Input: root = [1,null,3,2,4,null,5,6]
  Output: [1,3,5,6,2,4]

Example 2:
  Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
  Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

Constraints:
  The height of the n-ary tree is less than or equal to 1000
  The total number of nodes is between [0, 10^4]
*/
/*
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/*
 * @param {Node} root
 * @return {number[]}
 */
const preorder = function(root) {
  const result = [];

  preOrderTraverse(root);

  return result;

  function preOrderTraverse(root) {
    if (root === null) return root;
    result.push(root.val);
    for (const node of root.children) {
      preOrderTraverse(node);
    }
  }
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

console.log(preorder(node1));
