// Given a singly linked list and an integer 'k', reverse every 'k' elements.
// If k <= 1, then input list is unchanged. If k >= n (n is the length of
// linked list), then reverse the whole linked list.

const { LinkedList } = require('./linked-list');

let reverseKElements = function(list, n) {
  if (n <= 1) {
    return list;
  }

  let curr = list.head.next;
  let newHead = list.head;
  // break off first element from list
  list.head.next = null;

  while (curr && --n) {
    let savedNext = curr.next;

    curr.next = newHead;
    newHead = curr;

    curr = savedNext;
  }

  if (curr) {
    list.head.next = curr;
  }

  list.head = newHead;

  return list;
};

const { assert } = require('../helpers');

assert(reverseKElements(new LinkedList([1,2,3,4,5]), 0).toString(), '1,2,3,4,5');
assert(reverseKElements(new LinkedList([1,2,3,4,5]), 2).toString(), '2,1,3,4,5');
assert(reverseKElements(new LinkedList([1,2,3,4,5]), 4).toString(), '4,3,2,1,5');
assert(reverseKElements(new LinkedList([1,2,3,4,5]), 6).toString(), '5,4,3,2,1');
