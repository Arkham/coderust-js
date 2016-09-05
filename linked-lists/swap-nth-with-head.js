// Given the head of a singly linked list and 'N', swap the head
// with Nth node. Return the head of the new linked list.

const { LinkedList } = require('./linked-list');

let swapNthWithHead = function(list, n) {
  if (n <= 0) {
    return list;
  }

  if (n === 1) {
    let first = list.head,
      second = list.head.next;

    first.next = second.next;
    second.next = first;
    list.head = second;

    return list;
  }

  let counter = 0,
    current = list.head,
    previous;

  while (current && current.next && counter < n) {
    previous = current;
    current = current.next;
    counter += 1;
  }

  if (counter === n) {
    let temp = list.head.next;
    list.head.next = current.next;
    previous.next = list.head;
    current.next = temp;
    list.head = current;
  }

  return list;
}

const { assert } = require('../helpers');

assert(swapNthWithHead(new LinkedList([1,2,3,4,5,6]), 0).toString(), '1,2,3,4,5,6');
assert(swapNthWithHead(new LinkedList([1,2,3,4,5,6]), 1).toString(), '2,1,3,4,5,6');
assert(swapNthWithHead(new LinkedList([1,2,3,4,5,6]), 3).toString(), '4,2,3,1,5,6');
assert(swapNthWithHead(new LinkedList([1,2,3,4,5,6]), 5).toString(), '6,2,3,4,5,1');
assert(swapNthWithHead(new LinkedList([1,2,3,4,5,6]), 6).toString(), '1,2,3,4,5,6');
