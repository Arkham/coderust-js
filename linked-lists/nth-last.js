// Given a singly linked list, return nth from last node. Return
// null if 'n' is out-of-bounds.

const { LinkedList } = require('./linked-list');

let findNthFromLast = function(list, n) {
  if (n < 0) {
    return null;
  }

  let distance = 0,
    result = list.head,
    current = list.head;

  // use two pointers which are 'n' steps apart
  while (current && current.next) {
    if (distance < n) {
      // we haven't reached the right distance
      distance += 1;
    } else if (distance === n) {
      // keep moving the first pointer along
      result = result.next;
    }

    current = current.next;
  }

  if (distance < n) {
    // the list wasn't long enough
    return null;
  } else {
    return result.value;
  }
};

const { assert } = require('../helpers');

let list = new LinkedList([1,2,3,4,5,6]);

assert(findNthFromLast(list, 0), 6);
assert(findNthFromLast(list, -1), null);
assert(findNthFromLast(list, 1), 5);
assert(findNthFromLast(list, 5), 1);
assert(findNthFromLast(list, 6), null);
