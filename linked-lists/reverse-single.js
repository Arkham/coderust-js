// Given the pointer/reference to the head of a singly linked list, reverse it
// and return the pointer/reference to the head of reversed linked list.

const { LinkedList, Node } = require('./linked-list');

let reverseSingle = function(original) {
  let result = new LinkedList();

  original.visit(function(value) {
    let current = new Node(value);
    if (result.head) { current.next = result.head; }
    result.head = current;
  });

  return result;
};

const { assert } = require('../helpers');

assert(reverseSingle(new LinkedList([1,2,3,4,5])).toString(), '5,4,3,2,1');
assert(reverseSingle(new LinkedList([])).toString(), '');
