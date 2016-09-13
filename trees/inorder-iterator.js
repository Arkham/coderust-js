// We are given root node of a binary tree and we have to
// write an iterator that takes in this root and iterates
// through the nodes of binary tree in an inorder way. The
// expectation is to write two critical methods of any
// iterator: hasNext() and getNext()

const { BinaryTree } = require('./binary-tree');

class InorderIterator {
  constructor(tree) {
    this.stack = [];
    let current = tree.root;

    while (current) {
      this.stack.push(current);
      current = current.left;
    }
  }

  hasNext() {
    return this.stack.length !== 0;
  }

  getNext() {
    if (this.stack.length === 0) {
      return null;
    }

    let result = this.stack.pop();
    let current = result.right;

    while (current) {
      this.stack.push(current);
      current = current.left;
    }

    return result.value;
  }
}

const { assert } = require('../helpers');

let tree = new BinaryTree([
  100,
  [50, 25, 75],
  [200, 125, 300]
]);
let iterator = new InorderIterator(tree);

assert(iterator.hasNext(), true);
assert(iterator.getNext(), 25);
assert(iterator.getNext(), 50);
assert(iterator.getNext(), 75);
assert(iterator.getNext(), 100);
assert(iterator.getNext(), 125);
assert(iterator.getNext(), 200);
assert(iterator.getNext(), 300);
assert(iterator.hasNext(), false);
