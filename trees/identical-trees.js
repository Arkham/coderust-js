// Given roots of two binary trees, determine if these
// trees are identical or not.

const { BinaryTree } = require('./binary-tree');

let recursiveEqual = function(first, second) {
  if (!first && !second) {
    return true;
  }

  if (first && second) {
    return first.value === second.value &&
      recursiveEqual(first.left, second.left) &&
      recursiveEqual(first.right, second.right);
  }

  return false;
};

let isEqual = function(first, second) {
  return recursiveEqual(first.root, second.root);
};

const { assert } = require('../helpers');

let first = new BinaryTree([
  100,
  [50, 25, null],
  [200, 125, 350]
]);

let second = new BinaryTree([
  100,
  [50, 25, null],
  [200, 125, 350]
]);

let third = new BinaryTree([
  100,
  [50, null, 25],
  [200, 125, 350]
]);

let fourth = new BinaryTree([
  90,
  [50, 25, null],
  [200, 125, 350]
]);

assert(isEqual(first, second), true);
assert(isEqual(first, third), false);
assert(isEqual(first, fourth), false);
