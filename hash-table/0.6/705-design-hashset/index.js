/*
Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

Example 1:
  Input
  ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
  [[], [1], [2], [1], [3], [2], [2], [2], [2]]
  Output
  [null, null, null, true, false, null, true, null, false]

  Explanation
  MyHashSet myHashSet = new MyHashSet();
  myHashSet.add(1);      // set = [1]
  myHashSet.add(2);      // set = [1, 2]
  myHashSet.contains(1); // return True
  myHashSet.contains(3); // return False, (not found)
  myHashSet.add(2);      // set = [1, 2]
  myHashSet.contains(2); // return True
  myHashSet.remove(2);   // set = [1]
  myHashSet.contains(2); // return False, (already removed)

Constraints:
  0 <= key <= 106
  At most 104 calls will be made to add, remove, and contains.
*/
/*
 * Initialize your data structure here.
 */
const MyHashSet = function() {
  this.set = [];
};

/*
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  if (this.contains(key)) return;
  this.set.push(key);
};

/*
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  for (let i = 0; i < this.set.length; ++i) {
    if (key === this.set[i]) {
      this.set.splice(i, 1);
      return;
    }
  }
};

/*
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  for (let i = 0; i < this.set.length; ++i) {
    if (key === this.set[i]) {
      return true;
    }
  }
  return false;
};

/*
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
myHashSet = new MyHashSet();
myHashSet.add(1); // set = [1]
console.log(myHashSet.set);
myHashSet.add(2); // set = [1, 2]
console.log(myHashSet.set);
myHashSet.contains(1); // return True
console.log(myHashSet.contains(1));
myHashSet.contains(3); // return False, (not found)
console.log(myHashSet.contains(3));
myHashSet.add(2); // set = [1, 2]
console.log(myHashSet.set);
myHashSet.contains(2); // return True
console.log(myHashSet.contains(2));
myHashSet.remove(2); // set = [1]
console.log(myHashSet.set);
myHashSet.contains(2); // return False, (already removed)
console.log(myHashSet.contains(2));
