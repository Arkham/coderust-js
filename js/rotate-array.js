// Given an array, rotate it by n steps

// O(n) complexity, O(n) memory solution

// function rotateArray(array, n) {
//   n = n % array.length;
//   return array.slice(-1 * n).concat(array.slice(0, -1 * n))
// }

// O(n) complexity, O(1) memory solution

// n = 2
// original   [1,2,3,4,5,6]
// expected   [3,4,5,6,1,2]
// reversed   [6,5,4,3,2,1]

function reverseArrayInPlace(array, start, end) {
  let arrayLength = array.length;

  if (start > end || start > arrayLength || end > arrayLength) {
    return array;
  }

  let limit = start + Math.floor((end - start)/2);

  for (let x = start; x <= limit; x++) {
    let y = start + (end - x);
    [array[x], array[y]] = [array[y], array[x]];
  }

  return array;
}

function rotateArray(array, n) {
  let arrayLength = array.length;

  n = n % arrayLength;

  if (n < 0) {
    n = arrayLength + n;
  }

  reverseArrayInPlace(array, 0, arrayLength - 1);
  reverseArrayInPlace(array, 0, n - 1);
  reverseArrayInPlace(array, n, arrayLength - 1);

  return array;
}

let { assert } = require('./helpers');

assert(reverseArrayInPlace([1,2,3,4,5,6], 0, 0).toString(), '1,2,3,4,5,6');
assert(reverseArrayInPlace([1,2,3,4,5,6], 0, 1).toString(), '2,1,3,4,5,6');
assert(reverseArrayInPlace([1,2,3,4,5,6], 1, 2).toString(), '1,3,2,4,5,6');
assert(reverseArrayInPlace([1,2,3,4,5,6], 1, 4).toString(), '1,5,4,3,2,6');
assert(reverseArrayInPlace([1,2,3,4,5,6], 4, 5).toString(), '1,2,3,4,6,5');
assert(reverseArrayInPlace([1,2,3,4,5,6], 0, 5).toString(), '6,5,4,3,2,1');
assert(reverseArrayInPlace([1,2,3,4,5,6], 1, 0).toString(), '1,2,3,4,5,6');

assert(rotateArray([1,2,3,4,5,6], 2).toString(), '5,6,1,2,3,4');
assert(rotateArray([1,2,3,4,5,6], -1).toString(), '2,3,4,5,6,1');
assert(rotateArray([1,2,3,4,5,6], 6).toString(), '1,2,3,4,5,6');
assert(rotateArray([1,2,3,4,5,6], 8).toString(), '5,6,1,2,3,4');
