// Given a sorted array of integers, return the low and high index of the given
// key. Return -1 if not found. The array length can be in millions with lots
// of duplicates.

function lowHighIndex(array, needle) {
  return [
    lowIndex(array, needle, 0, array.length - 1),
    highIndex(array, needle, 0, array.length - 1)
  ];
}

function lowIndex(array, needle, start, end) {
  if (start > end) {
    return -1;
  }

  let pivotIndex = start + Math.floor((end - start) / 2);
  let pivot = array[pivotIndex];

  if (needle == pivot && (pivotIndex == 0 || array[pivotIndex-1] !== pivot)) {
    return pivotIndex;
  } else if (needle < pivot || (needle == pivot && array[pivotIndex-1] === pivot)) {
    return lowIndex(array, needle, start, pivotIndex - 1);
  } else {
    return lowIndex(array, needle, pivotIndex + 1, end);
  }
}

function highIndex(array, needle, start, end) {
  if (start > end) {
    return -1;
  }

  let pivotIndex = start + Math.floor((end - start) / 2);
  let pivot = array[pivotIndex];

  if (needle == pivot && (pivotIndex == array.length - 1 || array[pivotIndex+1] !== pivot)) {
    return pivotIndex;
  } else if (needle > pivot || (needle == pivot && array[pivotIndex+1] === pivot)) {
    return highIndex(array, needle, pivotIndex + 1, end);
  } else {
    return highIndex(array, needle, start, pivotIndex - 1);
  }
}

const { assert } = require('../helpers');

let data = [1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 7];

assert(lowHighIndex(data, 1).toString(), '0,0');
assert(lowHighIndex(data, 2).toString(), '1,1');
assert(lowHighIndex(data, 5).toString(), '2,9');
assert(lowHighIndex(data, 7).toString(), '10,10');
assert(lowHighIndex(data, 8).toString(), '-1,-1');
