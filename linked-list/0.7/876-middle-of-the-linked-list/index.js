/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:
  Input: [1,2,3,4,5]
  Output: Node 3 from this list (Serialization: [3,4,5])
  The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
  Note that we returned a ListNode object ans, such that:
  ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

Example 2:
  Input: [1,2,3,4,5,6]
  Output: Node 4 from this list (Serialization: [4,5,6])
  Since the list has two middle nodes with values 3 and 4, we return the second one.

Note:
  The number of nodes in the given list will be between 1 and 100.
*/
/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {number}
 */
// Solution 1: General
// const middleNode = function(head) {
//   let tmp = head;
//   let count = 0;
//   while (tmp) {
//     ++count;
//     tmp = tmp.next;
//   }
//   tmp = head;
//   const n = Math.floor(count / 2);
//   for (let i = 0; i < n; ++i) {
//     tmp = tmp.next;
//   }
//   return tmp;
// };
// Solution 2: Fast and slow pointer
const middleNode = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(middleNode(node1));
