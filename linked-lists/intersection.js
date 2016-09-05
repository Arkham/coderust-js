// Given head nodes of two linked lists that may or may not intersect, find out
// if they intersect and return the point of intersection; return null
// otherwise.

const { LinkedList, Node } = require('./linked-list');

let findLength = function(list) {
  let result = 0;

  list.visit(function() {
    result += 1;
  });

  return result;
};

let findIntersection = function(first, second) {
  let firstLength = findLength(first);
  let secondLength = findLength(second);

  let firstCurrent = first.head;
  let secondCurrent = second.head;

  if (firstLength > secondLength) {
    let diff = firstLength - secondLength;

    while (diff--) {
      firstCurrent = firstCurrent.next;
    }
  } else if (firstLength < secondLength) {
    let diff = secondLength - firstLength;

    while (diff--) {
      secondCurrent = secondCurrent.next;
    }
  }

  while (firstCurrent && secondCurrent) {
    if (firstCurrent === secondCurrent) {
      return firstCurrent;
    }

    firstCurrent = firstCurrent.next;
    secondCurrent = secondCurrent.next;
  }

  return null;
};

const { assert } = require('../helpers');

let pushNode = function(list, node) {
  let current = list.head;

  while (current && current.next) {
    current = current.next;
  }

  current.next = node;
  return list;
}

let node = new Node(666);
let first = new LinkedList([1,2,3]);
let second = new LinkedList([4,5,6,7]);

assert(findIntersection(first, second), null);
assert(findIntersection(pushNode(first, node), pushNode(second, node)), node);
