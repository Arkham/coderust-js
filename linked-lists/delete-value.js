// Given head of a linked list and a key, delete
// node with this given key from the linked list.

const { LinkedList } = require('./linked-list');

let deleteValue = function(list, value) {
  while (list.head.value === value) {
    list.head = list.head.next;
  }

  let current, previous;
  current = previous = list.head;

  while (current) {
    if (current.value === value) {
      previous.next = current.next;
    }

    previous = current;
    current = current.next;
  }

  return list;
}


const { assert } = require('../helpers');

assert(deleteValue(new LinkedList([1,2,3,4,5]), 3).toString(), '1,2,4,5');
assert(deleteValue(new LinkedList([1,2,3,2,1]), 1).toString(), '2,3,2');
assert(deleteValue(new LinkedList([1,2,3,4,5]), 6).toString(), '1,2,3,4,5');
assert(deleteValue(new LinkedList([1,1,3,4,1]), 1).toString(), '3,4');
