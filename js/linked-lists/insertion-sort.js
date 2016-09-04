// Given head pointer of a linked list, sort the linked list (in ascending
// order) using insertion sort and return new head pointer of the sorted linked
// list.

const { LinkedList, Node } = require('./linked-list');

let insertValue = function(list, value) {
  let node = new Node(value);

  if (!list.head || value <= list.head.value) {
    node.next = list.head;
    list.head = node;
  } else {
    let current, previous;
    current = previous = list.head;

    while (current && current.value < value) {
      previous = current;
      current = current.next;
    }

    previous.next = node;
    node.next = current;
  }
};

let insertionSort = function(original) {
  let result = new LinkedList();

  original.visit(function(value) {
    insertValue(result, value);
  });

  return result;
};

const { assert } = require('../helpers');

assert(insertionSort(new LinkedList([29,23,82,11])).toString(), '11,23,29,82');
assert(insertionSort(new LinkedList([5,4,3,2,1])).toString(), '1,2,3,4,5');
assert(insertionSort(new LinkedList([5,4,3,4,1])).toString(), '1,3,4,4,5');
