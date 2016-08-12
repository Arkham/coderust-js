// Given an integer array, sort it in ascending order using quicksort.

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  return _quicksort(array, 0, array.length - 1);
}

function _quicksort(array, start, end) {
  if (start > end) {
    return;
  }

  let pivotIndex = partition(array, start, end);
  _quicksort(array, start, pivotIndex - 1);
  _quicksort(array, pivotIndex + 1, end);

  return array;
}

function partition(array, start, end) {
  let pivot = array[start];
  let leftIndex = start;
  let rightIndex = end;

  while(leftIndex < rightIndex) {
    while (array[leftIndex] <= pivot && leftIndex <= end) {
      leftIndex++;
    }

    while (array[rightIndex] > pivot && rightIndex >= start) {
      rightIndex--;
    }

    if (leftIndex < rightIndex) {
      swap(array, leftIndex, rightIndex);
    }
  }

  swap(array, start, rightIndex);

  return rightIndex;
}

function swap(array, first, second) {
  [array[first], array[second]] = [array[second], array[first]];
}

const { assert } = require('../helpers');

assert(quicksort([55, 23, 26, 2, 25]).toString(), '2,23,25,26,55');
assert(quicksort([5, 4, 3, 2, 1]).toString(), '1,2,3,4,5');
assert(quicksort([1, 2, 3, 4, 5, 4, 3, 2, 1]).toString(), '1,1,2,2,3,3,4,4,5');
