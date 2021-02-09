/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:
  Input: l1 = [1,2,4], l2 = [1,3,4]
  Output: [1,1,2,3,4,4]

Example 2:
  Input: l1 = [], l2 = []
  Output: []

Example 3:
  Input: l1 = [], l2 = [0]
  Output: [0]

Constraints:
  The number of nodes in both lists is in the range [0, 50].
  -100 <= Node.val <= 100
  Both l1 and l2 are sorted in non-decreasing order.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  let cur = new ListNode(0);
  const result = cur;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return result.next;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const node3 = new ListNode(4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const nodeC = new ListNode(4);
const nodeB = new ListNode(3, nodeC);
const nodeA = new ListNode(1, nodeB);

console.log(mergeTwoLists(node1, nodeA));

