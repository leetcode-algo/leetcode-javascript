/*
Reverse a singly linked list.

Example:
  Input: 1->2->3->4->5->NULL
  Output: 5->4->3->2->1->NULL

Follow up:
  A linked list can be reversed either iteratively or recursively. Could you implement both?
*/
/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let prev = null;
  while (head !== null) {
    const nextnode = head.next;
    head.next = prev;
    prev = head;
    head = nextnode;
  }
  return prev;
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

console.log(reverseList(node1));
