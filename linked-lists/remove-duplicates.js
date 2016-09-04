// Remove duplicate nodes from linked list of integers while keeping only the
// first occurrence of duplicates.

const { LinkedList } = require('./linked-list');

let removeDuplicates = function(original) {
  let map = new Map();

  original.visit(function(value) {
    map.set(value, value);
  });

  return new LinkedList([...map.keys()]);
};

const { assert } = require('../helpers');

assert(removeDuplicates(new LinkedList([1,1,3,4,5])).toString(), '1,3,4,5');
assert(removeDuplicates(new LinkedList([1,2,3,2,1])).toString(), '1,2,3');
