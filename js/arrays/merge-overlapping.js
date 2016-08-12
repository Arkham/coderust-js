// Given an array (list) of intervals as input where each interval has a start
// and end timestamps. Input array is sorted by starting timestamps. You are
// required to merge overlapping intervals and return output array (list).

function mergeOverlapping(array) {
  if (array.length < 1) {
    return array;
  }

  let result = [array[0]];

  array.forEach(function(current) {
    let [start, end] = current;
    let lastResult = result[result.length-1];

    if (overlappingIntervals(current, lastResult)) {
      lastResult[1] = end;
    } else {
      result.push(current);
    }
  });

  return result;
}

function overlappingIntervals(first, second) {
  let [firstStart, firstEnd] = first;
  let [secondStart, secondEnd] = second;

  return (secondStart <= firstEnd && secondEnd >= firstStart);
}

const { assert } = require('../helpers');

assert(mergeOverlapping([[1,5], [3,7], [4,6], [6,8], [10,12], [11,15]]).toString(), '1,8,10,15');
