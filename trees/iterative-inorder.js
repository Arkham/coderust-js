const { BinaryTree } = require('./binary-tree');

let iterativeInorder = function(tree, callback) {
  let stack = [];
  let current = tree.root;

  while (current) {
    stack.push(current);
    current = current.left;
  }

  while (stack.length !== 0) {
    let result = stack.pop();
    let pointer = result.right;

    while (pointer) {
      stack.push(pointer);
      pointer = pointer.left;
    }

    callback(result.value);
  }
}

const { assert } = require('../helpers');

let tree = new BinaryTree([
  100,
  [50, 25, 75],
  [200, 125, 300]
]);

let result = [];
iterativeInorder(tree, function(value) {
  result.push(value);
});

assert(result.toString(), '25,50,75,100,125,200,300');
