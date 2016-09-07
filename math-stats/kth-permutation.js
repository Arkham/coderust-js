// Given a set of n elements find their kth permutation.

const FACTORIAL_CACHE = new Map();

let factorial = function(n) {
  if (n <= 1) { return 1; }

  if (FACTORIAL_CACHE.has(n)) {
    return FACTORIAL_CACHE.get(n);
  } else {
    let result = n * factorial(n - 1);
    FACTORIAL_CACHE.set(n, result);
    return result;
  }
};

let findKthPermutation = function(collection, k) {
  let result = [];
  let length = collection.length;

  while (length > 0) {
    let bucketSize = factorial(length - 1);
    let bucketIndex = Math.ceil(k / bucketSize) - 1;

    result.push(collection.splice(bucketIndex, 1));

    k = k % bucketSize;
    length--;
  }

  return result;
};

const { assert } = require('../helpers');

assert(findKthPermutation([1,2,3], 1).toString(), '1,2,3');
assert(findKthPermutation([1,2,3], 2).toString(), '1,3,2');
assert(findKthPermutation([1,2,3], 3).toString(), '2,1,3');
assert(findKthPermutation([1,2,3], 4).toString(), '2,3,1');
assert(findKthPermutation([1,2,3], 5).toString(), '3,1,2');
assert(findKthPermutation([1,2,3], 6).toString(), '3,2,1');

assert(findKthPermutation([1,2,3,4], 24).toString(), '4,3,2,1');
