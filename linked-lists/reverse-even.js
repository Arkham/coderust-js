// Given a singly linked list, reverse nodes at even indices.

const { LinkedList } = require('./linked-list');

let reverseEvenNodes = function(list) {
  let head = list.head;

  if (!head || !head.next || !head.next.next || !head.next.next.next) {
    // if linked list is less than 4 elements no change is needed
    return list;
  }

  // split odd and even nodes into two separate lists
  let curr = head;
  let sortedEvenHead;

  while (curr && curr.next) {
    let savedCurr = curr.next.next;

    curr.next.next = null;
    if (!sortedEvenHead) {
      sortedEvenHead = curr.next;
    } else {
      let savedHead = sortedEvenHead;
      sortedEvenHead = curr.next;
      sortedEvenHead.next = savedHead;
    }

    curr.next = savedCurr;
    curr = savedCurr;
  }

  // merge back two lists into one
  let oddCurr = head;
  let evenCurr = sortedEvenHead;

  while (oddCurr && evenCurr) {
    let nextOdd = oddCurr.next;
    let nextEven = evenCurr.next;

    oddCurr.next = evenCurr;
    evenCurr.next = nextOdd;

    oddCurr = nextOdd;
    evenCurr = nextEven;
  }

  return list;
};

const { assert } = require('../helpers');

assert(reverseEvenNodes(new LinkedList([1,2,3,4,5])).toString(), '1,4,3,2,5');
assert(reverseEvenNodes(new LinkedList([1,2,3,4,5,6])).toString(), '1,6,3,4,5,2');
