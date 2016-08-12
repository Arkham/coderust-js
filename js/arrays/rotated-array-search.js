// Search a given number in a sorted array that has been rotated by some
// arbitrary number.

function rotatedArraySearch(array, needle) {
  return _rotatedArraySearch(array, needle, 0, (array.length - 1));
};

function _rotatedArraySearch(array, needle, start, end) {
  console.log('needle', needle, 'start', start, 'end', end,
    'window', array.slice(start, end + 1).toString());

  if (start > end) {
    return -1;
  }

  let pivot = start + Math.floor((end - start) / 2);
  let pivotValue = array[pivot];
  let startValue = array[start];
  let endValue = array[end];

  console.log('pivot', pivot, 'pivotValue', pivotValue);

  if (needle === pivotValue) {
    return pivot;
  }

  if (needle > pivotValue) {
    if (needle > endValue && pivotValue < startValue) { // break is before the pivot
      return _rotatedArraySearch(array, needle, start, pivot - 1);
    } else { // break is after the pivot
      return _rotatedArraySearch(array, needle, pivot + 1, end);
    }
  } else {
    if (needle < startValue && pivotValue > endValue) { // break is after the pivot
      return _rotatedArraySearch(array, needle, pivot + 1, end);
    } else { // break is after the pivot
      return _rotatedArraySearch(array, needle, start, pivot - 1);
    }
  }
};

let { assert } = require('../helpers');

let original = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176,
  188, 199, 200, 210, 222];

let rotateArray = function(array, n) {
  n = n % array.length;
  return array.slice(-1 * n).concat(array.slice(0, -1 * n));
};

let rotated = rotateArray(original, 6); // now first element is 176, last is 162

assert(rotatedArraySearch(rotated, 176), 0);
assert(rotatedArraySearch(rotated, 162), 19);

assert(rotatedArraySearch(rotated, 1), 6);
assert(rotatedArraySearch(rotated, 199), 2);
assert(rotatedArraySearch(rotated, 222), 5);

assert(rotatedArraySearch(rotated, -100), -1);
assert(rotatedArraySearch(rotated, 666), -1);
