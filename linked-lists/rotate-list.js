// Given head node of a singly linked list and an integer 'n', rotate linked
// list by 'n'.

const { LinkedList } = require('./linked-list');

let findLengthAndLast = function(list) {
  let counter = 0, curr = list.head, previous;

  while (curr) {
    previous = curr;
    curr = curr.next;
    counter++;
  }

  return [counter, previous];
};

let rotateBy = function(list, n) {
  let [listLength, last] = findLengthAndLast(list);

  // find right n for rotation in opposite direction
  n = (n * -1) % listLength;
  if (n === 0) { return list; }
  if (n < 0) { n += listLength; }

  let curr = list.head, previous;

  while (curr && n) {
    previous = curr;
    curr = curr.next;
    n--;
  }

  // stitch up list nicely
  previous.next = null;
  last.next = list.head;
  list.head = curr;

  return list;
};

const { assert } = require('../helpers');

assert(rotateBy(new LinkedList([1,2,3,4]), 0).toString(), '1,2,3,4');
assert(rotateBy(new LinkedList([1,2,3,4]), 1).toString(), '4,1,2,3');
assert(rotateBy(new LinkedList([1,2,3,4]), 2).toString(), '3,4,1,2');
assert(rotateBy(new LinkedList([1,2,3,4]), 3).toString(), '2,3,4,1');
assert(rotateBy(new LinkedList([1,2,3,4]), 4).toString(), '1,2,3,4');
assert(rotateBy(new LinkedList([1,2,3,4]), -1).toString(), '2,3,4,1');
