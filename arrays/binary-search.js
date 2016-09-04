// Given a sorted array of integers, return the index of the given key.
// Return -1 if not found.

let _binarySearch = function(array, needle, start, end) {
  console.log('needle', needle, 'start', start, 'end', end,
    'window', array.slice(start, end + 1).toString());

  if (start > end) {
    return -1;
  }

  let pivotIndex = start + Math.floor((end - start)/2);
  let pivot = array[pivotIndex];

  console.log('pivotIndex', pivotIndex, 'pivot', pivot);

  if (needle === pivot) {
    return pivotIndex;
  } else if (needle < pivot) {
    return _binarySearch(array, needle, start, pivotIndex - 1);
  } else {
    return _binarySearch(array, needle, pivotIndex + 1, end);
  }
};

let binarySearch = function(array, needle) {
  return _binarySearch(array, needle, 0, array.length - 1);
};

let { assert } = require('../helpers');

let testData = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162,
  176, 188, 199, 200, 210, 222];

assert(binarySearch(testData, 47), 3);
assert(binarySearch(testData, 222), 19);
assert(binarySearch(testData, -1), -1);
assert(binarySearch(testData, 666), -1);
